const yearEl = document.getElementById('year')
const nameInput = document.getElementById('name')
const msgInput = document.getElementById('message')
const savedBox = document.getElementById('saved')
const saveBtn = document.getElementById('save')
const clearBtn = document.getElementById('clear')
const themeBtn = document.getElementById('theme-toggle')
const navToggle = document.getElementById('nav-toggle')
const navList = document.getElementById('nav-list')

yearEl.textContent = new Date().getFullYear()

saveBtn.addEventListener('click', () => {
  const payload = { name: nameInput.value.trim(), message: msgInput.value.trim(), at: new Date().toISOString() }
  if (!payload.name) return alert('Please add a name')
  localStorage.setItem('stellar.demo', JSON.stringify(payload))
  renderSaved()
})

clearBtn.addEventListener('click', () => {
  localStorage.removeItem('stellar.demo')
  nameInput.value = ''
  msgInput.value = ''
  renderSaved()
})

function renderSaved(){
  const raw = localStorage.getItem('stellar.demo')
  if (!raw){ savedBox.textContent = 'No saved message.'; return }
  try{
    const obj = JSON.parse(raw)
    savedBox.innerHTML = `<strong>${escapeHtml(obj.name)}</strong> · <span class="muted">${new Date(obj.at).toLocaleString()}</span><div>${escapeHtml(obj.message)}</div>`
    nameInput.value = obj.name
    msgInput.value = obj.message
  }catch(e){
    savedBox.textContent = 'Corrupt data'
  }
}
function escapeHtml(s){ return String(s).replace(/[&<>"']/g,c=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' })[c]) }

themeBtn.addEventListener('click', () => {
  const now = document.documentElement.getAttribute('data-theme') === 'light' ? null : 'light'
  if (now) document.documentElement.setAttribute('data-theme', 'light')
  else document.documentElement.removeAttribute('data-theme')
  themeBtn.setAttribute('aria-pressed', String(now === 'light'))
})

navToggle.addEventListener('click', () => {
  const open = navList.hasAttribute('hidden')
  if (open) { navList.hidden = false; navToggle.setAttribute('aria-expanded','true') }
  else { navList.hidden = true; navToggle.setAttribute('aria-expanded','false') }
})

window.addEventListener('load', renderSaved)
