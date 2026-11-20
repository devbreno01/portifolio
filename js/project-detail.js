const params = new URLSearchParams(window.location.search);
const language = params.get('lang') === 'en' ? 'en' : 'pt';
const theme = params.get('theme');
document.documentElement.lang = language === 'en' ? 'en' : 'pt-BR';
document.documentElement.classList.toggle(
  'dark',
  theme === 'dark' || (theme !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches)
);

document.querySelectorAll('[data-en]').forEach(element => {
  if (language === 'en') element.textContent = element.dataset.en;
});

const backLink = document.getElementById('back-to-projects');
backLink.href = '../index.html?' + new URLSearchParams({
  lang: language,
  theme: document.documentElement.classList.contains('dark') ? 'dark' : 'light',
}) + '#projetos';
