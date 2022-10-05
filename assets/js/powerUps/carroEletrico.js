import { getRandomInt } from "../auxiliares/getRandomInt.js";
import { player } from "../colisorObstaculos.js";
import { areaJogo } from "../comecarJogo.js";
import { animacaoPowerUp, setPlayerTemPowerUp } from "./animacaoPowerup.js";
import { randomizerPowerups } from "./randomizerPowerups.js";

const powerUpCarroEletrico = document.querySelector(".powerUp--carroEletrico");
let playerTemCarroEletrico = false;
let timeoutAnimacaoPowerUpCarroEletrico;
let timeoutFimPowerUpCarroEletrico;

function carroEletrico(){
    playerTemCarroEletrico = true;
    
    animacaoPowerUp();
    addEstilosCarroEletrico();
    timeoutAnimacaoPowerUpCarroEletrico = setTimeout(() => {
        animacaoPowerUp();
    }, 20000);
    timeoutFimPowerUpCarroEletrico = setTimeout(() => {
        player.style = "";
        removeEstilosCarroEletrico();
        setTimeout(randomizerPowerups, getRandomInt(20000, 35000));
    }, 23000);
}

function addEstilosCarroEletrico(){
    powerUpCarroEletrico.style.animation = "none";
    powerUpCarroEletrico.style.right = "-10%";
    player.classList.add("carroEletrico");
    areaJogo.style.background = "#005CC1";
    document.querySelector("body").style.background = "#A1AAAA";
}

function removeEstilosCarroEletrico(){
    setPlayerTemPowerUp(false);
    playerTemCarroEletrico = false;
    player.classList.remove("carroEletrico");
    areaJogo.style.background = "#3c3c3c";
    document.querySelector("body").style.background = "#A1AAAA";
}

export { carroEletrico, playerTemCarroEletrico, timeoutFimPowerUpCarroEletrico, timeoutAnimacaoPowerUpCarroEletrico }