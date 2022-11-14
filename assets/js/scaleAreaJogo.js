const areaJogo = document.querySelector(".areajogo1");

window.addEventListener('DOMContentLoaded', () => {
    let scale = Math.min(
        window.innerWidth / 1024,
        window.innerHeight / 500
    )

    areaJogo.style.transform = `scale(${scale})`
})

window.addEventListener('resize', () => {
    areaJogo.style.transform = `scale(${scale})`
})