/**
 * Carrossel de Veículos - Projeto FP
 * Gerencia navegação entre carros com animações suaves
 */

// Seletores DOM
const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const container = document.querySelector('.container')
const items = container.querySelectorAll('.list .item')
const indicator = document.querySelector('.indicators')
const dots = indicator.querySelectorAll('ul li')
const numberDisplay = indicator.querySelector('.number')

// Estado do carrossel
let active = 0
const firstPosition = 0
const lastPosition = items.length - 1

/**
 * Atualiza o carrossel: alterna classe active, atualiza número
 * @function updateCarousel
 */
function updateCarousel() {
    // Remove classe active de todos os itens e indicadores
    items.forEach(item => item.classList.remove('active'))
    dots.forEach(dot => dot.classList.remove('active'))

    // Adiciona classe active ao item e dot corretos
    items[active].classList.add('active')
    dots[active].classList.add('active')

    // Atualiza o número com padding (ex: 01, 02, 03)
    numberDisplay.textContent = ('0' + (active + 1)).slice(-2)
}

/**
 * Navega para o próximo carro (com wrap-around)
 */
nextButton.addEventListener('click', () => {
    active = (active + 1) % items.length
    updateCarousel()
})

/**
 * Navega para o carro anterior (com wrap-around)
 */
prevButton.addEventListener('click', () => {
    active = (active - 1 + items.length) % items.length
    updateCarousel()
})

/**
 * Suporte a navegação via teclado (setas)
 */
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        nextButton.click()
    } else if (e.key === 'ArrowLeft') {
        prevButton.click()
    }
})

/**
 * Permite clicar nos dots indicadores para navegar direto
 */
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        active = index
        updateCarousel()
    })
})