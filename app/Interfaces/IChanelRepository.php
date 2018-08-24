<?php

namespace App\Interfaces;

use App\Chanel;

interface IChanelRepository
{
    public function create(Chanel $chanel);

    public function find($id);

    public function get();
}