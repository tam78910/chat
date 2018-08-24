<?php
/**
 * Created by PhpStorm.
 * User: Toomtam
 * Date: 8/25/2018
 * Time: 1:50 AM
 */

namespace App\Interfaces;


use App\Member;

interface IMemberRepository
{
    public function create(Member $member);
}