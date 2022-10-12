import { jogoEmExecucao } from "../comecarJogo.js";
import { player } from "../obstaculos/colisorObstaculos.js";
import { animacaoPowerupRodando } from "../powerUps/animacaoPowerup.js";


let posicaoPlayerLeft = 40;
let comprimentoPlayer = 133;

const executeMoves = () => {
    Object.keys(controller).forEach(key=> {
      controller[key].pressed && controller[key].func()
    })
}

setInterval(executeMoves, 20);

const controller = {
    68: {pressed: false, func: moveDireita}, //d 
    65: {pressed: false, func: moveEsquerda} //a
}

document.addEventListener("keydown", (e) => {
    if(controller[e.keyCode]){
        controller[e.keyCode].pressed = true
        console.log(e.keyCode, controller[e.keyCode].pressed)
    }
})

document.addEventListener("keyup", (e) => {
    if(controller[e.keyCode]){
      controller[e.keyCode].pressed = false
      console.log(e.keyCode, controller[e.keyCode].pressed)
    }
})


function moveEsquerda(){
    posicaoPlayerLeft = Number(window.getComputedStyle(player).left.replace("px", ""));
    comprimentoPlayer = Number(window.getComputedStyle(player).width.replace("px", ""));    

    if(jogoEmExecucao == true && animacaoPowerupRodando == false) {
        if(posicaoPlayerLeft > 0){
            posicaoPlayerLeft = posicaoPlayerLeft - 3;
        }
        player.style.left = `${posicaoPlayerLeft}px`;
     }
}

function moveDireita(){
    posicaoPlayerLeft = Number(window.getComputedStyle(player).left.replace("px", ""));
    comprimentoPlayer = Number(window.getComputedStyle(player).width.replace("px", ""));

    if(jogoEmExecucao == true && animacaoPowerupRodando == false) {
        if(posicaoPlayerLeft + comprimentoPlayer < window.innerWidth){
            posicaoPlayerLeft = posicaoPlayerLeft + 3;
        }
        player.style.left = `${posicaoPlayerLeft}px`;
     }
}

export { posicaoPlayerLeft, comprimentoPlayer };