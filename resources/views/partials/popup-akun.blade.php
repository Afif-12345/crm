@push('styles')
<link rel="stylesheet" href="{{ asset('css/popup.css') }}?v={{ filemtime(public_path('css/popup.css')) }}">
@endpush

@push('modals')
<div class="overlay" id="mAdd"><div class="ovwrap"><div class="modal" style="left:29.375rem;top:3.3125rem;width:39.125rem;height:55.6875rem">
  <button class="x" data-close style="left:37rem;top:0.7125rem">X</button>
  <h2 style="top:5.325rem">Tambah akun</h2>
  <p class="sub" style="top:8.1562rem">Setelah email di verifikasi dan menambahkan<br>password , akun akan aktif</p>
  <span class="t" style="left:4.0625rem;top:14.4688rem">Nama:</span>
  <input class="in" id="aNama" placeholder="Masukkan nama" style="left:3.875rem;top:17.125rem;padding-left:0.8125rem">
  <span class="t" style="left:3.9375rem;top:23.9062rem">Pilih Role</span>
  <select class="in" id="aRole" style="left:3.8125rem;top:27.25rem;padding-left:1.0625rem"><option>Admin</option><option>Sales</option><option>Owner</option></select>
  <svg class="mtri" style="left:31.9375rem;top:28.8125rem" viewBox="0 0 22 16"><path d="M0 0h22L11 16z"/></svg>
  <span class="t" style="left:3.9375rem;top:34.1562rem">Email:</span>
  <input class="in" id="aEmail" type="email" placeholder="Masukkan email" style="left:3.6875rem;top:37rem;padding-left:1.1875rem">
  <p class="merr" id="aErr" style="left:3.8125rem;top:41.75rem"></p>
  <button class="mbtn" id="aSave" style="left:3.6875rem;top:43.625rem">Simpan dan kirim email</button></div></div></div>

<div class="overlay" id="mEdit"><div class="ovwrap"><div class="modal" style="left:29.375rem;top:10.375rem;width:35.8125rem;height:45.5rem">
  <button class="x" data-close style="left:33.375rem;top:0.9688rem">X</button>
  <h2 style="left:0;top:2.825rem">Ubah Akun</h2>
  <span class="t" style="left:2.625rem;top:9.3438rem">Nama:</span>
  <input class="in" id="eNama" style="left:2.375rem;top:11.9375rem;padding-left:1.0625rem">
  <span class="t" style="left:2.625rem;top:17.5312rem">Email:</span>
  <input class="in" disabled value="Email tidak dapat diubah setelah diaktifkan" style="left:2.375rem;top:20.1875rem;padding-left:0.75rem">
  <span class="t" style="left:2.625rem;top:26.9062rem">Role:</span>
  <select class="in" id="eRole" style="left:2.375rem;top:29.625rem;padding-left:1.0625rem"><option>Admin</option><option>Sales</option><option>Owner</option></select>
  <svg class="mtri" style="left:30.5rem;top:31.1875rem" viewBox="0 0 22 16"><path d="M0 0h22L11 16z"/></svg>
  <button class="mbtn" id="eSave" style="left:2.375rem;top:36.8125rem">Simpan</button></div></div></div>

<div class="overlay" id="mOff"><div class="ovwrap"><div class="modal confirm" style="left:27.5rem;top:23.8125rem;width:36.125rem;height:21.875rem">
  <span class="ttl" style="left:3.0625rem;top:3.5375rem">Nonaktifkan Akun?</span>
  <p style="top:6.875rem">Akun tidak dapat login, tetapi datanya tetap<br>tersimpan. Anda dapat mengaktifkannya kembali<br>kapan saja.</p>
  <button class="cbtn" data-close style="left:14.9375rem;top:16.4375rem;width:6.25rem;height:3.25rem">Batal</button>
  <button class="cbtn pri" id="offOk" style="left:22.3125rem;top:16.25rem;width:11.8125rem">Nonaktifkan</button></div></div></div>

<div class="overlay" id="mDel"><div class="ovwrap"><div class="modal confirm" style="left:27.5rem;top:23.8125rem;width:36.125rem;height:21.875rem">
  <span class="ttl" style="left:3.0625rem;top:3.5375rem">Hapus akun?</span>
  <p style="top:6.875rem">Akun akan dihapus dari daftar pengguna dan<br>tidak dapat digunakan untuk login. Riwayat lead<br>dan proyek tetap aman.</p>
  <button class="cbtn" data-close style="left:14.9375rem;top:16.4375rem;width:6.25rem;height:3.25rem">Batal</button>
  <button class="cbtn dng" id="delOk" style="left:22.3125rem;top:16.25rem;width:11.8125rem">Hapus</button></div></div></div>
<div class="toast" id="toast"></div>
@endpush

@push('scripts')
<script src="{{ asset('js/popup-akun.js') }}?v={{ filemtime(public_path('js/popup-akun.js')) }}"></script>
@endpush