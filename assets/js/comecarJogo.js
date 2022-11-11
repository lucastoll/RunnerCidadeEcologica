import { setPlayerPodePular }  from "./player/pulo.js";
import { player, colisorObstaculos, popUp, arrayObstaculos } from "./obstaculos/colisorObstaculos.js"
import { Marcaponto, ResetaPontos} from "./pontuacao.js";
import { randomizerObstaculos } from "./obstaculos/randomizerObstaculos.js";
import { randomizerPowerups } from "./powerUps/randomizerPowerups.js";
import { arrayPowerups, colisorPowerup } from "./powerUps/colisorPowerups.js";
import { iniciaNuvens, colocaNuvensSujasAoReiniciarJogo } from "./nuvem/nuvens.js";
import { removeEstilosBicicleta } from "./powerUps/bicicleta.js";
import { removeEstilosCarroEletrico, spritesPowerUpCarroEletrico } from "./powerUps/carroEletrico.js";
import { removeEstilosOnibus } from "./powerUps/onibus.js";
import { limpaSprites } from "./player/sprites.js";
import { removeEstilosCaminhada } from "./powerUps/caminhada.js";
import { posicaoPlayerLeft, setPosicaoPlayerLeft } from "./player/movimentacao.js";
import { arrayPontosExtras, colisorPontosExtras } from "./pontosExtras/colisorPontosExtras.js";
import { getRandomInt } from "./auxiliares/getRandomInt.js";
import { randomizerPontosExtras } from "./pontosExtras/randomizerPontosExtras.js";
import { spritesPassarinho, spritesPomba } from "./obstaculos/spritesObstaculos.js";
import { spritesCereja } from "./pontosExtras/cereja.js";


const buttonComecarJogo = document.querySelectorAll(".buttonStart");
const buttonMenuInicialComecarJogo = document.querySelector(".buttonMenu");
const buttonMenuInicialTutorial = document.querySelector(".popUpTutorialButton");

const popUpTutorial = document.querySelector(".containerPopUpTutorial");

const menu = document.querySelector(".menu");
const areaJogo = document.querySelector(".areajogo1");

var jogoEmExecucao = false;
let intervaloChecarColisaoObstaculo, intervaloChecarColisaoPowerup, intervaloChecarColisaoPontosExtras, intervaloPontuacao
let loopSpritesPomba, loopSpritesPowerupCarroEletrico, loopSpritesCereja, loopSpritesPassarinho;

//Mostrar PopUpTutorial
buttonMenuInicialComecarJogo.addEventListener("click", () => {
  popUpTutorial.style.display = "flex";
})

buttonMenuInicialTutorial.addEventListener("click", () => { //Botao do menu inicial
  menu.style.display = "none"; 
  areaJogo.style.display = "block";
  popUpTutorial.style.display = "none";
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
  for(let i = 0; i < arrayPontosExtras.length; i++) {
    arrayPontosExtras[i].style.left = "auto";
    arrayPontosExtras[i].style.right = `-20%`;
  }

  areaJogo.style.animation = "backgroundCarro 500s infinite, backgroundCarro 500s infinite";
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
  intervaloChecarColisaoPontosExtras = setInterval(colisorPontosExtras, 10)
  intervaloChecarColisaoPowerup = setInterval(colisorPowerup, 10)
  intervaloPontuacao = setInterval(Marcaponto, 2000);

  setTimeout(randomizerPowerups, 10);
  setTimeout(randomizerObstaculos, 2000);
  setTimeout(randomizerPontosExtras, 1);

  loopSpritesPomba = setInterval(spritesPomba, 200);
  loopSpritesPassarinho = setInterval(spritesPassarinho, 200);
  loopSpritesPowerupCarroEletrico = setInterval(spritesPowerUpCarroEletrico, 200);
  loopSpritesCereja = setInterval(spritesCereja, 200);
}

function setJogoEmExecucao(value) {
    jogoEmExecucao = value; 
}

function removeEstilosPowerup(){
  removeEstilosBicicleta();
  removeEstilosCarroEletrico();
  removeEstilosOnibus();
  removeEstilosCaminhada();
}

export {loopSpritesPassarinho, loopSpritesCereja, loopSpritesPowerupCarroEletrico, loopSpritesPomba, setJogoEmExecucao, jogoEmExecucao, intervaloChecarColisaoObstaculo, intervaloChecarColisaoPowerup, intervaloChecarColisaoPontosExtras, intervaloPontuacao, areaJogo};

