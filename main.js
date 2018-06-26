const body = document.querySelector('body')
const nav = document.querySelector('.global-nav-inner')

const birdie = document.querySelector('.Icon--bird')
birdie.id = 'timer'

birdie.innerHTML = `
  <svg width="12px" height="14px" viewBox="0 0 12 14" >
    <rect x="3" y="0" width="6" height="1.5" rx="0.75"></rect>
    <rect x="4.5" y="1" width="3" height="2"></rect>
    <circle cx="6" cy="8" r="6"></circle>
    <path class="time" d="M6,6 L6,6 C7.1045695,6 8,6.8954305 8,8 L8,8 C8,9.1045695 7.1045695,10 6,10 L6,10 C4.8954305,10 4,9.1045695 4,8 L4,8 C4,6.8954305 4.8954305,6 6,6 Z"></path>
  </svg>
`

const clock = document.querySelector('#timer svg')
const time = document.querySelector('#timer .time')

const start = 12
const end = 2
let current = localStorage.current || start

const total = 10 * 60 // 10 mins = 600 seconds
const interval = 15 // every 15 seconds

const step = (start - end) / (total / interval)

time.style.strokeDashoffset = current

const update = () => {
  if (current > end) {
    current = current - step
    time.style.strokeDashoffset = current
    localStorage.current = current
  } else {
    current = 0
    time.style.strokeDashoffset = current
    localStorage.current = current

    time.style.stroke = '#ff6961'
    nav.style.backgroundColor = '#ff6961'
    body.style.backgroundColor = '#ff6961'
  }
}

window.setInterval(_ => update(), interval * 1000)

birdie.addEventListener('click', () => {
  current = start + 1
  time.style.stroke = '#fff'
  nav.style.backgroundColor = '#fff'
  body.style.backgroundColor = '#e6ecf0'
  update()
})
