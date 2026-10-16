<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title') - CRM</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet">
    <script>(function(){var SKALA=0.8;/* 1 = ukuran Figma penuh; kecilkan angka ini untuk tampilan lebih kecil */var f=function(){document.documentElement.style.fontSize=(document.documentElement.clientWidth/(90/SKALA))+'px'};f();addEventListener('resize',f);addEventListener('load',f)})()</script>
    <link rel="stylesheet" href="{{ asset('css/layout.css') }}?v={{ filemtime(public_path('css/layout.css')) }}">
    @stack('styles')
</head>
<body data-title="@yield('title')" data-active="@yield('active')">
<div class="app">
    <aside class="sidebar" id="sidebar"></aside>
    <div class="main">
        <header class="topbar" id="topbar"></header>
        <main class="canvas">
            @yield('content')
        </main>
    </div>
</div>

@stack('modals')

<script src="{{ asset('js/layout.js') }}?v={{ filemtime(public_path('js/layout.js')) }}"></script>
@stack('scripts')
<script src="{{ asset('js/fx.js') }}?v={{ filemtime(public_path('js/fx.js')) }}"></script>
</body>
</html>