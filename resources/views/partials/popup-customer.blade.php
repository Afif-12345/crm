@push('styles')
<link rel="stylesheet" href="{{ asset('css/popup.css') }}?v={{ filemtime(public_path('css/popup.css')) }}">
<link rel="stylesheet" href="{{ asset('css/efek.css') }}?v={{ filemtime(public_path('css/efek.css')) }}">
@endpush

@push('modals')
<div class="overlay" id="mCust"><div class="ovwrap"><div class="modal cust" style="left:32.5rem;top:12rem;width:25rem">
  <button class="x" data-close style="right:1rem;top:0.75rem">X</button>
  <img src="{{ asset('assets/customer.jpg') }}" alt="">
  <h3>Teddy Indra Wijaya</h3><p class="tag">Top Customer</p>
  <div class="row3"><div><b>Editing vidio</b><span>Layanan</span></div><div><b>50</b><span>Order</span></div><div><b>Rp. 25.000.000</b><span>Total</span></div></div>
  <button class="mbtn2" data-close>Tutup</button></div></div></div>
@endpush

@push('scripts')
<script src="{{ asset('js/dashboard-efek.js') }}?v={{ filemtime(public_path('js/dashboard-efek.js')) }}"></script>
@endpush