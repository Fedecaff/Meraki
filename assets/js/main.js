(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const wspBase = 'https://wa.me/543834938577';
  const defaultMsg = 'Hola, quiero reservar un turno con Florencia en Meraki. Mi nombre es ______. Servicio: ______. Día y horario preferidos: ______.';
  const wspUrl = `${wspBase}?text=${encodeURIComponent(defaultMsg)}`;

  ['cta-wsp', 'footer-wsp', 'services-wsp', 'book-now', 'faq-wsp'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.setAttribute('href', wspUrl);
  });

  const addressString = 'Brasil y Monseñor Sueldo, Catamarca Capital';
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressString)}`;
  ['cta-map', 'footer-map', 'reservas-map'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.setAttribute('href', mapsUrl);
  });

  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (menuToggle && mainNav) {
    const setMenuState = (isOpen) => {
      mainNav.classList.toggle('active', isOpen);
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
      menuToggle.textContent = isOpen ? '✕' : '☰';
    };

    menuToggle.addEventListener('click', () => {
      setMenuState(!mainNav.classList.contains('active'));
    });

    mainNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setMenuState(false));
    });
  }
})();
