<?php

use Silex\Application;
use Silex\Provider\AssetServiceProvider;
use Silex\Provider\TwigServiceProvider;
use Silex\Provider\ServiceControllerServiceProvider;
use Silex\Provider\HttpFragmentServiceProvider;
use Silex\Provider\SessionServiceProvider;
use Lokhman\Silex\Provider\ConfigServiceProvider;
use CommonBundle\MailgunServiceProvider;
use CommonBundle\AirtableServiceProvider;
use CommonBundle\InstagramServiceProvider;
use CommonBundle\RepositoryManager;
use PhotoStoryBundle\EmailService;
use PhotoStoryBundle\InstagramStorageService;
use Silex\Provider\ValidatorServiceProvider;

$app = new Application();
$app->register(new ConfigServiceProvider(), [
  'config.dir' => __DIR__ . '/../config',
]);
$app->register(new MailgunServiceProvider());
$app->register(new InstagramServiceProvider());
$app->register(new AirtableServiceProvider());
$app->register(new ServiceControllerServiceProvider());
$app->register(new AssetServiceProvider());
$app->register(new TwigServiceProvider());
$app->register(new HttpFragmentServiceProvider());
$app->register(new ValidatorServiceProvider());
$app->register(new SessionServiceProvider());

$app['emailService'] = function () use ($app) {
    return new EmailService($app);
};

$app['instagramStorageService'] = function () use ($app) {
    return new InstagramStorageService($app);
};

$app['repositoryManager'] = function () use ($app) {
    return new RepositoryManager($app);
};

$app['twig'] = $app->extend('twig', function ($twig, $app) {
    // add custom globals, filters, tags, ...

    return $twig;
});

return $app;
