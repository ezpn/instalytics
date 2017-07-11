<?php

namespace PhotoStoryBundle;

use Silex\Application;

class EmailService
{
    private $emailService;

    public function __construct(Application $app)
    {
        $this->emailService = $app['mailgunService'];
    }

    public function send($message)
    {
        $domain = substr(explode('@', $message['from'])[1], 0, -1);
        $this->emailService->sendMessage($domain, $message);
    }
}
