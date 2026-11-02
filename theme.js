// Light or dark: the system's choice until someone presses a [data-theme-toggle] button, then theirs.
// A classic script in <head>, so the page never flashes the other theme.
const root = document.documentElement;
const tr = window.t || ((no, en) => root.lang === 'en' ? en : no);
try { const t = localStorage.getItem('theme'); if (t) root.dataset.theme = t; } catch {}
const dark = () => root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
addEventListener('DOMContentLoaded', () => {
  for (const b of document.querySelectorAll('[data-theme-toggle]')) {
    const label = () => b.setAttribute('aria-label', dark() ? tr('Bytt til lyst tema', 'Switch to light mode') : tr('Bytt til mørkt tema', 'Switch to dark mode'));
    label();
    b.onclick = () => {
      root.dataset.theme = dark() ? 'light' : 'dark';
      try { localStorage.setItem('theme', root.dataset.theme); } catch {}
      label();
    };
  }
});
