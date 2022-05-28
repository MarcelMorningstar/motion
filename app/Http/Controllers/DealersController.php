<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Dealer;
use App\Models\Country;

class DealersController extends Controller
{
    function show()
    {
        return view('dealers') -> with(['dealers' => Dealer::all(), 'countries' => Country::all()]);
    }
}
