<?php

namespace PhotoStoryBundle;

use Silex\Application;

class InstagramStorageService
{
    const SESSION_KEY = 'instagram-app-token';

    public function __construct(Application $app)
    {
        $this->session = $app['session'];
    }

    public function saveAccessToken($token)
    {
        $this->session->set(self::SESSION_KEY, $token);
    }

    public function getAccessToken()
    {
        return $this->session->get(self::SESSION_KEY);
    }
}
