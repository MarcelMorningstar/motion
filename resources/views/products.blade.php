<x-layout>
    <style>
        header {
            width: 100%;
            height: 750px;
            background-image: url('images/products-header.jpg');
            background-repeat: no-repeat;
        }
    </style>
    <header></header>
    <div id='products' data-data='{{$data}}' data-categories='{{$categories}}' data-styles='{{$styles}}' data-materials='{{$materials}}'></div>
</x-layout>