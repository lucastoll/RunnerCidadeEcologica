import { arrayObstaculos } from "./colisorObstaculos.js";
import { timerObstaculos } from "./pontuacao.js";
import { jogoEmExecucao } from "./comecarJogo.js";
import { getRandomInt } from "./auxiliares/getRandomInt.js";

let randomNumObstaculo = 0, i, auxiliar;

function randomizerObstaculos(){

    if(jogoEmExecucao){
        randomNumObstaculo = getRandomInt(0, 2);
        auxiliar = randomNumObstaculo;
        for(i=0; i<arrayObstaculos.length; i++){
            arrayObstaculos[i].style = "none";
        }
        /* DELAY PARA O CSS ENTENDER QUE A ANIMAÇÃO MUDOU */
        setTimeout(() => {
            arrayObstaculos[randomNumObstaculo].style.animation = `carroparado linear 1 ${(timerObstaculos) / 1000}s`;
        }, 10);

        setTimeout(randomizerObstaculos, timerObstaculos);
    }
}

export {randomizerObstaculos};