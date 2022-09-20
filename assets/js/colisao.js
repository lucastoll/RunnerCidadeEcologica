import { encerrarJogo } from "./encerrarJogo.js";

const player = document.querySelector(".player");
const obstaculoUm = document.querySelector(".obstaculocarro");
const popUp = document.querySelector(".containerPopUpRestart");

/* Define a colisão e condição de parada */
let posicaoObstaculoUm, posicaoPlayer;

function colisao(){
  //console.log(`Posição obstaculo = ${posicaoObstaculoUm}, posicao player = ${posicaoPlayer}`);
  posicaoObstaculoUm = obstaculoUm.offsetLeft;
  posicaoPlayer = window.getComputedStyle(player).bottom.replace("px", "");
  const playerEstaColidindo = posicaoObstaculoUm < 92 && posicaoObstaculoUm > 0 && posicaoPlayer < 50
  
  if(playerEstaColidindo){
    encerrarJogo()
  }
}

export {player, posicaoPlayer, obstaculoUm, posicaoObstaculoUm, colisao, popUp};