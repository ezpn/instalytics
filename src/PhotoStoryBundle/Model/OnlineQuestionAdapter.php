<?php

namespace PhotoStoryBundle\Model;

use DateTime;

class OnlineQuestionAdapter
{
    const DATE_TIME_FORMAT = 'Y-m-d H:i:s';

    public function __construct(Question $question)
    {
        $this->question  = $question;
    }

    public function getData()
    {
        return [
            'Id' => null,
            'Name' => $this->question->getName(),
            'Email' => $this->question->getEmail(),
            'Subject' => $this->question->getSubject(),
            'Content' => $this->question->getContent(),
        ];
    }
}
