<?php

use Illuminate\Support\Facades\Route;

Route::redirect('/', '/login');

Route::view('/login', 'auth.login')->name('login');
Route::view('/lupa-password', 'auth.lupa-password')->name('lupa-password');
Route::view('/dashboard', 'dashboard')->name('dashboard');
Route::view('/pengguna', 'pengguna')->name('pengguna');