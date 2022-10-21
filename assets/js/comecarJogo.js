import { setPlayerPodePular }  from "./player/pulo.js";
import { player, colisorObstaculos, popUp, arrayObstaculos } from "./obstaculos/colisorObstaculos.js"
import { Marcaponto, ResetaPontos} from "./pontuacao.js";
import { randomizerObstaculos } from "./obstaculos/randomizerObstaculos.js";
import { randomizerPowerups } from "./powerUps/randomizerPowerups.js";
import { arrayPowerups, colisorPowerup } from "./powerUps/colisorPowerups.js";
import { iniciaNuvens, colocaNuvensSujasAoReiniciarJogo } from "./nuvem/nuvens.js";
import { removeEstilosBicicleta } from "./powerUps/bicicleta.js";
import { removeEstilosCarroEletrico } from "./powerUps/carroEletrico.js";
import { removeEstilosOnibus } from "./powerUps/onibus.js";
import { limpaSprites } from "./player/sprites.js";
import { removeEstilosCaminhada } from "./powerUps/caminhada.js";
import { posicaoPlayerLeft, setPosicaoPlayerLeft } from "./player/movimentacao.js";


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
buttonComecarJogo.forEach((button) => {
  button.addEventListener('click', comecarJogo)
})

function comecarJogo(){
  jogoEmExecucao = true;

  for(let i = 0; i < arrayObstaculos.length; i++) {
    arrayObstaculos[i].style.left = "auto";
    arrayObstaculos[i].style.right = `-20%`;
  }
  for(let i = 0; i < arrayPowerups.length; i++) {
    arrayPowerups[i].style.left = "auto";
    arrayPowerups[i].style.right = `-20%`;
  }

  areaJogo.style.animation = "backgroundCarro 1000s infinite";
  popUp.style.display = "none";
  player.classList.remove("pula");
  player.style = "";
  setPosicaoPlayerLeft(40);
  document.querySelector(".buttonPopUp").disabled = true;

  colocaNuvensSujasAoReiniciarJogo();
  limpaSprites();
  removeEstilosPowerup();
  iniciaNuvens();
  setPlayerPodePular(true);
  ResetaPontos();

  intervaloChecarColisaoObstaculo = setInterval(colisorObstaculos, 10);
  intervaloChecarColisaoPowerup = setInterval(colisorPowerup, 10)
  intervaloPontuacao = setInterval(Marcaponto, 2000);

  //setTimeout(randomizerPowerups, 10);
  setTimeout(randomizerObstaculos, 2000);
}

function setJogoEmExecucao(value) {
    jogoEmExecucao = value; 
}

function removeEstilosPowerup(){
  removeEstilosBicicleta();
  removeEstilosCarroEletrico();
  removeEstilosOnibus();
  removeEstilosCaminhada();

  if(window.innerWidth < 1024){
    areaJogo.style.backgroundSize = "220% 100%"
  }
  else if(window.innerWidth >= 1440){
    areaJogo.style.backgroundSize = "100% 100%"
  }
  else if(window.innerWidth >= 1024){
    areaJogo.style.backgroundSize = "150% 100%"
  }
}

export {setJogoEmExecucao, jogoEmExecucao, intervaloChecarColisaoObstaculo, intervaloChecarColisaoPowerup, intervaloPontuacao, areaJogo};

