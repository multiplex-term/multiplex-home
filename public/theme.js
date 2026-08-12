(function () {
  var root = document.documentElement;
  var systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  var storageKey = 'multiplex-appearance';

  function savedTheme() {
    try {
      var saved = localStorage.getItem(storageKey);
      return saved === 'light' || saved === 'dark' ? saved : null;
    } catch (_) {
      return null;
    }
  }

  function updateButtons(theme) {
    document.querySelectorAll('[data-theme-toggle]').forEach(function (button) {
      var isDark = theme === 'dark';
      var nextTheme = isDark ? 'light' : 'dark';
      button.textContent = nextTheme.toUpperCase();
      button.setAttribute('aria-label', 'Switch to ' + nextTheme + ' appearance');
      button.setAttribute('aria-pressed', String(isDark));
    });
  }

  function applyTheme(theme, persist) {
    root.dataset.theme = theme;
    if (persist) {
      try { localStorage.setItem(storageKey, theme); } catch (_) {}
    }
    updateButtons(theme);
  }

  updateButtons(root.dataset.theme);

  document.querySelectorAll('[data-theme-toggle]').forEach(function (button) {
    button.addEventListener('click', function () {
      applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark', true);
    });
  });

  function followSystem(event) {
    if (!savedTheme()) applyTheme(event.matches ? 'dark' : 'light', false);
  }

  if (systemTheme.addEventListener) systemTheme.addEventListener('change', followSystem);
  else systemTheme.addListener(followSystem);

  window.addEventListener('storage', function (event) {
    if (event.key !== storageKey) return;
    var saved = savedTheme();
    applyTheme(saved || (systemTheme.matches ? 'dark' : 'light'), false);
  });
})();
