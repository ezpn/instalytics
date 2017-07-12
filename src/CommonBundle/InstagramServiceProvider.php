<?php

namespace CommonBundle;

use Pimple\Container;
use Pimple\ServiceProviderInterface;
use Andreyco\Instagram\Client as Instagram;

class InstagramServiceProvider implements ServiceProviderInterface
{
    public function register(Container $app)
    {
        $config = $app['config']['instagram'];

        // $this->validate($config);

        $app['instagramService'] = new Instagram($config);
    }
}
