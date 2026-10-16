const KEY = 'crm_users_v2';
const seed = [
  {id:1,nama:'Ikhsanul Rendi',email:'IkhsanulRendi@gmail.com',role:'Owner',status:'Aktif',login:'11/10/2026'},
  {id:2,nama:'Afif Akbar',email:'AfifAkbar@gmail.com',role:'Owner',status:'Aktif',login:'11/10/2026'},
];
let users = JSON.parse(localStorage.getItem(KEY) || 'null') || seed;
let target = null;
const $ = id => document.getElementById(id);
const save = () => localStorage.setItem(KEY, JSON.stringify(users));
const toast = t => { $('toast').textContent = t; $('toast').classList.add('show'); setTimeout(() => $('toast').classList.remove('show'), 2500); };
const openM = id => $(id).classList.add('open');
const closeAll = () => document.querySelectorAll('.overlay').forEach(o => o.classList.remove('open'));
const esc = s => s.replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

function render() {
  const q = $('q').value.toLowerCase(), r = $('fRole').value, s = $('fStatus').value;
  const list = users.filter(u => (u.nama + u.email).toLowerCase().includes(q) && (!r || u.role === r) && (!s || u.status === s));
  $('rows').innerHTML = list.length ? list.map((u, i) => `
    <div class="row" style="top:${R(209 + i * 69)}">
      <span class="t" style="left:1.12%">${esc(u.nama)}</span><span class="t" style="left:16.08%">${esc(u.email)}</span>
      <span class="t" style="left:46.58%">${u.role}</span><span class="t st st-${u.status}" style="left:57.39%">${u.status}</span>
      <span class="t" style="left:72.77%;top:${R(32.7)}">${u.login}</span>
      <button class="kel" data-id="${u.id}" data-i="${i}" style="top:${R(24)}">Kelola<i></i></button></div>`).join('')
    : '<div class="empty">Data tidak ditemukan</div>';
  $('panel').style.minHeight = R(Math.max(712, 209 + list.length * 69 + 100));
  document.querySelectorAll('.ucard').forEach(c => c.classList.toggle('on', c.dataset.st !== '' && c.dataset.st === $('fStatus').value));
  $('sTotal').textContent = users.length;
  $('sAktif').textContent = users.filter(u => u.status === 'Aktif').length;
  $('sVerif').textContent = users.filter(u => u.status === 'Verifikasi').length;
  $('sNon').textContent = users.filter(u => u.status === 'Nonaktif').length;
  $('menu').classList.remove('open');
}
['q','fRole','fStatus'].forEach(id => $(id).addEventListener('input', render));

['', 'Aktif', 'Verifikasi', 'Nonaktif'].forEach((st, i) => {
  const c = document.querySelectorAll('.ucard')[i];
  c.dataset.st = st; c.onclick = () => { $('fStatus').value = st; render(); };
});

$('rows').addEventListener('click', e => { const r = e.target.closest('.row'); if (r && !e.target.closest('.kel')) r.classList.toggle('sel'); });

document.querySelectorAll('.tab').forEach(b => b.onclick = () => {
  document.querySelectorAll('.tab').forEach(x => x.classList.toggle('on', x === b));
  $('vAkun').style.display = b.dataset.tab === 'akun' ? '' : 'none';
  $('vRole').style.display = b.dataset.tab === 'role' ? '' : 'none';
});

document.addEventListener('click', e => {
  const k = e.target.closest('.kel'), a = e.target.closest('[data-act]');
  if (k) {
    e.stopPropagation(); target = users.find(u => u.id == k.dataset.id);
    const m = $('menu'), same = m.classList.contains('open') && m.dataset.id == k.dataset.id;
    m.classList.remove('open'); if (same) return;
    m.dataset.id = k.dataset.id; m.style.right = R(31); m.style.top = R(209 + (+k.dataset.i) * 69 + 44);
    $('mToggle').textContent = target.status === 'Nonaktif' ? 'Aktifkan akun' : 'Nonaktifkan akun';
    return m.classList.add('open');
  }
  $('menu').classList.remove('open');
  if (!a) return;
  if (a.dataset.act === 'edit') { $('eNama').value = target.nama; $('eRole').value = target.role; openM('mEdit'); }
  if (a.dataset.act === 'toggle') {
    if (target.status === 'Nonaktif') { target.status = 'Aktif'; save(); render(); toast('Akun diaktifkan kembali'); }
    else openM('mOff');
  }
  if (a.dataset.act === 'resend') toast('Email verifikasi dikirim ulang ke ' + target.email + ' (simulasi)');
  if (a.dataset.act === 'del') openM('mDel');
});

render();