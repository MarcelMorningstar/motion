<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DealersController extends Controller
{
    function show()
    {
        return view('dealers');
    }
}
