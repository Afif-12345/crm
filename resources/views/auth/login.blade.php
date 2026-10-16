@extends('layouts.auth')

@section('title', 'Login')

@section('content')
<div class="auth"><form class="auth-card" id="loginForm" novalidate>
  <img class="logo" src="{{ asset('assets/logo-biru.png') }}" alt="CRM">
  <label for="email">Email:</label>
  <input type="email" id="email" placeholder="Masukkan Email">
  <label for="password">Password:</label>
  <input type="password" id="password" placeholder="Masukkan Password">
  <a class="link" href="{{ route('lupa-password') }}">Lupa Password?</a>
  <button class="btn" type="submit">LOGIN</button>
  <p class="error" id="err"></p>
</form>
</div>
@endsection

@push('scripts')
<script>
document.getElementById('loginForm').addEventListener('submit',e=>{
  e.preventDefault();
  const em=email.value.trim(),pw=password.value;
  if(!/^\S+@\S+\.\S+$/.test(em)) return err.textContent='Format email tidak valid.';
  if(pw.length<4) return err.textContent='Password minimal 4 karakter.';
  localStorage.setItem('crm_login',em);
  location.href = '{{ route('dashboard') }}';
});
</script>
@endpush