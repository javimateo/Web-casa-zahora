// Casa Oliari · interacciones de la home (v2). Sin dependencias salvo Leaflet para el mapa.
(() => {
  const root = document.documentElement;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* La única animación automática: el arco se abre al cargar */
  requestAnimationFrame(() => requestAnimationFrame(() => root.classList.add('loaded')));

  /* Cabecera: línea inferior al hacer scroll */
  const header = document.querySelector('.site-header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Vídeo de portada (si lo hay): pausa accesible y respeto a "reducir movimiento" */
  const video = document.getElementById('heroVideo');
  const toggle = document.getElementById('videoToggle');
  if (video && toggle) {
    const setToggle = playing => {
      toggle.setAttribute('aria-label', playing ? 'Pausar el vídeo' : 'Reproducir el vídeo');
      toggle.querySelector('use').setAttribute('href', playing ? '#i-pause' : '#i-play');
    };
    if (reduceMotion) { video.removeAttribute('autoplay'); video.pause(); setToggle(false); }
    toggle.addEventListener('click', () => {
      if (video.paused) { video.play(); setToggle(true); } else { video.pause(); setToggle(false); }
    });
  }

  /* Galería: filtros (reflejados en la URL), "ver todas" y visor */
  const grid = document.getElementById('galleryGrid');
  const items = [...grid.querySelectorAll('button')];
  const chips = [...document.querySelectorAll('.chip')];
  const showAllBtn = document.getElementById('showAll');
  const params = new URLSearchParams(location.search);
  let filter = chips.some(c => c.dataset.filter === params.get('fotos')) ? params.get('fotos') : 'todo';
  let expanded = false;

  const applyFilter = () => {
    items.forEach(b => {
      const inCat = filter === 'todo' || b.dataset.cat === filter;
      const hideExtra = filter === 'todo' && !expanded && b.hasAttribute('data-extra');
      b.hidden = !inCat || hideExtra;
    });
    chips.forEach(c => c.setAttribute('aria-pressed', String(c.dataset.filter === filter)));
    showAllBtn.hidden = filter !== 'todo' || expanded;
  };
  chips.forEach(c => c.addEventListener('click', () => {
    filter = c.dataset.filter;
    const url = new URL(location.href);
    if (filter === 'todo') url.searchParams.delete('fotos'); else url.searchParams.set('fotos', filter);
    history.replaceState(null, '', url);
    applyFilter();
  }));
  showAllBtn.addEventListener('click', () => { expanded = true; applyFilter(); items.find(b => b.hasAttribute('data-extra'))?.focus(); });
  applyFilter();

  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImg');
  const lbCap = document.getElementById('lbCap');
  let current = [];
  let index = 0;
  let opener = null;
  const show = i => {
    index = (i + current.length) % current.length;
    const b = current[index];
    const alt = b.querySelector('img').alt;
    lbImg.src = b.dataset.full;
    lbImg.alt = alt;
    lbCap.textContent = `${alt} (${index + 1} de ${current.length})`;
  };
  items.forEach(b => b.addEventListener('click', () => {
    current = items.filter(x => filter === 'todo' || x.dataset.cat === filter);
    opener = b;
    lb.showModal();
    show(current.indexOf(b));
  }));
  lb.addEventListener('close', () => opener?.focus());
  document.getElementById('lbClose').addEventListener('click', () => lb.close());
  document.getElementById('lbPrev').addEventListener('click', () => show(index - 1));
  document.getElementById('lbNext').addEventListener('click', () => show(index + 1));
  lb.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') show(index - 1);
    if (e.key === 'ArrowRight') show(index + 1);
  });
  lb.addEventListener('click', e => { if (e.target === lb || e.target.tagName === 'FIGURE') lb.close(); });
  let touchX = null;
  lb.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', e => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) show(index + (dx < 0 ? 1 : -1));
    touchX = null;
  });

  /* Mapa: Leaflet + OpenStreetMap (en gris mediante CSS) */
  if (window.L) {
    const casa = [36.2056, -6.0374];
    const map = L.map('map', { scrollWheelZoom: false }).setView([36.212, -6.01], 12);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Zona aproximada de la casa: no se publica la ubicación exacta
    L.circle(casa, { radius: 450, color: '#A2583C', weight: 1.5, fillColor: '#A2583C', fillOpacity: .16 })
      .addTo(map)
      .bindTooltip('Casa Oliari', { permanent: true, direction: 'top', className: 'map-label home', offset: [0, -14] });

    const lugares = [
      ['Faro de Trafalgar', [36.1830, -6.0353], 'bottom'],
      ['Los Caños de Meca', [36.1866, -6.0160], 'right'],
      ['El Palmar', [36.2350, -6.0700], 'left'],
      ['Vejer de la Frontera', [36.2526, -5.9668], 'top'],
      ['Barbate', [36.1917, -5.9220], 'top'],
    ];
    const offset = { left: [-8, 0], right: [8, 0], top: [0, -8], bottom: [0, 8] };
    lugares.forEach(([nombre, pos, dir]) => {
      L.circleMarker(pos, { radius: 5, color: '#2C3120', weight: 1.5, fillColor: '#F7F7F4', fillOpacity: 1 })
        .addTo(map)
        .bindTooltip(nombre, { permanent: true, direction: dir, className: 'map-label', offset: offset[dir] });
    });
    map.fitBounds(L.latLngBounds([casa, ...lugares.map(l => l[1])]).pad(0.15));
  }
})();
