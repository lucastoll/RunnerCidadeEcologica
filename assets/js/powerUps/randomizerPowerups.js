import { jogoEmExecucao } from "../comecarJogo.js";
import { arrayPowerups } from "./colisorPowerups.js"
import { playerTemPowerUp } from "./animacaoPowerup.js";
import { getRandomInt } from "../auxiliares/getRandomInt.js";

let randomNumPowerup = 0, i;
let timeoutRecursivoRandomizerPowerups;

function randomizerPowerups(){
    if(jogoEmExecucao && playerTemPowerUp == false){
        //randomNumPowerup = getRandomInt(0, 3);
        randomNumPowerup = 3;
        for(i=0; i<arrayPowerups.length; i++){
            arrayPowerups[i].style.animation = "none";
        }
        setTimeout(() => {
            arrayPowerups[randomNumPowerup].style.animation = `powerUpKeyframe linear 1 ${5000 / 1000}s`;
        }, 10)
    
        timeoutRecursivoRandomizerPowerups = setTimeout(randomizerPowerups, 5000);
    }
}

export { randomizerPowerups, timeoutRecursivoRandomizerPowerups }