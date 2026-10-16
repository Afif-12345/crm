// Sidebar + topbar dipakai bersama. Semua posisi memakai koordinat Figma (basis 1440px) -> rem
const R = px => (px / 16) + 'rem';
const svg = (inner, attr = '') => `<svg viewBox="0 0 24 24" ${attr}>${inner}</svg>`;

// Ikon (SVG inline, jadi tidak butuh file gambar)
const ICON = {
  dashboard:   '<rect x="3" y="3" width="7" height="11" rx="1.5"/><rect x="14" y="3" width="7" height="6" rx="1.5"/><rect x="14" y="13" width="7" height="8" rx="1.5"/><rect x="3" y="18" width="7" height="3" rx="1.5"/>',
  leads:       '<circle cx="9" cy="7" r="3.5"/><path d="M2.5 20v-1.5a5 5 0 0 1 5-5h3"/><path d="M13.5 14h8l-3 4v3.5l-2-1V18z"/>',
  customer:    '<circle cx="12" cy="8" r="4"/><path d="M4.5 21v-1.5a5 5 0 0 1 5-5h5a5 5 0 0 1 5 5V21"/>',
  penawaran:   '<path d="M7 3h12v11"/><path d="M3 16l5-1.5 4 2 7-2.5"/><path d="M3 14v7"/><path d="M9 21h10"/>',
  followup:    '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2.5h6V4M9 13h6l-2-2.5M15 17H9l2 2.5"/>',
  kesepakatan: '<path d="M2 11l5-5 4 3 4-3 5 5-9 9z"/><path d="M8 13l3 3"/>',
  pembayaran:  '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h3"/>',
  pengguna:    '<circle cx="12" cy="8" r="4"/><path d="M4.5 21a7.5 7.5 0 0 1 15 0"/>',
  settings:    '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
  moon:        '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
  bell:        '<path d="M6 16v-5a6 6 0 0 1 12 0v5l2 2H4z"/><path d="M10 21h4"/>',
  search:      '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>'
};
// [kunci, label, link, pusat-X ikon, pusat-Y ikon, pusat-Y teks]
const MENU = [
  ['dashboard','Dashboard','/dashboard',40,180,180], ['leads','Leads','#',36,262,268],
  ['customer','Customer','#',36,336,342], ['penawaran','Penawaran','#',37,418,422],
  ['followup','Follow up','#',38,494,494], ['kesepakatan','Kesepakatan','#',42,570,577],
  ['pembayaran','Pembayaran','#',43,642,643], ['pengguna','Pengguna','/pengguna',40,724,726],
  ['settings','Settings','#',44,795,795]
];
if (!localStorage.getItem('crm_login')) location.href = '/login';   // proteksi halaman sederhana
if (localStorage.getItem('crm_dark') === '1') document.body.classList.add('dark');

document.getElementById('sidebar').innerHTML =
  '<img class="logo" src="/assets/logo-putih.png" alt="CRM">' +
  MENU.map(([k, t, h, cx, cy, ty]) =>
    `<a href="${h}" style="top:${R(ty - 25)}">${svg(ICON[k], `style="left:${R(cx - 18)};top:${R(cy - 18 - (ty - 25))}"`)}${t}</a>`).join('');

document.getElementById('topbar').innerHTML = `
  <h1>${document.body.dataset.title}</h1>
  <input class="search" placeholder="search" id="gSearch">
  ${svg(ICON.search, 'class="search-ic"')}
  ${svg(ICON.moon, 'class="moon" id="dark"')}
  ${svg(ICON.bell, 'class="bell" id="bell"')}
  <img class="avatar" id="avatar" src="/assets/avatar.jpg" alt="" title="Klik untuk logout" onerror="this.onerror=null;this.src='data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 77 77%27%3E%3Ccircle cx=%2738.5%27 cy=%2738.5%27 r=%2738.5%27 fill=%27%23d9d9d9%27/%3E%3Ccircle cx=%2738.5%27 cy=%2729%27 r=%2713%27 fill=%27%23fff%27/%3E%3Cpath d=%27M14 68a24.5 22 0 0 1 49 0z%27 fill=%27%23fff%27/%3E%3C/svg%3E'">
  <div class="pop" id="notif" style="right:${R(41)};top:${R(80)};width:${R(260)};padding:${R(16)};color:#000;font-size:${R(14)}">Belum ada notifikasi baru.</div>`;

document.getElementById('dark').onclick = () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('crm_dark', document.body.classList.contains('dark') ? '1' : '0');
};
document.getElementById('bell').onclick = e => { e.stopPropagation(); document.getElementById('notif').classList.toggle('open'); };
document.addEventListener('click', () => document.getElementById('notif').classList.remove('open'));
document.getElementById('avatar').onclick = () => {
  if (confirm('Keluar dari akun?')) { localStorage.removeItem('crm_login'); location.href = '/login'; }
};