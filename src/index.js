/**
 * =========================================================
 * METAL GEAR SAGA
 * Scripts de Interface
 * =========================================================
 */

document.addEventListener('DOMContentLoaded', init)

/* =========================================================
   FUNÇÃO PRINCIPAL
   Inicializa todos os módulos da página
========================================================= */

function init() {
  initHeroSlider()
  initSmoothScroll()
  initConsoleMessage()
  initMarqueeFix()
}

/* =========================================================
   FIX MARQUEE LOOP (TOP BAR)
   Evita bug e cria loop infinito
========================================================= */

function initMarqueeFix() {
  const track = document.querySelector('.marquee-track')

  if (!track) return

  // impede duplicação caso o script rode novamente
  if (track.dataset.duplicated) return

  const content = track.innerHTML

  // duplica o conteúdo para loop contínuo
  track.innerHTML += content

  // marca como duplicado
  track.dataset.duplicated = 'true'
}

/* =========================================================
   HERO SLIDER
   Controle automático das imagens do cabeçalho
========================================================= */

function initHeroSlider() {
  const SLIDE_INTERVAL = 8000

  const slides = document.querySelectorAll('.slide')
  let currentSlide = 0

  function nextSlide() {
    slides[currentSlide].classList.remove('active')

    currentSlide = (currentSlide + 1) % slides.length

    slides[currentSlide].classList.add('active')
  }

  if (slides.length > 0) {
    setInterval(nextSlide, SLIDE_INTERVAL)
  }
}

/* =========================================================
   SMOOTH SCROLL
   Rolagem suave para links internos
========================================================= */

function initSmoothScroll() {
  const anchors = document.querySelectorAll('a[href^="#"]')

  anchors.forEach((anchor) => {
    anchor.addEventListener('click', function (event) {
      event.preventDefault()

      const targetId = this.getAttribute('href')
      const targetElement = document.querySelector(targetId)

      if (!targetElement) return

      targetElement.scrollIntoView({
        behavior: 'smooth',
      })
    })
  })
}

/* =========================================================
   CONSOLE MESSAGE
========================================================= */

function initConsoleMessage() {
  console.log(
    '%c[SISTEMA iDROID]: Conexão estabelecida. Arquivos da Saga carregados.',
    'color:#e11d48;font-weight:bold;font-size:12px;'
  )
}
