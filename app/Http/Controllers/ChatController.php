<?php
/**
 * Created by PhpStorm.
 * User: Toomtam
 * Date: 8/25/2018
 * Time: 2:37 AM
 */

namespace App\Http\Controllers;


class ChatController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        return view('chats.index');
    }
}