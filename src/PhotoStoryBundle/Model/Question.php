<?php

namespace PhotoStoryBundle\Model;

use DateTime;
use DateTimeZone;

class Question
{
    private $name;

    private $email;

    private $subject;

    private $content;

    private $createdAt;


    public function __construct()
    {
        $this->createdAt = new DateTime();
    }

    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    public function getName()
    {
        return $this->name;
    }

    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    public function getEmail()
    {
        return $this->email;
    }

    public function setSubject($subject)
    {
        $this->subject = $subject;

        return $this;
    }

    public function getSubject()
    {
        return $this->subject;
    }

    public function setContent($content)
    {
        $this->content = $content;

        return $this;
    }

    public function getContent()
    {
        return $this->content;
    }

    public function setCreatedAt($createdAt)
    {
        $this->createAt = $createdAt;

        return $this;
    }

    public function getCreatedAt()
    {
        return $this->createdAt;
    }
}
