<?php

namespace CommonBundle;

use Exception;
use Silex\Application;
use PhotoStoryBundle\Repository\OnlineQuestionRepository;

class RepositoryManager
{
    private $repositories;

    public function __construct(Application $app)
    {
        $this->repositories = [
            'OnlineQuestionRepository' => new OnlineQuestionRepository(
                $app['airtableService']
            ),
        ];
    }

    public function get($respositoryName)
    {
        if (!isset($this->repositories[$respositoryName])) {
            throw new Exception("Repository {$respositoryName} does not exist");
        }

        return $this->repositories[$respositoryName];
    }
}
