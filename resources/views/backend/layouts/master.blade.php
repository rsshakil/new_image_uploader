<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Template</title>
    <link rel="shortcut icon" href="{{Config::get('app.url') . '/public/backend/images/logo/favicon.ico'}}">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="{{ Config::get('app.url').'public' }}{{mix('css/backend_app.css')}}">

    @include('backend.layouts.js_variable')

</head>

<body>
<body class="hold-transition sidebar-mini layout-fixed">
<div class="wrapper" id="app"></div>
    <script src="{{ Config::get('app.url').'public' }}{{mix('js/backend_app.js')}}"></script>
</body>

</html>
