import { timerObstaculos } from "../pontuacao.js";
import { jogoEmExecucao } from "../comecarJogo.js";
import { getRandomInt } from "../auxiliares/getRandomInt.js";
import { arrayPowerups } from "./colisorPowerups.js"

let randomNumPowerup = 0, i;

function randomizerPowerups(){
    if(jogoEmExecucao){
        randomNumPowerup = 0;
        console.log(randomNumPowerup)
        for(i=0; i<arrayPowerups.length; i++){
            arrayPowerups[i].style.animation = "none";
        }
        setTimeout(() => {
            arrayPowerups[randomNumPowerup].style.animation = `powerUpKeyframe linear 1 ${5000 / 1000}s`;
        }, 10)
    
        setTimeout(randomizerPowerups, 5000);
    }
}

export { randomizerPowerups }