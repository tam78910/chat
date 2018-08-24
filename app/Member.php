<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    protected $fillable= ['chanel_id', 'user_id', 'status'];
}
