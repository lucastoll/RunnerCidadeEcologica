import { popUp, player, posicaoPlayer, arrayObstaculos, arrayPosicoesObstaculos } from "./colisorObstaculos.js";
import { setJogoEmExecucao, intervaloChecarColisaoObstaculo, intervaloChecarColisaoPowerup, intervaloPontuacao } from "./comecarJogo.js";
import { arrayPowerups, arrayPosicaoPowerups } from "./powerUps/colisorPowerups.js";

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

    player.style.bottom = `${posicaoPlayer}px`;
    popUp.style.display = "flex";
    setJogoEmExecucao(false);
    
    clearInterval(intervaloChecarColisaoObstaculo);
    clearInterval(intervaloChecarColisaoPowerup);
    clearInterval(intervaloPontuacao);
}

