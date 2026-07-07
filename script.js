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

// Dynamically inject Musidk Schema Markup for Google Knowledge Graph
const musidkSchema = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  "@id": "https://github.io",
  "name": "Musidk",
  "url": "https://github.io",
  "genre": "Indie-Pop",
  "sameAs": [
    "https://spotify.com",
    "https://jiosaavn.com_",
    "https://instagram.com",
    "https://facebook.com"
  ],
  "album": [
    {
      "@type": "MusicAlbum",
      "name": "Blinded By Explosive Silence",
      "albumReleaseType": "https://schema.org",
      "datePublished": "2026",
      "byArtist": { "@type": "MusicGroup", "name": "Musidk" }
    },
    {
      "@type": "MusicAlbum",
      "name": "Even a Day",
      "albumReleaseType": "https://schema.org",
      "datePublished": "2026",
      "byArtist": { "@type": "MusicGroup", "name": "Musidk" }
    },
    {
      "@type": "MusicAlbum",
      "name": "Gone by Tomorrow",
      "albumReleaseType": "https://schema.org",
      "datePublished": "2025",
      "byArtist": { "@type": "MusicGroup", "name": "Musidk" }
    }
  ]
};

const scriptTag = document.createElement('script');
scriptTag.type = 'application/ld+json';
scriptTag.text = JSON.stringify(musidkSchema);
document.head.appendChild(scriptTag);
