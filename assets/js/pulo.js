import { player } from "./colisao.js";
import { jogoEmExecucao } from "./comecarJogo.js";

var playerPodePular = false;

function pular() {
    player.classList.add("pula");
    setTimeout(() => {
      player.classList.remove("pula");
      playerPodePular = true;
    }, 1000);
}
  
document.addEventListener("keydown", (event) => {  
    if (event.key === "w" && playerPodePular === true && jogoEmExecucao == true) {
      playerPodePular = false;
      pular();
    }
});
  
function setPlayerPodePular(value) {
    playerPodePular = value; 
}

export {setPlayerPodePular};
