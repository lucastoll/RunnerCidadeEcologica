import { popUp, player, posicaoPlayer, obstaculoUm, posicaoObstaculoUm, obstaculoDois, posicaoObstaculoDois } from "./colisorObstaculos.js";
import { setJogoEmExecucao, intervaloChecarColisaoObstaculo, intervaloChecarColisaoPowerup, intervaloPontuacao } from "./comecarJogo.js";

export function encerrarJogo(){
    obstaculoUm.style.animation = "none";
    obstaculoUm.style.left = `${posicaoObstaculoUm}px`;
    
    obstaculoDois.style.animation = "none";
    obstaculoDois.style.left = `${posicaoObstaculoDois}px`;

    player.style.animation = "none";
    player.classList.remove("pula");

    player.style.bottom = `${posicaoPlayer}px`;
    popUp.style.display = "flex";
    setJogoEmExecucao(false);
    
    clearInterval(intervaloChecarColisaoObstaculo);
    clearInterval(intervaloChecarColisaoPowerup);
    clearInterval(intervaloPontuacao);
}

