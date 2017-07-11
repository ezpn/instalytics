<?php

namespace PhotoStoryBundle;

use Silex\Application;
use Silex\Api\ControllerProviderInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use PhotoStoryBundle\Model\Question;
use PhotoStoryBundle\Model\EmailQuestionAdapter;
use PhotoStoryBundle\Model\OnlineQuestionAdapter;

class ContactControllerProvider implements ControllerProviderInterface
{
    const DEFAULT_SUBJECT = 'Client question';

    public function connect(Application $app)
    {
        $controllers = $app['controllers_factory'];

        $controllers->post('/', function (Request $request) use ($app) {
            $question = (new Question())->setName($request->request->get('name'))
                ->setEmail($request->request->get('email'))
                ->setSubject(self::DEFAULT_SUBJECT)
                ->setContent($request->request->get('content'));

            $errors = $app['validator']->validate($question);

            if (count($errors) > 0) {
                return new Response(Response::HTTP_UNPROCESSABLE_ENTITY);
            }

            $emailData = (new EmailQuestionAdapter($question))->getData();
            $emailData['from'] = "{$app['email.defaults']['from']['name']} <{$app['email.defaults']['from']['email']}>";
            $emailData['to'] = $app['email.defaults']['to']['email'];

            $onlineQuestion = new OnlineQuestionAdapter($question);

            $app['emailService']->send($emailData);
            $app['repositoryManager']->get('OnlineQuestionRepository')
                ->persist($onlineQuestion);

            return new Response(Response::HTTP_OK);
        });

        return $controllers;
    }
}
