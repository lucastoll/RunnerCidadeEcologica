import { popUp, player, posicaoPlayer, obstaculoUm, posicaoObstaculoUm } from "./colisao.js";
import { setJogoEmExecucao, intervaloChecarColisao } from "./comecarJogo.js";

export function encerrarJogo(){
    obstaculoUm.style.animation = "none";
    obstaculoUm.style.left = `${posicaoObstaculoUm}px`;
    player.style.animation = "none";
    player.classList.remove("pula");
    player.style.bottom = `${posicaoPlayer}px`;
    popUp.style.display = "flex";
    setJogoEmExecucao(false);
    
    clearInterval(intervaloChecarColisao);
}

