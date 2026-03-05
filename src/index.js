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
}

/* =========================================================
   HERO SLIDER
   Controle automático das imagens do cabeçalho
========================================================= */

function initHeroSlider() {
  /* ---------- Configurações ---------- */

  const SLIDE_INTERVAL = 8000 // tempo entre slides (ms)

  /* ---------- Estado ---------- */

  const slides = document.querySelectorAll('.slide')
  let currentSlide = 0

  /* ---------- Funções internas ---------- */

  function nextSlide() {
    // Remove a classe ativa do slide atual
    slides[currentSlide].classList.remove('active')

    // Calcula o próximo slide (loop infinito)
    currentSlide = (currentSlide + 1) % slides.length

    // Ativa o novo slide
    slides[currentSlide].classList.add('active')
  }

  /* ---------- Inicialização ---------- */

  if (slides.length > 0) {
    setInterval(nextSlide, SLIDE_INTERVAL)
  }
}

/* =========================================================
   SMOOTH SCROLL
   Rolagem suave para links internos (#anchors)
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
   Mensagem estilizada no console do navegador
========================================================= */

function initConsoleMessage() {
  console.log(
    '%c[SISTEMA iDROID]: Conexão estabelecida. Arquivos da Saga carregados.',
    'color: #e11d48; font-weight: bold; font-size: 12px;'
  )
}
