const phoneNumber = '905072966175';
const emailAddress = 'uvbaskıcınız@gmail.com';

const html = document.documentElement;
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const themeText = document.querySelector('.theme-text');
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.site-nav');
const quoteForm = document.querySelector('#quoteForm');
const year = document.querySelector('#year');

function setTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('uv-theme', theme);

  const isLight = theme === 'light';
  themeIcon.textContent = isLight ? '☀' : '☾';
  themeText.textContent = isLight ? 'Açık' : 'Koyu';
}

const savedTheme = localStorage.getItem('uv-theme');
const preferredTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
setTheme(savedTheme || preferredTheme);

themeToggle?.addEventListener('click', () => {
  const nextTheme = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  setTheme(nextTheme);
});

menuBtn?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  document.body.classList.toggle('menu-open', isOpen);
  menuBtn.setAttribute('aria-expanded', String(isOpen));
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    menuBtn?.setAttribute('aria-expanded', 'false');
  });
});

quoteForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(quoteForm);
  const name = formData.get('name');
  const product = formData.get('product');
  const quantity = formData.get('quantity');
  const note = formData.get('note') || '-';

  const message = `Merhaba, UVBASKICINIZ sitesinden geliyorum.\n\nFirma / İsim: ${name}\nÜrün Tipi: ${product}\nTahmini Adet: ${quantity}\nNot: ${note}\n\nTeklif almak istiyorum.`;
  window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});

year.textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => observer.observe(item));

const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.site-nav a');

function setActiveLink() {
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) current = section.getAttribute('id');
  });

  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}

window.addEventListener('scroll', setActiveLink, { passive: true });
setActiveLink();
