@extends('layouts.auth')

@section('title', 'Lupa Password')

@section('content')
<div class="auth"><form class="auth-card" id="f" novalidate>
  <h2>Verifikasi Email anda</h2>
  <p class="desc">kami akan mengirim verifikasi ke email anda<br>Pastikan Email anda benar</p>
  <label for="email">Email:</label>
  <input type="email" id="email" placeholder="Masukkan Email">
  <p class="error" id="err" style="margin-bottom:18px"></p>
  <button class="btn" type="submit">Verify</button>
  <a class="link" href="{{ route('login') }}" style="margin-top:20px">&larr; Kembali ke login</a>
</form>
</div>
@endsection

@push('scripts')
<script>
f.addEventListener('submit',e=>{
  e.preventDefault();
  if(!/^\S+@\S+\.\S+$/.test(email.value.trim())) return err.textContent='Masukkan email yang benar.';
  err.style.color='#0a8a1c'; err.textContent='Link verifikasi dikirim ke '+email.value+' (simulasi).';
});
</script>
@endpush