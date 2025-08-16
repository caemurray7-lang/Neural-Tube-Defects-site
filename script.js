// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.style.display === 'flex';
    menu.style.display = open ? 'none' : 'flex';
    toggle.setAttribute('aria-expanded', String(!open));
  });
  // Close menu when clicking a link
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>{
    if (window.innerWidth < 900) { menu.style.display = 'none'; toggle.setAttribute('aria-expanded','false'); }
  }));
}
// Year
document.getElementById('year').textContent = new Date().getFullYear();
