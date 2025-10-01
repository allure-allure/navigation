document.getElementById('loadMapBtn')?.addEventListener('click', () => {
  const box = document.querySelector('.mapbox');
  if (!box || box.dataset.loaded === 'true') return;
  const iframe = document.createElement('iframe');
  iframe.className = 'mapbox__iframe';
  iframe.loading = 'lazy';
  iframe.referrerPolicy = 'no-referrer-when-downgrade';
  // TODO: замените src на ваш конструктор карты
  iframe.src = 'https://yandex.ru/map-widget/v1/?um=constructor%3AID&source=constructor';
  iframe.style.width = '100%';
  iframe.style.height = '420px';
  iframe.style.border = '0';
  box.innerHTML = '';
  box.appendChild(iframe);
  box.dataset.loaded = 'true';
});

// Reveal on scroll
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('is-visible');
      io.unobserve(e.target);
    }
  });
},{threshold:0.15});

document.querySelectorAll('.reveal').forEach(el=>io.observe(el));