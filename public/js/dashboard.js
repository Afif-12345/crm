const BASE = 412;
const STEP = 82;
const JUTA = v => v * STEP / 5;
const BULAN = ['January','February','March','April','May','June','July','August','September'];
const WON  = [15, 10, 20, 3.7, 4.5, 0.9, 5.7, 3.8, 17.4];
const LOST = [3.4, 0.9, 0.55, 1.6, 2.5, 0.2, 1.4, 1.2, 1.5];
const X0 = 44, X1 = 752;
const SLOT = (X1 - X0) / BULAN.length;
const GX = i => X0 + SLOT * i + (SLOT - 53) / 2;
const pct = x => (x / 756 * 100).toFixed(3) + '%';
const GARIS = [[84,'Rp. 20M'],[166,'Rp. 15M'],[248,'Rp. 10M'],[330,'Rp. 5M'],[412,'Rp.0']];

let h = '<svg class="grid" viewBox="0 0 756 462" preserveAspectRatio="none">';
GARIS.forEach(([y]) => h += `<line x1="2" y1="${y}" x2="${X1}" y2="${y}"/>`);
BULAN.forEach((_, i) => { const x = (X0 + SLOT * (i + 1)).toFixed(2); h += `<line x1="${x}" y1="3" x2="${x}" y2="${BASE}"/>`; });
h += '</svg>';
GARIS.forEach(([y, label]) => h += `<span class="t yl" style="top:${R(label === 'Rp.0' ? y - 14.3 : y - 4.8)};left:${R(label === 'Rp.0' ? 3 : 1)}">${label}</span>`);
BULAN.forEach((b, i) => {
  const hw = JUTA(WON[i]), hl = JUTA(LOST[i]);
  h += `<div class="bar g" style="left:${pct(GX(i))};top:${R(BASE - hw)};height:${R(hw)}" title="${b} - Won: Rp.${WON[i]} jt"></div>`;
  h += `<div class="bar r" style="left:${pct(GX(i) + 30)};top:${R(BASE - hl)};height:${R(hl)}" title="${b} - Lost: Rp.${LOST[i]} jt"></div>`;
  h += `<span class="t ml" style="left:${pct(GX(i))}">${b}</span>`;
});
document.getElementById('chart').innerHTML = h;

const NAMA = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
const fmt = s => { const d = new Date(s + 'T00:00:00'); return `${NAMA[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`; };
const pop = document.getElementById('datePop');
document.getElementById('date').onclick = e => { e.stopPropagation(); pop.classList.toggle('open'); };
pop.onclick = e => e.stopPropagation();
document.addEventListener('click', () => pop.classList.remove('open'));
document.getElementById('dApply').onclick = () => {
  const a = document.getElementById('d1').value, b = document.getElementById('d2').value;
  if (!a || !b || a > b) return alert('Rentang tanggal tidak valid.');
  document.getElementById('dateTxt').textContent = `${fmt(a)} - ${fmt(b)}`;
  pop.classList.remove('open');
};