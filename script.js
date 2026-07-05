const body = document.body;
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelectorAll('.main-nav a');
const themeToggle = document.querySelector('.theme-toggle');
const themeText = document.querySelector('.theme-text');
const themeIcon = document.querySelector('.theme-icon');
const year = document.querySelector('#year');

if (year) year.textContent = new Date().getFullYear();

function setTheme(theme){
  body.setAttribute('data-theme', theme);
  localStorage.setItem('uv-theme', theme);
  if(theme === 'light'){
    themeText.textContent = 'Koyu Mod';
    themeIcon.textContent = '☾';
  }else{
    themeText.textContent = 'Açık Mod';
    themeIcon.textContent = '☀';
  }
}

const savedTheme = localStorage.getItem('uv-theme');
if(savedTheme){
  setTheme(savedTheme);
}else{
  setTheme('dark');
}

themeToggle?.addEventListener('click', () => {
  const active = body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  setTheme(active);
});

menuBtn?.addEventListener('click', () => {
  const isOpen = body.classList.toggle('menu-open');
  menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    body.classList.remove('menu-open');
    menuBtn?.setAttribute('aria-expanded','false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
