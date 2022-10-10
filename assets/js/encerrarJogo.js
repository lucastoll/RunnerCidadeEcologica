import { popUp, player, posicaoPlayer, arrayObstaculos, arrayPosicoesObstaculos } from "./obstaculos/colisorObstaculos.js";
import { setJogoEmExecucao, intervaloChecarColisaoObstaculo, intervaloChecarColisaoPowerup, intervaloPontuacao, areaJogo } from "./comecarJogo.js";
import { ponto } from "./pontuacao.js";
import { timeoutAnimacaoPowerUpBicicleta, timeoutFimPowerUpBicicleta } from "./powerUps/bicicleta.js";
import { timeoutAnimacaoPowerUpCarroEletrico, timeoutFimPowerUpCarroEletrico } from "./powerUps/carroEletrico.js";
import { arrayPowerups, arrayPosicaoPowerups } from "./powerUps/colisorPowerups.js";
import { timeoutAnimacaoPowerUpOnibus, timeoutFimPowerUpOnibus } from "./powerUps/onibus.js";
import { timeoutRecursivoRandomizerPowerups } from "./powerUps/randomizerPowerups.js";
import { timeoutRecursivoRandomizerObstaculos } from "./obstaculos/randomizerObstaculos.js";

export function encerrarJogo(){
    for(let i = 0; i < arrayObstaculos.length; i++) {
        arrayObstaculos[i].style.animation = "none";
        arrayObstaculos[i].style.left = `${arrayPosicoesObstaculos[i]}px`;
    }
    for(let i = 0; i < arrayPowerups.length; i++) {
        arrayPowerups[i].style.animation = "none";
        arrayPowerups[i].style.left = `${arrayPosicaoPowerups[i]}px`;
    }

    player.style.animation = "none";
    player.classList.remove("pula");


    let backgroundPosition = window.getComputedStyle(areaJogo).backgroundPosition;
    
    areaJogo.style.animation = "none";
    areaJogo.style.backgroundPosition = backgroundPosition;

    player.style.bottom = `${posicaoPlayer}px`;
    popUp.style.display = "flex";
    document.querySelector(".popUpScorePlaceholder").innerHTML = `Score: ${ponto}`
    setTimeout(() => {
        document.querySelector(".buttonPopUp").disabled = false;
    }, 1001)

    setJogoEmExecucao(false);
    limpaIntervalos();
}

function limpaIntervalos(){
    clearTimeout(timeoutAnimacaoPowerUpBicicleta);
    clearTimeout(timeoutFimPowerUpBicicleta);
    clearTimeout(timeoutAnimacaoPowerUpOnibus);
    clearTimeout(timeoutFimPowerUpOnibus);
    clearTimeout(timeoutAnimacaoPowerUpCarroEletrico);
    clearTimeout(timeoutFimPowerUpCarroEletrico);
    clearTimeout(timeoutRecursivoRandomizerObstaculos);
    clearTimeout(timeoutRecursivoRandomizerPowerups);
    clearInterval(intervaloChecarColisaoObstaculo);
    clearInterval(intervaloChecarColisaoPowerup);
    clearInterval(intervaloPontuacao);
}