import { setPlayerPodePular }  from "./pulo.js";
import { player, colisorObstaculos, popUp, obstaculoUm, obstaculoDois } from "./colisorObstaculos.js"
import { Marcaponto, ResetaPontos} from "./pontuacao.js";
import { randomizerObstaculos } from "./randomizerObstaculos.js";
import { randomizerPowerups } from "./powerUps/randomizerPowerups.js";
import { colisorPowerup } from "./powerUps/colisorPowerups.js";


const buttonComecarJogo = document.querySelectorAll(".buttonStart");
const buttonMenuInicial = document.querySelector(".buttonMenu");

const menu = document.querySelector(".menu");
const areaJogo = document.querySelector(".areajogo1");

var jogoEmExecucao = false;
let intervaloChecarColisaoObstaculo, intervaloChecarColisaoPowerup, intervaloPontuacao;

/* Ações botão do menu e botão de restart */

//Sumir o menu inicial e aparecer a tela de jogo
buttonMenuInicial.addEventListener("click", () => { //Botao do menu inicial
  menu.style.display = "none"; 
  areaJogo.style.display = "block";
})
//Comecar o jogo no onClick do botão do menu e do botão de restart
buttonComecarJogo.forEach((button, index) => {
  button.addEventListener('click', comecarJogo)
})

function comecarJogo(){
  jogoEmExecucao = true;

  obstaculoUm.style.left = "auto";
  obstaculoUm.style.right = "-20%";
  obstaculoDois.style.left = "auto";
  obstaculoDois.style.right = "-20%";
  popUp.style.display = "none";
  player.classList.remove("pula");
  player.style.bottom = '0px';
  
  setPlayerPodePular(true);
  ResetaPontos();

  intervaloChecarColisaoObstaculo = setInterval(colisorObstaculos, 10);
  intervaloChecarColisaoPowerup = setInterval(colisorPowerup, 10)
  intervaloPontuacao = setInterval(Marcaponto, 2000);

  setTimeout(randomizerPowerups, 5000);
  //setTimeout(randomizerObstaculos, 2000);
}

function setJogoEmExecucao(value) {
    jogoEmExecucao = value; 
}

export {setJogoEmExecucao, jogoEmExecucao, intervaloChecarColisaoObstaculo, intervaloChecarColisaoPowerup, intervaloPontuacao};

