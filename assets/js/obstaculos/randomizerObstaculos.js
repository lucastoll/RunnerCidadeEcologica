import { arrayObstaculos } from "./colisorObstaculos.js";
import { timerObstaculos } from "../pontuacao.js";
import { jogoEmExecucao } from "../comecarJogo.js";
import { getRandomInt } from "../auxiliares/getRandomInt.js";
import { animacaoPowerupRodando, playerTemPowerUp } from "../powerUps/animacaoPowerup.js";
import { playerTemBicicleta } from "../powerUps/bicicleta.js";
import { playerTemCarroEletrico } from "../powerUps/carroEletrico.js";
import { playerTemCaminhada } from "../powerUps/caminhada.js";
import { playerTemOnibus } from "../powerUps/onibus.js";

let randomNumObstaculo = 0, i;
let timeoutRecursivoRandomizerObstaculos;
// [sacoDeLixo, sacoDeLixo2, pomba, rato, hidrante, cone, placaSubwaySurfers, passarinho, pedra, pedra2, banco, tronco];

/* sacoDeLixo até cone - cidade suja - 0 a 5 */
/* hidrante até passarinho - cidade limpa - 4 a 7 */
/* passarinho até tronco - ciclovia - 7 a 11 */

function randomizerObstaculos(){
    if(jogoEmExecucao && animacaoPowerupRodando == false){
        if(!playerTemPowerUp){
            randomNumObstaculo = getRandomInt(0, 6);
        }
        else if(playerTemCarroEletrico || playerTemOnibus){
            randomNumObstaculo = getRandomInt(4, 8);
        }
        else if(playerTemCaminhada || playerTemBicicleta){
            randomNumObstaculo = getRandomInt(7, 12);
        }
        for(i=0; i<arrayObstaculos.length; i++){
            arrayObstaculos[i].style = "none";
        }
        /* DELAY PARA O CSS ENTENDER QUE A ANIMAÇÃO MUDOU */

        if(playerTemCaminhada || playerTemBicicleta){
            setTimeout(() => {
                arrayObstaculos[randomNumObstaculo].style.animation = `animacaoObstaculo linear 1 ${(3000) / 1000}s`;
            }, 10);
        }
        else if(playerTemCarroEletrico){
            setTimeout(() => {
                arrayObstaculos[randomNumObstaculo].style.animation = `animacaoObstaculo linear 1 ${(3500) / 1000}s`;
            }, 10);
        }
        else{
            setTimeout(() => {
                arrayObstaculos[randomNumObstaculo].style.animation = `animacaoObstaculo linear 1 ${(timerObstaculos) / 1000}s`;
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