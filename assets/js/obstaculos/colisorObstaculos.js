import { encerrarJogo } from "../encerrarJogo.js";
import { comprimentoPlayer, posicaoPlayerLeft } from "../player/movimentacao.js";
import { playerTemPowerUp } from "../powerUps/animacaoPowerup.js";
import { playerTemBicicleta } from "../powerUps/bicicleta.js";
import { playerTemOnibus } from "../powerUps/onibus.js";

const player = document.querySelector(".player");
const obstaculoUm = document.querySelector(".obstaculocarro");
const obstaculoDois = document.querySelector(".placa");
const popUp = document.querySelector(".containerPopUpRestart");

/* Define a colisão e condição de parada */
let posicaoPlayerBottom, posicaoObstaculoUm, posicaoObstaculoDois;

const arrayObstaculos = [obstaculoUm, obstaculoDois];
let arrayPosicoesObstaculos = [posicaoObstaculoUm, posicaoObstaculoDois];

let playerEstaColidindo

function colisorObstaculos(){
    posicaoObstaculoUm = arrayObstaculos[0].offsetLeft;
    posicaoObstaculoDois = arrayObstaculos[1].offsetLeft;
    arrayPosicoesObstaculos = [posicaoObstaculoUm, posicaoObstaculoDois];
    posicaoPlayerBottom = window.getComputedStyle(player).bottom.replace("px", "");

    playerEstaColidindo = 
    (posicaoObstaculoUm < (posicaoPlayerLeft + comprimentoPlayer) && posicaoObstaculoUm > (posicaoPlayerLeft - 50) && posicaoPlayerBottom < 50 && posicaoObstaculoUm > 0) ||
    (posicaoObstaculoDois < (posicaoPlayerLeft + comprimentoPlayer) && posicaoObstaculoDois > (posicaoPlayerLeft - 50) && posicaoPlayerBottom > 60 && posicaoObstaculoUm > 0)
    
    if(playerEstaColidindo && playerTemOnibus == false && false == true){
      encerrarJogo()
    }
}

export {player, posicaoPlayerBottom, obstaculoUm, posicaoObstaculoUm, obstaculoDois, posicaoObstaculoDois, arrayObstaculos, arrayPosicoesObstaculos, colisorObstaculos, popUp};