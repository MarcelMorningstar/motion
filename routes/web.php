<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SitemapController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\DealersController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [SitemapController::class, 'welcome']);

Route::get('/products', [ProductsController::class, 'show']);

Route::get('/about-us', [SitemapController::class, 'about']);

Route::get('/contact-us', [SitemapController::class, 'contact']);

Route::get('/dealers', [DealersController::class, 'show']);
