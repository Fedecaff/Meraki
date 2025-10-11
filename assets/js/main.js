(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const wspBase = 'https://wa.me/543834938577';
  const defaultMsg = 'Hola, quiero reservar un turno en Meraki. Mi nombre es ______. Servicio: ______. Profesional (opcional): ______. Día y horario preferidos: ______.';
  const wspUrl = `${wspBase}?text=${encodeURIComponent(defaultMsg)}`;

  ['cta-wsp', 'footer-wsp', 'services-wsp', 'book-now'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.setAttribute('href', wspUrl);
  });

  const addressString = 'Brasil y Monseñor Sueldo, Catamarca Capital';
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressString)}`;
  ['cta-map', 'footer-map', 'reservas-map'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.setAttribute('href', mapsUrl);
  });

  // Menú hamburguesa
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', isOpen);
      menuToggle.textContent = isOpen ? '✕' : '☰';
    });

    // Cerrar menú al hacer click en un enlace
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.textContent = '☰';
      });
    });
  }
})();


