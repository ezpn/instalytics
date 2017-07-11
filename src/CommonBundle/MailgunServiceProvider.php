<?php

namespace CommonBundle;

use Exception;
use Pimple\Container;
use Pimple\ServiceProviderInterface;
use Mailgun\Mailgun;

class MailgunServiceProvider implements ServiceProviderInterface
{
    public function register(Container $app)
    {
        $config = $app['config']['mailgun'];

        $this->validate($config);

        $app['mailgunService'] = new Mailgun($config['key']);
    }

    private function validate(array $config)
    {
        if (!isset($config)) {
            throw new Exception('Mailgun configuration is required');
        }

        if (!isset($config['key'])) {
            throw new Exception('Mailgun key is required');
        }
    }
}
