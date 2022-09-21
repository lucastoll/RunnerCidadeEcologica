import { encerrarJogo } from "./encerrarJogo.js";

const player = document.querySelector(".player");
const obstaculoUm = document.querySelector(".obstaculocarro");
const obstaculoDois = document.querySelector(".placa");
const arrayObstaculos = [obstaculoUm, obstaculoDois];
const popUp = document.querySelector(".containerPopUpRestart");

/* Define a colisão e condição de parada */
let posicaoPlayer, posicaoObstaculoUm, posicaoObstaculoDois;

function colisao(){
  //console.log(`Posição obstaculo = ${posicaoObstaculoUm}, posicao player = ${posicaoPlayer}`);
  posicaoObstaculoUm = arrayObstaculos[0].offsetLeft;
  posicaoObstaculoDois = arrayObstaculos[1].offsetLeft;

  posicaoPlayer = window.getComputedStyle(player).bottom.replace("px", "");
  console.log(posicaoObstaculoDois, posicaoPlayer)


  const playerEstaColidindo = 
  (posicaoObstaculoUm < 92 && posicaoObstaculoUm > 0 && posicaoPlayer < 50) ||
  (posicaoObstaculoDois < 92 && posicaoObstaculoDois > 0 && posicaoPlayer > 50)
  
  if(playerEstaColidindo){
    encerrarJogo()
  }
}

export {player, posicaoPlayer, obstaculoUm, posicaoObstaculoUm, obstaculoDois, posicaoObstaculoDois, arrayObstaculos, colisao, popUp};