import './style.css'

const header = document.querySelector('.site-header')
const toggle = document.querySelector('.nav-toggle')
const nav = document.querySelector('#site-nav')

function setNavOpen(open) {
  if (!header || !toggle || !nav) return
  header.classList.toggle('is-open', open)
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false')
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
  document.body.style.overflow = open ? 'hidden' : ''
}

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = !header.classList.contains('is-open')
    setNavOpen(open)
  })

  nav.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', () => {
      if (window.matchMedia('(max-width: 56rem)').matches) {
        setNavOpen(false)
      }
    })
  })
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && header?.classList.contains('is-open')) {
    setNavOpen(false)
    toggle?.focus()
  }
})

window.addEventListener('resize', () => {
  if (window.matchMedia('(min-width: 56.01rem)').matches) {
    setNavOpen(false)
  }
})
