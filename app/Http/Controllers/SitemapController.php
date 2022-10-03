<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SitemapController extends Controller
{
    function welcome()
    {
        return view('welcome');
    }

    function about()
    {
        return view('about');
    }

    function contact()
    {
        return view('contact');
    }
    
    function admin()
    {
        $url = "http://motion123215.atwebpages.com/";

        return redirect()->away($url);;
    }
}
