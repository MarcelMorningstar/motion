<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app() -> getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="../css/app.css">
        <script src="{{ asset('js/app.js') }}" defer></script>
        <title>Motion</title>
    </head>
    <body>
        <x-navbar position="{{ $position }}" color="{{ $color }}" />
        {{ $slot }}
        <x-footer/>
    </body>
</html>