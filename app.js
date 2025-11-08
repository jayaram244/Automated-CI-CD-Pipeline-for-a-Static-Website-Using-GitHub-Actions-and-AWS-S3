// year
const y = document.getElementById('year'); if(y) y.textContent = new Date().getFullYear()

// discover -> services
const d = document.getElementById('discover')
if(d) d.addEventListener('click',()=> document.getElementById('services').scrollIntoView({behavior:'smooth'}))

// form handling (local save demo)
const form = document.getElementById('contactForm')
const resp = document.getElementById('response')
if(form){
  form.addEventListener('submit', e=>{
    e.preventDefault()
    const name = form.name.value.trim()
    const email = form.email.value.trim()
    const message = form.message.value.trim()
    if(!name || !email || !message){
      resp.textContent = '⚠️ Please fill all fields.'
      return
    }
    // simulate send: save locally
    localStorage.setItem('aws-contact', JSON.stringify({name,email,message,at:new Date().toISOString()}))
    resp.textContent = `✅ Thanks, ${name}! We'll contact you.`
    form.reset()
  })
  document.getElementById('clear').addEventListener('click', ()=>{ form.reset(); resp.textContent = '' })
}

// small accessibility: focus outline on keyboard nav
document.addEventListener('keydown', e=>{ if(e.key === 'Tab') document.body.classList.add('user-is-tabbing') })
