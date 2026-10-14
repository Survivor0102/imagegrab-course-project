const menuButton = document.querySelector('#menu-button');
const menu = document.querySelector('#site-menu');
menuButton?.addEventListener('click', () => { const open = menu.classList.toggle('open'); menuButton.setAttribute('aria-expanded', String(open)); });
menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { menu.classList.remove('open'); menuButton?.setAttribute('aria-expanded', 'false'); }));
const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }); }, { threshold:.12 });
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
const sections = [...document.querySelectorAll('main section[id]')], links = [...document.querySelectorAll('.nav-links a[href^="#"]')];
const sectionObserver = new IntersectionObserver(entries => { entries.forEach(entry => { if (!entry.isIntersecting) return; links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`)); }); }, { rootMargin:'-35% 0px -55% 0px' });
sections.forEach(section => sectionObserver.observe(section));
