import { player } from "./colisorObstaculos.js";
import { jogoEmExecucao } from "./comecarJogo.js";
import { animacaoPowerupRodando } from "./powerUps/animacaoPowerup.js";
import { playerTemOnibus } from "./powerUps/onibus.js";

var playerPodePular = false;

function pular() {
    if(playerTemOnibus == false){
      player.classList.add("pula");
    }
    else{
      player.classList.add("pulaOnibus");
    }
    setTimeout(() => {
      player.classList.remove("pula");
      player.classList.remove("pulaOnibus");
      playerPodePular = true;
    }, 1000);
}
  
document.addEventListener("keydown", (event) => {  
    if (event.key === "w" && playerPodePular == true && jogoEmExecucao == true && animacaoPowerupRodando == false) {
      playerPodePular = false;
      pular();
    }
});
  
function setPlayerPodePular(value) {
    playerPodePular = value; 
}

export {setPlayerPodePular, playerPodePular};
