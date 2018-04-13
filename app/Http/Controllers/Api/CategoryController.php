<?php

namespace App\Http\Controllers\Api;

use App\Category;
use App\Http\Resources\CategoryCollection;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CategoryController extends Controller
{
    public function index()
    {
        return CategoryCollection::collection(Category::all());
    }
}
