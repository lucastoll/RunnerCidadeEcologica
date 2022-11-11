import { getRandomInt } from "../auxiliares/getRandomInt.js";
import { jogoEmExecucao } from "../comecarJogo.js";
import { arrayPontosExtras } from "./colisorPontosExtras.js";

let randomNumPontosExtras = 0, i;
let timeoutRecursivoRandomizerPontosExtras;

function randomizerPontosExtras(){
    if(jogoEmExecucao && false == true){
        randomNumPontosExtras = getRandomInt(0, 3);
        for(i=0; i < arrayPontosExtras.length; i++){
            arrayPontosExtras[i].style.animation = "none";
        }
        setTimeout(() => {
            arrayPontosExtras[randomNumPontosExtras].style.animation = `animaPontosExtras linear 1 3.5s`;
        }, 10)
    
        //timeoutRecursivoRandomizerPontosExtras = setTimeout(randomizerPontosExtras, getRandomInt(3600, 30000));
        timeoutRecursivoRandomizerPontosExtras = setTimeout(randomizerPontosExtras, 3600);
    }
}

export { randomizerPontosExtras, timeoutRecursivoRandomizerPontosExtras, randomNumPontosExtras }