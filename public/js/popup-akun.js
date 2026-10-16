document.querySelectorAll('[data-close]').forEach(b => b.onclick = closeAll);
document.querySelectorAll('.overlay').forEach(o => o.addEventListener('mousedown', e => { if (e.target === o || e.target.className === 'ovwrap') closeAll(); }));

$('btnAdd').onclick = () => { $('aNama').value = $('aEmail').value = ''; $('aErr').textContent = ''; $('aRole').value = 'Admin'; openM('mAdd'); };
$('aSave').onclick = () => {
  const nama = $('aNama').value.trim(), email = $('aEmail').value.trim();
  if (!nama) return $('aErr').textContent = 'Nama wajib diisi.';
  if (!/^\S+@\S+\.\S+$/.test(email)) return $('aErr').textContent = 'Format email tidak valid.';
  if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) return $('aErr').textContent = 'Email sudah terdaftar.';
  users.push({id: Date.now(), nama, email, role: $('aRole').value, status: 'Verifikasi', login: '-'});
  save(); render(); closeAll(); toast('Akun dibuat, email verifikasi dikirim (simulasi)');
};
$('eSave').onclick = () => {
  if (!$('eNama').value.trim()) return;
  target.nama = $('eNama').value.trim(); target.role = $('eRole').value;
  save(); render(); closeAll(); toast('Perubahan disimpan');
};
$('offOk').onclick = () => { target.status = 'Nonaktif'; save(); render(); closeAll(); toast('Akun dinonaktifkan'); };
$('delOk').onclick = () => { users = users.filter(u => u !== target); save(); render(); closeAll(); toast('Akun dihapus'); };