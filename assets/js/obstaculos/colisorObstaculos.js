import { encerrarJogo } from "../encerrarJogo.js";
import { playerTemPowerUp } from "../powerUps/animacaoPowerup.js";
import { playerTemBicicleta } from "../powerUps/bicicleta.js";
import { playerTemOnibus } from "../powerUps/onibus.js";

const player = document.querySelector(".player");
const obstaculoUm = document.querySelector(".obstaculocarro");
const obstaculoDois = document.querySelector(".placa");
const popUp = document.querySelector(".containerPopUpRestart");

/* Define a colisão e condição de parada */
let posicaoPlayer, posicaoObstaculoUm, posicaoObstaculoDois;

const arrayObstaculos = [obstaculoUm, obstaculoDois];
let arrayPosicoesObstaculos = [posicaoObstaculoUm, posicaoObstaculoDois];

let playerEstaColidindo

function colisorObstaculos(){
    posicaoObstaculoUm = arrayObstaculos[0].offsetLeft;
    posicaoObstaculoDois = arrayObstaculos[1].offsetLeft;
    arrayPosicoesObstaculos = [posicaoObstaculoUm, posicaoObstaculoDois];
    posicaoPlayer = window.getComputedStyle(player).bottom.replace("px", "");

    if(playerTemBicicleta){
      playerEstaColidindo =
      (posicaoObstaculoUm < 105  && posicaoObstaculoUm > 0 && posicaoPlayer < 50) ||
      (posicaoObstaculoDois < 105  && posicaoObstaculoDois > 0 && posicaoPlayer > 40) 
    }
    else if(playerTemPowerUp){
      playerEstaColidindo = 
      (posicaoObstaculoUm < 92 && posicaoObstaculoUm > 0 && posicaoPlayer < 50) ||
      (posicaoObstaculoDois < 92 && posicaoObstaculoDois > 0 && posicaoPlayer > 50)
    }
    else{
      playerEstaColidindo = 
      (posicaoObstaculoUm < 174 && posicaoObstaculoUm > 0 && posicaoPlayer < 50) ||
      (posicaoObstaculoDois < 174 && posicaoObstaculoDois > 0 && posicaoPlayer > 60)
    }
  
    
    if(playerEstaColidindo && playerTemOnibus == false){
      encerrarJogo()
    }
}

export {player, posicaoPlayer, obstaculoUm, posicaoObstaculoUm, obstaculoDois, posicaoObstaculoDois, arrayObstaculos, arrayPosicoesObstaculos, colisorObstaculos, popUp};