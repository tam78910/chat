<?php
/**
 * Created by PhpStorm.
 * User: Toomtam
 * Date: 8/25/2018
 * Time: 1:57 AM
 */

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\ChanelCollection;
use App\Repositories\ChanelRepository;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    protected $chanelRepository;

    public function __construct(ChanelRepository $chanelRepository)
    {
        $this->chanelRepository = $chanelRepository;
    }

    public function chanel()
    {
        return new ChanelCollection($this->chanelRepository->get());
    }

    public function store(Request $request)
    {
        $this->validate($request, [
           'name' => 'required'
        ]);

        return $this->chanelRepository->create(['name' => $request->name]);
    }
}