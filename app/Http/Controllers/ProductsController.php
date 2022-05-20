<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;
use App\Models\Style;
use App\Models\Material;

class ProductsController extends Controller
{
    function show()
    {
        $data = Product::with('images') 
        -> select('products.ID', 'products.name', 'products.price', 'products.gender', 'categories.name AS category', 'materials.name AS material', 'styles.name AS style') 
        -> join('categories', 'categories.ID', '=', 'products.categoryID') 
        -> join('materials', 'materials.ID', '=', 'products.materialID') 
        -> join('styles', 'styles.ID', '=', 'products.styleID') 
        -> get();

        $categories = Category::select('*') -> orderBy('name', 'asc') -> get();

        $styles = Style::select('*') -> orderBy('name', 'asc') -> get();

        $materials = Material::select('*') -> orderBy('name', 'asc') -> get();

        return view('products') -> with(['data' => $data, 'categories' => $categories, 'styles' => $styles, 'materials' => $materials]);
    }
}
