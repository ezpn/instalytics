<?php

use Silex\Application;
use Silex\Provider\AssetServiceProvider;
use Silex\Provider\TwigServiceProvider;
use Silex\Provider\ServiceControllerServiceProvider;
use Silex\Provider\HttpFragmentServiceProvider;
use Lokhman\Silex\Provider\ConfigServiceProvider;
use CommonBundle\MailgunServiceProvider;
use CommonBundle\AirtableServiceProvider;
use CommonBundle\RepositoryManager;
use PhotoStoryBundle\EmailService;
use Silex\Provider\ValidatorServiceProvider;

$app = new Application();
$app->register(new ConfigServiceProvider(), [
  'config.dir' => __DIR__ . '/../config',
]);
$app->register(new MailgunServiceProvider());
$app->register(new AirtableServiceProvider());
$app->register(new ServiceControllerServiceProvider());
$app->register(new AssetServiceProvider());
$app->register(new TwigServiceProvider());
$app->register(new HttpFragmentServiceProvider());
$app->register(new ValidatorServiceProvider());

$app['emailService'] = function () use ($app) {
    return new EmailService($app);
};

$app['repositoryManager'] = function () use ($app) {
    return new RepositoryManager($app);
};

$app['twig'] = $app->extend('twig', function ($twig, $app) {
    // add custom globals, filters, tags, ...

    return $twig;
});

return $app;
