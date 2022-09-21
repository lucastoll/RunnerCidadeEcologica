import setPlayerPodePular  from "./pulo.js";
import {player, obstaculoUm, obstaculoaereoum, colisao, popUp} from "./colisao.js"
import {Marcaponto, ResetaPontos} from "./ponto.js";

const buttonComecarJogo = document.querySelectorAll(".buttonStart");
const buttonMenuInicial = document.querySelector(".buttonMenu");

const menu = document.querySelector(".menu");
const areaJogo = document.querySelector(".areajogo1");

var jogoEmExecucao = false;
let intervaloChecarColisao;
let intervaloPontuacao;
let qualobstaculo;

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
  qualobstaculo=Math.random();
  popUp.style.display = "none";
  //if(qualobstaculo==0){
  obstaculoUm.style.left = "auto";
  obstaculoUm.style.right = "-5%";
  obstaculoUm.style.animation = "carroparado linear infinte 2s";
  //}
  /*else{
  obstaculoaereoum.style.left = "auto";
  obstaculoaereoum.style.right = "-5%";
  obstaculoaereoum.style.animation = "carroparado linear 2s";
  }*/
  

  setPlayerPodePular(true);
  jogoEmExecucao = true;
  player.classList.remove("pula");
  player.style.bottom = '0px';
  ResetaPontos();
  intervaloChecarColisao = setInterval(colisao, 10);
  intervaloPontuacao= setInterval(Marcaponto, 2000);
}

function setJogoEmExecucao(value) {
    jogoEmExecucao = value; 
}

export {setJogoEmExecucao, jogoEmExecucao, intervaloChecarColisao, intervaloPontuacao};

