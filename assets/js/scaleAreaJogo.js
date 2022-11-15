const areaJogo = document.querySelector(".areajogo1");

let scale;

window.addEventListener('DOMContentLoaded', () => {
    scale = Math.min(
        window.innerWidth / 1024,
        window.innerHeight / 500
    )

    areaJogo.style.transform = `scale(${scale})`
})

window.addEventListener('resize', () => {
    scale = Math.min(
        window.innerWidth / 1024,
        window.innerHeight / 500
    )

    areaJogo.style.transform = `scale(${scale})`
})