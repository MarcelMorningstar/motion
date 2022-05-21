<x-layout>
    <style>
        header img {
            width: 100vw;
        }
    </style>

    <header>
        <img src="images/products-header.jpg" alt="" loading="eager">
    </header>
    <div id='products' data-data='{{$data}}' data-categories='{{$categories}}' data-styles='{{$styles}}' data-materials='{{$materials}}'></div>
</x-layout>