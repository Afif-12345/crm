@extends('layouts.app')

@section('title', 'Dashboard')
@section('active', 'dashboard')

@push('styles')
<link rel="stylesheet" href="{{ asset('css/dashboard.css') }}?v={{ filemtime(public_path('css/dashboard.css')) }}">
@endpush

@section('content')
<i class="sq" style="left:1.5rem;top:1.5rem;background:var(--green)"></i><span class="t" style="left:3.4375rem;top:2.025rem;font-size:0.6875rem">Won</span>
<i class="sq" style="left:15.3125rem;top:1.5rem;background:var(--red)"></i><span class="t" style="left:17.25rem;top:2.025rem;font-size:0.6875rem">Lost</span>

<div class="date" id="date"><span class="t" id="dateTxt">April 1, 2026 - Agustus 1, 2026</span><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/></svg></div>
<div class="pop" id="datePop" style="right:1.75rem;top:3.625rem;width:14.3125rem;padding:0.875rem">
  <label style="font-size:0.75rem">Dari</label><input type="date" id="d1" value="2026-04-01" style="width:100%;margin:0.25rem 0 0.625rem;padding:0.25rem;font-size:0.8125rem">
  <label style="font-size:0.75rem">Sampai</label><input type="date" id="d2" value="2026-08-01" style="width:100%;margin:0.25rem 0 0.75rem;padding:0.25rem;font-size:0.8125rem">
  <button id="dApply" style="width:100%;height:1.875rem;border:0;border-radius:0.375rem;background:var(--blue-d);color:#fff;font-size:0.8125rem;cursor:pointer">Terapkan</button></div>

<div class="stats" style="position:absolute;left:0.9375rem;top:4.1875rem;right:26.6875rem;height:7.75rem;display:grid;grid-template-columns:218fr 218fr 139fr 139fr;gap:0.8125rem">
<div class="card clickable" data-focus="green" style="">
  <span class="t" style="left:1.0625rem;top:1.1094rem;font-size:0.9375rem;font-weight:600">Won Revenue</span>
  <span class="t num" style="left:1.125rem;top:3.025rem;font-size:1.5rem;color:#0e8720">Rp.15.000.000</span></div>
<div class="card clickable" data-focus="red" style="">
  <span class="t" style="left:0.625rem;top:0.9219rem;font-size:0.9375rem;font-weight:600">Lost Revenue</span>
  <span class="t num" style="left:0.625rem;top:3.025rem;font-size:1.5rem;color:#f90000">Rp.1.000.000</span></div>
<div class="card clickable" data-focus="green" style="">
  <span class="t" style="left:0.875rem;top:0.9219rem;font-size:0.9375rem;font-weight:600">Deals Won</span>
  <span class="t num" style="left:0.875rem;top:3.15rem;font-size:1.5rem">10</span>
  <svg class="a" viewBox="0 0 24 24" style="left:3.5rem;top:3.1875rem;width:1.375rem;height:1.375rem;stroke:#0a8a1c;fill:none;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round"><path d="M3 17l6-6 4 4 8-8M15 7h6v6"/></svg></div>
<div class="card clickable" data-focus="red" style="">
  <span class="t" style="left:0.4375rem;top:0.9219rem;font-size:0.9375rem;font-weight:600">Deals Lost</span>
  <span class="t num" style="left:0.4375rem;top:3.025rem;font-size:1.5rem">2</span>
  <svg class="a" viewBox="0 0 24 24" style="left:3rem;top:3.1875rem;width:1.375rem;height:1.375rem;stroke:#f00;fill:none;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round"><path d="M3 7l6 6 4-4 8 8M15 17h6v-6"/></svg></div>

</div>
<div class="card chart" id="chart" style="left:0.9375rem;right:26.6875rem;top:14rem;height:28.875rem"></div>

<div class="card tc clickable" id="tcCard" style="right:2.0625rem;top:4.1875rem;width:23.125rem;height:18.0625rem">
  <span class="t" style="left:0;width:23.125rem;top:0.9375rem;font-size:1.25rem;font-weight:600">Top Customer</span>
  <img src="{{ asset('assets/customer.jpg') }}" style="left:8.5rem;top:5.1875rem;width:6.125rem;height:6.125rem" alt="">
  <svg viewBox="0 0 68 46" style="left:9.5rem;top:2.4375rem;width:4.25rem;height:2.875rem"><path d="M11 40L4 10l16 14L34 4l14 20 16-14-7 30z" fill="#f5b301" stroke="#b97800" stroke-width="2" stroke-linejoin="round"/><rect x="11" y="33" width="46" height="6" fill="#e09a00"/><circle cx="4" cy="9" r="3" fill="#f5b301" stroke="#b97800" stroke-width="1.5"/><circle cx="34" cy="4" r="3" fill="#f5b301" stroke="#b97800" stroke-width="1.5"/><circle cx="64" cy="9" r="3" fill="#f5b301" stroke="#b97800" stroke-width="1.5"/></svg>
  <span class="t" style="left:0;width:23.125rem;top:12.9688rem;font-size:1.0625rem;font-weight:600">Teddy Indra Wijaya</span>
  <span class="t" style="left:0;width:23.125rem;top:15.5rem;font-size:0.8125rem">Editing vidio - 50 Order - Rp. 25.000.000</span></div>
<div class="card" style="right:2.125rem;top:24.4375rem;width:23.125rem;height:18.0625rem"></div>
<div style="position:absolute;left:1.0625rem;right:26.6875rem;top:44.25rem;height:12.3125rem;display:grid;grid-template-columns:1fr 1fr;gap:1.25rem"><div class="b2"></div><div class="b2"></div></div>
<div class="bottom" style="right:1.9375rem"></div>
@endsection

@section('modals')
<div class="overlay" id="mCust"><div class="ovwrap"><div class="modal cust" style="left:32.5rem;top:12rem;width:25rem">
  <button class="x" data-close style="right:1rem;top:0.75rem">X</button>
  <img src="{{ asset('assets/customer.jpg') }}" alt="">
  <h3>Teddy Indra Wijaya</h3><p class="tag">Top Customer</p>
  <div class="row3"><div><b>Editing vidio</b><span>Layanan</span></div><div><b>50</b><span>Order</span></div><div><b>Rp. 25.000.000</b><span>Total</span></div></div>
  <button class="mbtn2" data-close>Tutup</button></div></div></div>
@endsection

@push('scripts')
<script src="{{ asset('js/dashboard.js') }}?v={{ filemtime(public_path('js/dashboard.js')) }}"></script>
@endpush

@include('partials.popup-customer')