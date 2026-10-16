const chartEl = document.getElementById('chart');
const custModal = document.getElementById('mCust');
document.querySelectorAll('.clickable').forEach(card => {
  card.addEventListener('click', e => {
    const r = card.getBoundingClientRect(), d = Math.max(r.width, r.height);
    const s = document.createElement('span'); s.className = 'ripple';
    s.style.cssText = `width:${d}px;height:${d}px;left:${e.clientX - r.left - d / 2}px;top:${e.clientY - r.top - d / 2}px`;
    card.appendChild(s); setTimeout(() => s.remove(), 600);
    if (card.id === 'tcCard') return custModal.classList.add('open');
    const sudahAktif = card.classList.contains('on');
    document.querySelectorAll('.clickable.on').forEach(c => c.classList.remove('on'));
    chartEl.classList.remove('focus-green', 'focus-red');
    if (!sudahAktif) { card.classList.add('on'); chartEl.classList.add('focus-' + card.dataset.focus); }
  });
});
const tutupCust = () => custModal.classList.remove('open');
document.querySelectorAll('#mCust [data-close]').forEach(b => b.onclick = tutupCust);
custModal.addEventListener('mousedown', e => { if (e.target === custModal || e.target.className === 'ovwrap') tutupCust(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') tutupCust(); });