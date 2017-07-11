<?php

namespace CommonBundle;

use Exception;
use Pimple\Container;
use Pimple\ServiceProviderInterface;
use Armetiz\AirtableSDK\Airtable;

class AirtableServiceProvider implements ServiceProviderInterface
{
    public function register(Container $app)
    {
        $config = $app['config']['airtable'];

        $this->validate($config);

        $app['airtableService'] = new Airtable($config['key'], $config['base']);
    }

    private function validate(array $config)
    {
        if (!isset($config)) {
            throw new Exception('Airtable configuration is required');
        }

        if (!isset($config['key'])) {
            throw new Exception('Airtable key is required');
        }

        if (!isset($config['base'])) {
            throw new Exception('Airtable base is required');
        }
    }
}
