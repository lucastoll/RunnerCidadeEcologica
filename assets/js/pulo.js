import { player } from "./colisorObstaculos.js";
import { jogoEmExecucao } from "./comecarJogo.js";
import { animacaoPowerupRodando } from "./powerUps/animacaoPowerup.js";

var playerPodePular = false;

function pular() {
    player.classList.add("pula");
    setTimeout(() => {
      player.classList.remove("pula");
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
