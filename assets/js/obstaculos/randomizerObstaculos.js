import { arrayObstaculos } from "./colisorObstaculos.js";
import { timerObstaculos } from "../pontuacao.js";
import { jogoEmExecucao } from "../comecarJogo.js";
import { getRandomInt } from "../auxiliares/getRandomInt.js";
import { animacaoPowerupRodando } from "../powerUps/animacaoPowerup.js";
import { playerTemBicicleta } from "../powerUps/bicicleta.js";
import { playerTemCarroEletrico } from "../powerUps/carroEletrico.js";
import { playerTemCaminhada } from "../powerUps/caminhada.js";

let randomNumObstaculo = 0, i;
let timeoutRecursivoRandomizerObstaculos;
//const arrayObstaculos = [sacoDeLixo, sacoDeLixo2, hidrante, cone, rato, pomba, pedra, pedra2, passarinho, banco];


function randomizerObstaculos(){
    if(jogoEmExecucao && animacaoPowerupRodando == false && false == true){
        if(playerTemCaminhada || playerTemBicicleta){
            randomNumObstaculo = getRandomInt(6, 10);
            randomNumObstaculo = 9;
        }
        else{
            randomNumObstaculo = getRandomInt(0, 6);
            randomNumObstaculo = 2;
        }
        console.log(randomNumObstaculo)
        for(i=0; i<arrayObstaculos.length; i++){
            arrayObstaculos[i].style = "none";
        }
        /* DELAY PARA O CSS ENTENDER QUE A ANIMAÇÃO MUDOU */

        if(playerTemCaminhada || playerTemBicicleta){
            setTimeout(() => {
                arrayObstaculos[randomNumObstaculo].style.animation = `carroparado linear 1 ${(3000) / 1000}s`;
            }, 10);
        }
        else if(playerTemCarroEletrico){
            setTimeout(() => {
                arrayObstaculos[randomNumObstaculo].style.animation = `carroparado linear 1 ${(3500) / 1000}s`;
            }, 10);
        }
        else{
            setTimeout(() => {
                arrayObstaculos[randomNumObstaculo].style.animation = `carroparado linear 1 ${(timerObstaculos) / 1000}s`;
            }, 10);
        }
        
        if(playerTemBicicleta){
            timeoutRecursivoRandomizerObstaculos = setTimeout(randomizerObstaculos, 4500);
        }
        else if(playerTemCarroEletrico){
            timeoutRecursivoRandomizerObstaculos = setTimeout(randomizerObstaculos, 5000);
        }
        else{
            timeoutRecursivoRandomizerObstaculos = setTimeout(randomizerObstaculos, timerObstaculos);
        }
    }
}

export { randomizerObstaculos, timeoutRecursivoRandomizerObstaculos, randomNumObstaculo };