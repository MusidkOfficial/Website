// ========= Smooth Scroll =========
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// ========= Fade-in on Scroll =========
const faders = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    // Start fade-in when element is 100px above the bottom of the viewport
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});

// ========= Sticky Header Scroll Effect (Target Fixed) =========
const header = document.querySelector('header'); // FIX: Targets the <header> tag

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});