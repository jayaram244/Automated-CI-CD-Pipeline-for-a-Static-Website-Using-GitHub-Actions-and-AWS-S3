// Auto-update year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll
document.getElementById('start').addEventListener('click', () => {
  document.getElementById('shows').scrollIntoView({ behavior: 'smooth' });
});

// Contact form simulation
const form = document.getElementById('contactForm');
const response = document.getElementById('response');
form.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('message').value.trim();
  if (!name || !email || !msg) {
    response.textContent = '⚠️ Please fill all fields.';
    return;
  }
  response.textContent = `✅ Thanks, ${name}! We'll get back soon.`;
  form.reset();
});
