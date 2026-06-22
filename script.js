const sparkleBtn = document.getElementById('sparkleBtn');
const confettiContainer = document.getElementById('confetti');
const form = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

function createParticle(x, y) {
  const particle = document.createElement('div');
  particle.className = 'confetti-particle';
  const size = Math.random() * 8 + 6;
  particle.style.width = `${size}px`;
  particle.style.height = `${size * 0.4}px`;
  particle.style.background = `hsl(${Math.random() * 320 + 160}, 90%, 70%)`;
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;
  particle.style.transform = `rotate(${Math.random() * 360}deg)`;
  particle.style.opacity = String(0.9 + Math.random() * 0.1);

  const velocity = {
    x: (Math.random() - 0.5) * 12,
    y: -Math.random() * 18 - 6,
    r: (Math.random() - 0.5) * 18
  };

  let lifetime = 0;
  const duration = 1200 + Math.random() * 600;

  function animate() {
    lifetime += 16;
    if (lifetime >= duration) {
      particle.remove();
      return;
    }

    const progress = lifetime / duration;
    particle.style.top = `${y + velocity.y * progress + 0.5 * 80 * progress * progress}px`;
    particle.style.left = `${x + velocity.x * progress}px`;
    particle.style.transform = `rotate(${velocity.r * progress}deg)`;
    particle.style.opacity = String(1 - progress);
    requestAnimationFrame(animate);
  }

  confettiContainer.appendChild(particle);
  requestAnimationFrame(animate);
}

function burstConfetti(event) {
  const rect = event.target.getBoundingClientRect();
  const originX = rect.left + rect.width / 2;
  const originY = rect.top + rect.height / 2;
  for (let i = 0; i < 18; i++) {
    createParticle(originX, originY);
  }
}

if (sparkleBtn) {
  sparkleBtn.addEventListener('click', (event) => {
    burstConfetti(event);
    sparkleBtn.classList.add('sparkled');
    setTimeout(() => sparkleBtn.classList.remove('sparkled'), 400);
  });
}

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    formStatus.textContent = 'Message received! This is a demo site, so the form is not actually sent.';
    formStatus.style.color = '#a4b1d7';
    form.reset();
    burstConfetti(event);
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll('.reveal').forEach((section) => {
  observer.observe(section);
});

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

const interactiveCards = document.querySelectorAll('.hero-card, .feature-card, .showcase-card, .timeline-card, .contact-panel, .avatar-card');
interactiveCards.forEach((card) => {
  card.addEventListener('mousemove', (event) => {
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) / 16;
    const y = (event.clientY - rect.top - rect.height / 2) / 16;
    card.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translate3d(0, 0, 0)';
  });
});

// Add CSS for confetti particles dynamically
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  .confetti-particle {
    position: fixed;
    pointer-events: none;
    border-radius: 999px;
    filter: drop-shadow(0 8px 24px rgba(0,0,0,0.16));
  }
`;
document.head.appendChild(styleSheet);
