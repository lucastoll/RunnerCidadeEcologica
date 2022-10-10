import { encerrarJogo } from "../encerrarJogo.js";
import { playerTemOnibus } from "../powerUps/onibus.js";

const player = document.querySelector(".player");
const obstaculoUm = document.querySelector(".obstaculocarro");
const obstaculoDois = document.querySelector(".placa");
const popUp = document.querySelector(".containerPopUpRestart");

/* Define a colisão e condição de parada */
let posicaoPlayer, posicaoObstaculoUm, posicaoObstaculoDois;

const arrayObstaculos = [obstaculoUm, obstaculoDois];
let arrayPosicoesObstaculos = [posicaoObstaculoUm, posicaoObstaculoDois];

function colisorObstaculos(){
    posicaoObstaculoUm = arrayObstaculos[0].offsetLeft;
    posicaoObstaculoDois = arrayObstaculos[1].offsetLeft;
    arrayPosicoesObstaculos = [posicaoObstaculoUm, posicaoObstaculoDois];
    posicaoPlayer = window.getComputedStyle(player).bottom.replace("px", "");
  
    const playerEstaColidindo = 
    (posicaoObstaculoUm < 92 && posicaoObstaculoUm > 0 && posicaoPlayer < 50) ||
    (posicaoObstaculoDois < 92 && posicaoObstaculoDois > 0 && posicaoPlayer > 50)
    
    if(playerEstaColidindo && playerTemOnibus == false){
      encerrarJogo()
    }
}

export {player, posicaoPlayer, obstaculoUm, posicaoObstaculoUm, obstaculoDois, posicaoObstaculoDois, arrayObstaculos, arrayPosicoesObstaculos, colisorObstaculos, popUp};