<?php
/**
 * Created by PhpStorm.
 * User: Toomtam
 * Date: 8/25/2018
 * Time: 1:51 AM
 */

namespace App\Interfaces;


use App\Message;

interface IMessageRepository
{
    public function create(Message $message);
}