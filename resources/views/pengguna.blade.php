@extends('layouts.app')

@section('title', 'User')
@section('active', 'pengguna')

@push('styles')
<link rel="stylesheet" href="{{ asset('css/pengguna.css') }}?v={{ filemtime(public_path('css/pengguna.css')) }}">
@endpush

@section('content')
<div class="card ucard" style="left:1rem;top:3.9375rem;width:11.6875rem;height:7.75rem"><span class="t l" style="left:0.875rem">Total Akun</span><span class="t n" id="sTotal" style="left:0.9437rem">0</span></div>
<div class="card ucard" style="left:14.9375rem;top:3.9375rem;width:11.6875rem;height:7.75rem"><span class="t l" style="left:1.125rem">Aktif</span><span class="t n" id="sAktif" style="left:1.0375rem;color:var(--green)">0</span></div>
<div class="card ucard" style="left:28.875rem;top:3.9375rem;width:11.6875rem;height:7.75rem"><span class="t l" style="left:1rem">Verifikasi</span><span class="t n" id="sVerif" style="left:1.475rem;color:#7d620b">0</span></div>
<div class="card ucard" style="left:42.8125rem;top:3.9375rem;width:11.6875rem;height:7.75rem"><span class="t l" style="left:1rem">Nonaktif</span><span class="t n" id="sNon" style="left:1.0375rem;color:#9a9a9a">0</span></div>
<button class="btn-add" id="btnAdd">
  <svg width="31" height="30" viewBox="0 0 31 30"><path d="M15.5 1v28M1 15h29" stroke="#fff" stroke-width="2.2"/></svg><span>Tambah<br>Akun</span></button>

<section class="panel" id="panel">
  <button class="tab on" data-tab="akun" style="left:2.125rem">Akun</button>
  <button class="tab" data-tab="role" style="left:10.0625rem">Hak akses role</button>
  <div class="tabline"></div>
  <div id="vAkun">
    <div class="filters">
      <input class="fld" id="q" placeholder="Cari nama atau email">
      <select class="fld" id="fRole" style="width:10.625rem"><option value="">Semua Role</option><option>Owner</option><option>Admin</option><option>Sales</option></select>
      <select class="fld" id="fStatus" style="width:10.6875rem"><option value="">Semua Status</option><option>Aktif</option><option>Verifikasi</option><option>Nonaktif</option></select>
    </div>
    <div class="thead"><span class="t" style="left:0.95%">Nama</span><span class="t" style="left:15.96%">Email</span><span class="t" style="left:46.66%">Role</span>
      <span class="t" style="left:55.77%">Status</span><span class="t" style="left:68.78%">Login Terakhir</span><span class="t" style="left:92.54%">Aksi</span></div>
    <div id="rows"></div>
    <div class="menu" id="menu">
      <button data-act="edit" style="top:0.1875rem">Ubah Akun</button><button data-act="toggle" id="mToggle" style="top:2.125rem">Nonaktifkan akun</button>
      <button data-act="resend" style="top:4.3125rem">Kirim ulang email verifikasi</button><hr><button class="del" data-act="del" style="top:6.9375rem">Hapus akun</button></div>
  </div>
  <div id="vRole" style="display:none">
    <div class="thead"><span class="t" style="left:0.95%">Role</span><span class="t" style="left:15.96%">Hak akses</span></div>
    <div class="row" style="top:13.0625rem"><span class="t" style="left:1.12%">Owner</span><span class="t" style="left:16.08%">Semua fitur dan kelola pengguna</span></div>
    <div class="row" style="top:17.375rem"><span class="t" style="left:1.12%">Admin</span><span class="t" style="left:16.08%">Kelola leads, customer dan penawaran</span></div>
    <div class="row" style="top:21.6875rem"><span class="t" style="left:1.12%">Sales</span><span class="t" style="left:16.08%">Leads, follow up dan kesepakatan</span></div></div>
</section>
@endsection

@push('scripts')
<script src="{{ asset('js/pengguna.js') }}?v={{ filemtime(public_path('js/pengguna.js')) }}"></script>
@endpush

@include('partials.popup-akun')