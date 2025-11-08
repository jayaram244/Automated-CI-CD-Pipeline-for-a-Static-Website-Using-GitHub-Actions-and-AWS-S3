// Auto update year
document.getElementById('year').textContent = new Date().getFullYear()

// Smooth scroll
document.getElementById('discover').addEventListener('click', () => {
  document.getElementById('services').scrollIntoView({ behavior: 'smooth' })
})

// Contact form message
const form = document.getElementById('contactForm')
const response = document.getElementById('response')
form.addEventListener('submit', e => {
  e.preventDefault()
  const name = document.getElementById('name').value
  const email = document.getElementById('email').value
  const message = document.getElementById('message').value
  if (!name || !email || !message) {
    response.textContent = '⚠️ Please fill out all fields.'
    return
  }
  response.textContent = `✅ Thanks, ${name}! We'll reach out soon.`
  form.reset()
})
