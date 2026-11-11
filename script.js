'use strict';
(() => {
  const $ = s => document.querySelector(s);
  const nav = $('#main-nav');
  const menu = $('.menu-toggle');
  const closeNav = () => { if (nav && menu) { nav.classList.remove('open'); menu.setAttribute('aria-expanded','false'); menu.setAttribute('aria-label','Mở menu'); } };
  menu?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Đóng menu' : 'Mở menu');
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNav));
  document.addEventListener('keydown', e => { if(e.key==='Escape') closeNav(); });
  document.addEventListener('click', e => { if (nav && menu && !nav.contains(e.target) && !menu.contains(e.target)) closeNav(); });
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  // IntersectionObserver enhances presentation but never hides essential content until ready.
  if (!reduce && 'IntersectionObserver' in window) {
    const els = [...document.querySelectorAll('[data-reveal]')];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if(entry.isIntersecting){entry.target.classList.remove('is-hidden');observer.unobserve(entry.target);} });
    }, {threshold:.08,rootMargin:'0px 0px -25px 0px'});
    els.forEach(el => {if (el.getBoundingClientRect().top > innerHeight*.86) {el.classList.add('is-hidden'); observer.observe(el);}});
  }
  const stage = $('#hero-stage');
  const area = $('.hero-visual');
  if(stage && area && !reduce && matchMedia('(hover: hover) and (pointer: fine)').matches){
    area.addEventListener('pointermove',e=>{
      const r=area.getBoundingClientRect();
      const px=(e.clientX-r.left)/r.width-.5;
      const py=(e.clientY-r.top)/r.height-.5;
      stage.style.transform = `perspective(1050px) rotateY(${px*7-3}deg) rotateX(${2-py*7}deg)`;
    });
    area.addEventListener('pointerleave',()=>stage.style.transform='');
  }
  const pageSections = [...document.querySelectorAll('main section[id]')];
  const links = [...document.querySelectorAll('.main-nav a')];
  if ('IntersectionObserver' in window) {
    const spy=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){ links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id)); }
      });
    },{rootMargin:'-22% 0px -60% 0px'});
    pageSections.forEach(sec=>spy.observe(sec));
  }
  $('#year').textContent = String(new Date().getFullYear());
})();
