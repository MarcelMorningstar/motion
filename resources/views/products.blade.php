<x-main position="static" color="var(--color-1)">
    <style>
        section#products {
            margin-bottom: 32px;
        }
    </style>

    <x-header title="Products" messege="Lorem, ipsum dolor sit amet consectetur adipisicing elit" />
    
    <section id='products' data-data='{{$data}}' data-categories='{{$categories}}' data-styles='{{$styles}}' data-materials='{{$materials}}'></section>
</x-main>