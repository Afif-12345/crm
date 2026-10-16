<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title') - CRM</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/auth.css') }}?v={{ filemtime(public_path('css/auth.css')) }}">
</head>
<body>
    @yield('content')

    @stack('scripts')
    <script src="{{ asset('js/fx.js') }}?v={{ filemtime(public_path('js/fx.js')) }}"></script>
</body>
</html>