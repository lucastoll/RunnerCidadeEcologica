import { arrayObstaculos } from "./colisorObstaculos.js";
import { timerObstaculos } from "./pontuacao.js";
import { jogoEmExecucao } from "./comecarJogo.js";
import { getRandomInt } from "./auxiliares/getRandomInt.js";
import { animacaoPowerupRodando } from "./powerUps/animacaoPowerup.js";
import { playerTemBicicleta } from "./powerUps/bicicleta.js";
import { playerTemCarroEletrico } from "./powerUps/carroEletrico.js";

let randomNumObstaculo = 0, i;

function randomizerObstaculos(){
    if(jogoEmExecucao && animacaoPowerupRodando == false){
        randomNumObstaculo = getRandomInt(0, 2);
        for(i=0; i<arrayObstaculos.length; i++){
            arrayObstaculos[i].style = "none";
        }
        /* DELAY PARA O CSS ENTENDER QUE A ANIMAÇÃO MUDOU */
        if(playerTemCarroEletrico == false){
            setTimeout(() => {
                arrayObstaculos[randomNumObstaculo].style.animation = `carroparado linear 1 ${(timerObstaculos) / 1000}s`;
            }, 10);
        }
        else{
            setTimeout(() => {
                arrayObstaculos[randomNumObstaculo].style.animation = `carroparado linear 1 ${(2500) / 1000}s`;
            }, 10);
        }
        
        if(playerTemBicicleta){
            setTimeout(randomizerObstaculos, 3000);
        }
        else if(playerTemCarroEletrico){
            setTimeout(randomizerObstaculos, 2500);
        }
        else{
            setTimeout(randomizerObstaculos, timerObstaculos);
        }
    }
}

export {randomizerObstaculos};