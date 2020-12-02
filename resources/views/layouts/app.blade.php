<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
            @include('layouts.sitemeta', [
  'title' => 'Premonday Starter',
  'description' => 'Description',
  'image' => asset('img/meta/meta-pic.jpg'),
  'favicon' => asset('img/meta/favicon.png')
])

        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
    </head>
    <body>
    @yield('content')
    </body>
</html>
