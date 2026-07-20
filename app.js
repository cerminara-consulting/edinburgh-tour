// Layout toggle — persists choice across reloads.
(function () {
  const STORAGE_KEY = 'edin-tour-layout';
  const buttons = document.querySelectorAll('.layout-toggle__btn');
  const layouts = {
    scroll:   document.getElementById('layout-scroll'),
    timeline: document.getElementById('layout-timeline'),
  };

  function apply(layout) {
    if (!layouts[layout]) layout = 'scroll';
    Object.entries(layouts).forEach(([key, el]) => {
      if (!el) return;
      const active = key === layout;
      el.classList.toggle('is-active', active);
      el.hidden = !active;
    });
    buttons.forEach((btn) => {
      const active = btn.dataset.layout === layout;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    try { localStorage.setItem(STORAGE_KEY, layout); } catch (_) {}
  }

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => apply(btn.dataset.layout));
  });

  let initial = 'scroll';
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'timeline' || saved === 'scroll') initial = saved;
  } catch (_) {}
  apply(initial);
})();