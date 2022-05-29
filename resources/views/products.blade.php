<x-layout>
    <style>
        header img {
            width: 100vw;
        }

        section#products {
            margin-bottom: 32px;
        }
    </style>

    <header>
        <img src="images/products-header.jpg" alt="" loading="eager">
    </header>
    
    <section id='products' data-data='{{$data}}' data-categories='{{$categories}}' data-styles='{{$styles}}' data-materials='{{$materials}}'></section>
</x-layout>