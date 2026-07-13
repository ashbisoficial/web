(function () {
  var btn = document.getElementById('themeToggle');
  if (!btn) return;

  function label(theme) {
    return theme === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro';
  }

  var html = document.documentElement;
  btn.setAttribute('aria-label', label(html.getAttribute('data-theme') || 'dark'));

  btn.addEventListener('click', function () {
    var current = html.getAttribute('data-theme') || 'dark';
    var next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('ashbis-theme', next);
    btn.setAttribute('aria-label', label(next));
  });
})();
