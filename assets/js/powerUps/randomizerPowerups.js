import { jogoEmExecucao } from "../comecarJogo.js";
import { arrayPowerups } from "./colisorPowerups.js"
import { animacaoPowerupRodando } from "./animacaoPowerup.js";
import { getRandomInt } from "../auxiliares/getRandomInt.js";

let randomNumPowerup = 0, i;

function randomizerPowerups(){
    
    if(jogoEmExecucao && animacaoPowerupRodando == false){
        //randomNumPowerup = getRandomInt(0, 3);
        randomNumPowerup = 0;
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