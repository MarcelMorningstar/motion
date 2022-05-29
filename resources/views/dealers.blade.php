<x-layout>
    <style>
        header {
            width: 100vw;
            height: 80px;
            background-color: var(--color-dark-grey);
        }
    </style>

    <header></header>

    <section id="dealers" data-dealers="{{$dealers}}" data-countries="{{$countries}}"></section>
</x-layout>