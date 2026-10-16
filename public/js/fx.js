(function () {
  const css = `
  .rip-box{position:absolute;inset:0;overflow:hidden;border-radius:inherit;pointer-events:none}
  .rip{position:absolute;border-radius:50%;background:rgba(1,104,221,.25);transform:scale(0);animation:ripfx .6s ease-out}
  .rip-light{background:rgba(255,255,255,.4)}
  @keyframes ripfx{to{transform:scale(1);opacity:0}}
  @keyframes popfx{0%,100%{transform:translateY(-50%) scale(1)}40%{transform:translateY(-50%) scale(.78)}}
  .pop-fx{animation:popfx .35s ease}
  .topbar .moon,.topbar .bell,.topbar .avatar{transition:opacity .15s}
  .topbar .moon:hover,.topbar .bell:hover,.topbar .avatar:hover{opacity:.8}
  .sidebar a{transition:background .15s ease}
  .sidebar a:hover{background:rgba(255,255,255,.13)}
  .sidebar a:active{background:rgba(255,255,255,.24)}
  .btn,.btn-add,.mbtn,.mbtn2,.cbtn,.tab,.kel,.x,.auth-card .link{transition:transform .15s ease,filter .15s ease}
  .btn:hover,.btn-add:hover,.mbtn:hover,.mbtn2:hover,.cbtn.pri:hover,.cbtn.dng:hover{filter:brightness(1.12)}
  .btn:active,.btn-add:active,.mbtn:active,.mbtn2:active,.cbtn:active,.tab:active,.kel:active,.x:active{transform:scale(.95)}
  .auth-card .link:hover{text-decoration:underline}
  .ucard{cursor:pointer;transition:transform .18s ease,box-shadow .18s ease}
  .ucard:hover{transform:translateY(-.25rem);box-shadow:.25rem .625rem .875rem rgba(0,0,0,.28)}
  .ucard:active{transform:scale(.97)}
  .ucard.on{box-shadow:0 0 0 2px #0168dd,.25rem .25rem .25rem rgba(0,0,0,.25)}
  .date{transition:transform .15s ease}.date:active{transform:scale(.96)}
  .row{transition:background .15s ease}
  .row:hover{background:rgba(1,104,221,.06)}
  .row.sel{background:rgba(1,104,221,.13)}
  .fld:focus,.in:focus,.search:focus,.auth-card input:focus{border-color:#0168dd;box-shadow:0 0 0 .1875rem rgba(1,104,221,.22)}
  `;
  
  <script src="{{ asset('js/fx.js') }}?v={{ filemtime(public_path('js/fx.js')) }}"></script>

  const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  const FX = '.sidebar a,.btn-add,.kel,.menu button,.tab,.mbtn,.mbtn2,.cbtn,.x,.ucard,.date,.btn,.auth-card .link,.row';
  const DARK = '.sidebar a,.btn-add,.mbtn,.mbtn2,.btn,.cbtn.pri,.cbtn.dng';
  const POP = '.topbar .moon,.topbar .bell,.topbar .avatar';

  function ripple(host, e) {
    if (getComputedStyle(host).position === 'static') host.style.position = 'relative';
    const r = host.getBoundingClientRect(), d = Math.max(r.width, r.height) * 2.2;
    const cx = e.detail ? e.clientX - r.left : r.width / 2, cy = e.detail ? e.clientY - r.top : r.height / 2;
    const box = document.createElement('span'); box.className = 'rip-box';
    const s = document.createElement('span'); s.className = 'rip' + (host.matches(DARK) ? ' rip-light' : '');
    s.style.cssText = `width:${d}px;height:${d}px;left:${cx - d / 2}px;top:${cy - d / 2}px`;
    box.appendChild(s); host.appendChild(box); setTimeout(() => box.remove(), 650);
  }
  document.addEventListener('click', e => {
    const p = e.target.closest(POP);
    if (p) { p.classList.remove('pop-fx'); void p.getBoundingClientRect(); p.classList.add('pop-fx'); }
    const t = e.target.closest(FX);
    if (!t || t.classList.contains('clickable')) return;
    ripple(t, e);
    if (t.matches('.sidebar a')) {
      const h = t.getAttribute('href');
      if (h && h !== '#') { e.preventDefault(); setTimeout(() => { location.href = h; }, 220); }
    }
  });
})();