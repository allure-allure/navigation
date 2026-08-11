const observer = new IntersectionObserver((entries) => {
  entries.forEach(({ isIntersecting, target }) => {
    if (isIntersecting) { target.classList.add('is-visible'); observer.unobserve(target); }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.section, .service-card, .price-group').forEach((element) => {
  element.classList.add('reveal');
  observer.observe(element);
});

const routeLink = document.querySelector("#route-link");
if (routeLink) {
  routeLink.addEventListener("click", (event) => {
    event.preventDefault();
    const mapWindow = window.open("", "_blank");
    const destination = "56.275650,38.089546";
    const fallback = routeLink.href;
    const openMap = (url) => {
      if (mapWindow) mapWindow.location.href = url;
      else window.location.href = url;
    };
    if (!navigator.geolocation) {
      openMap(fallback);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => openMap("https://yandex.ru/maps/?rtext=" + coords.latitude + "," + coords.longitude + "~" + destination + "&rtt=auto&z=16&pt=38.089546,56.275650,pm2rdm"),
      () => openMap(fallback),
      { enableHighAccuracy: false, timeout: 7000, maximumAge: 300000 }
    );
  });
}
