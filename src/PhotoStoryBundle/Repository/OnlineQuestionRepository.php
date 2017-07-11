<?php

namespace PhotoStoryBundle\Repository;

use Exception;
use Armetiz\AirtableSDK\Airtable;
use PhotoStoryBundle\Model\Question;
use Crisu83\ShortId\ShortId;
use PhotoStoryBundle\Model\OnlineQuestionAdapter;

class OnlineQuestionRepository
{
    const TABLE_NAME = 'Questions';

    private $requiredKeys = [
        'Id',
        'Name',
        'Email',
        'Subject',
        'Content',
    ];

    public function __construct(Airtable $airtable)
    {
        $this->db = $airtable;
        $this->shortid = ShortId::create();
    }

    public function persist(OnlineQuestionAdapter $question)
    {
        $data = $question->getData();
        $data['Id'] = $this->generateUniqueId();
        $this->validate($data);

        $this->db->createRecord(self::TABLE_NAME, $data);
    }

    private function generateUniqueId()
    {
        return $this->shortid->generate();
    }

    private function validate(array $data)
    {
        $dataKeys = array_keys($data);
        $missingKeys = array_diff($this->requiredKeys, $dataKeys);

        if (count($missingKeys) > 0) {
            throw new Exception(
                "Failed to save " .
                self::TABLE_NAME .
                " to an online repository. Missing keys: " .
                implode(', ', $missingKeys)
            );
        }
    }
}
