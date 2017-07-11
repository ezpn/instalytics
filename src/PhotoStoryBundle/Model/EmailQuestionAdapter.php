<?php

namespace PhotoStoryBundle\Model;

class EmailQuestionAdapter
{
    private $question;

    public function __construct(Question $question)
    {
        $this->question = $question;
    }

    public function getData()
    {
        return [
            'subject' => $this->question->getSubject(),
            'text' => $this->question->getContent(),
            'h:reply-to' => "{$this->question->getName()} <{$this->question->getEmail()}>",
        ];
    }
}
