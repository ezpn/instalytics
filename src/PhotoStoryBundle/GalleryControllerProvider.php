<?php

namespace PhotoStoryBundle;

use Silex\Application;
use Silex\Api\ControllerProviderInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class GalleryControllerProvider implements ControllerProviderInterface
{
    public function connect(Application $app)
    {
        $controllers = $app['controllers_factory'];

        $controllers->get('/', function (Request $request) use ($app) {
            $instagram = $app['instagramService'];
            $page = $request->query->get('page');

            if (!$page) {
                $page = 0;
            }

            $token = $app['instagramStorageService']->getAccessToken();

            if (!$token) {
                $app->abort(Response::HTTP_UNAUTHORIZED);
            }

            $instagram->setAccessToken($token);

            $userMedia = $instagram->getUserMedia('self', 20);
            while ($page--) {
                $userMedia = $instagram->pagination($userMedia);
            }

            return $app->json($userMedia);
        });

        return $controllers;
    }
}
