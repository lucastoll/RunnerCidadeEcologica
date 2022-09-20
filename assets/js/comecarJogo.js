import setPlayerPodePular  from "./pulo.js";
import {player, obstaculoUm, colisao, popUp} from "./colisao.js"

const buttonComecarJogo = document.querySelectorAll(".buttonStart");
const buttonMenuInicial = document.querySelector(".buttonMenu");

const menu = document.querySelector(".menu");
const areaJogo = document.querySelector(".areajogo1");

var jogoEmExecucao = false;
let intervaloChecarColisao;

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
  popUp.style.display = "none";
  obstaculoUm.style.left = "auto";
  obstaculoUm.style.right = "-5%";
  obstaculoUm.style.animation = "carroparado linear infinite 2s";

  setPlayerPodePular(true);
  jogoEmExecucao = true;
  player.classList.remove("pula");
  player.style.bottom = '0px';
  intervaloChecarColisao = setInterval(colisao, 10);
}

function setJogoEmExecucao(value) {
    jogoEmExecucao = value; 
}

export {setJogoEmExecucao, jogoEmExecucao, intervaloChecarColisao};

