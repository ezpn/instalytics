<?php

namespace PhotoStoryBundle;

use Silex\Application;
use Silex\Api\ControllerProviderInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class ContactControllerProvider implements ControllerProviderInterface
{
    const DEFAULT_SUBJECT = 'Client question';

    public function connect(Application $app)
    {
        $controllers = $app['controllers_factory'];

        $controllers->post('/', function (Request $request) use ($app) {
            $message = [
              'from' => "{$app['email.defaults']['from']['name']} <{$app['email.defaults']['from']['email']}>",
              'to' => $app['email.defaults']['to']['email'],
              'subject' => self::DEFAULT_SUBJECT,
              'text' => $request->request->get('content'),
              'h:reply-to' => "{$request->request->get('name')} <{$request->request->get('email')}>",
            ];

            $app['emailService']->send($message);

            return new Response(Response::HTTP_OK);
        });

        return $controllers;
    }
}
