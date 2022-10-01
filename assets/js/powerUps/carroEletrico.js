import { animacaoPowerUp } from "./animacaoPowerup.js";

const powerUpCarroEletrico = document.querySelector(".powerUp--carroEletrico");

function carroEletrico(){
    powerUpCarroEletrico.style.animation = "none";
    powerUpCarroEletrico.style.right = "-10%";
    animacaoPowerUp();
}

export { carroEletrico }