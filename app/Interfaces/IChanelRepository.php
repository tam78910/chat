<?php

namespace App\Interfaces;

interface IChanelRepository
{
    public function create($chanel);

    public function find($id);

    public function get();
}