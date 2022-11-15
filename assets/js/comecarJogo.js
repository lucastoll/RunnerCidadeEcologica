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
import { setPosicaoPlayerLeft } from "./player/movimentacao.js";
import { arrayPontosExtras, colisorPontosExtras } from "./pontosExtras/colisorPontosExtras.js";
import { randomizerPontosExtras } from "./pontosExtras/randomizerPontosExtras.js";
import { spritesPassarinho, spritesPomba } from "./obstaculos/spritesObstaculos.js";
import { spritesCereja } from "./pontosExtras/cereja.js";
import { resetPowerUpMessage } from "./mensagemPosGameOver.js";
import { getRandomInt } from "./auxiliares/getRandomInt.js";


const buttonComecarJogo = document.querySelectorAll(".buttonStart");
const buttonMenuInicialComecarJogo = document.querySelector(".buttonMenu");
const buttonMenuInicialTutorial = document.querySelector(".popUpTutorialButton");

const popUpTutorial = document.querySelector(".containerPopUpTutorial");

const menu = document.querySelector(".menu");
const areaJogo = document.querySelector(".areajogo1");

var jogoEmExecucao = false;
let intervaloChecarColisaoObstaculo, intervaloChecarColisaoPowerup, intervaloChecarColisaoPontosExtras, intervaloPontuacao
let loopSpritesPomba, loopSpritesPowerupCarroEletrico, loopSpritesCereja, loopSpritesPassarinho;

let timeoutInicialPowerUp, timeoutInicialObstaculos, timeoutInicialPontosExtras; 

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

  // Reseta posição dos objetos
  limpaSprites();
  colocaNuvensSujasAoReiniciarJogo();
  removeEstilosPowerup();
  iniciaNuvens();
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
  player.classList.remove("pula");
  player.style = "";
  setPosicaoPlayerLeft(40);

  // Tira popUp
  popUp.style.display = "none";
  document.querySelector(".buttonPopUp").disabled = true;
  // Coloca animação na area de jogo
  areaJogo.style.animation = "backgroundCarro 500s infinite linear, backgroundCarro 500s infinite linear";
  // Reseta pontuação
  ResetaPontos();
  resetPowerUpMessage();

  // Começa os intervalos de checagem de colisão;
  intervaloChecarColisaoObstaculo = setInterval(colisorObstaculos, 10);
  intervaloChecarColisaoPontosExtras = setInterval(colisorPontosExtras, 10)
  intervaloChecarColisaoPowerup = setInterval(colisorPowerup, 10)
  intervaloPontuacao = setInterval(Marcaponto, 2000);
  // Comeca os intervalos de randomizer
  timeoutInicialPowerUp = setTimeout(randomizerPowerups, getRandomInt(6000, 16000));
  timeoutInicialObstaculos = setTimeout(randomizerObstaculos, 2000);
  timeoutInicialPontosExtras = setTimeout(randomizerPontosExtras, getRandomInt(3000, 20000));
  // Comeca os intervalos de sprites
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



export {timeoutInicialObstaculos, timeoutInicialPowerUp, timeoutInicialPontosExtras, loopSpritesPassarinho, loopSpritesCereja, loopSpritesPowerupCarroEletrico, loopSpritesPomba, setJogoEmExecucao, jogoEmExecucao, intervaloChecarColisaoObstaculo, intervaloChecarColisaoPowerup, intervaloChecarColisaoPontosExtras, intervaloPontuacao, areaJogo};

