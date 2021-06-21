<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class CarsController extends Controller
{
    public function getCategory()
    {
        $category = Http::get('https://api-prod.autochek.africa/v1/inventory/make?popular=true');
        return Response($category["makeList"], 200);
    }

    public function getAllCars()
    {
        $cars = Http::get('https://api-prod.autochek.africa/v1/inventory/car/search');
        return Response($cars["result"], 200);
    }

    public function getCar(Request $request)
    {
        $car = Http::get("https://api-prod.autochek.africa/v1/inventory/car/{$request->car}");
        return Response($car, 200);
    }

    public function getCarMedia(Request $request)
    {
        $carMedia = Http::get("https://api-prod.autochek.africa/v1/inventory/car_media?carId={$request->car}");
        return Response($carMedia["carMediaList"], 200);
    }

}
