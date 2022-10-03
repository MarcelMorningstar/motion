<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    function show($name) {
        return view('product', ['product' => Product::where('name', '=', $name) -> with('images') -> first()]);
    }
}
