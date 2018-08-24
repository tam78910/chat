<?php
/**
 * Created by PhpStorm.
 * User: Toomtam
 * Date: 8/25/2018
 * Time: 1:53 AM
 */

namespace App\Repositories;

use App\Chanel;
use App\Interfaces\IChanelRepository;

class ChanelRepository implements IChanelRepository
{
    public function create(Chanel $chanel)
    {
        return Chanel::create($chanel);
    }

    public function find($id)
    {
        return Chanel::find($id);
    }

    public function get()
    {
        return Chanel::get();
    }

}