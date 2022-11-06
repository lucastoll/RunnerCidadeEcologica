import { jogoEmExecucao } from "../comecarJogo.js";

const spritePomba00 = document.querySelector(".pomba00");
const spritePomba01 = document.querySelector(".pomba01");
const spritePomba02 = document.querySelector(".pomba02");
const spritePomba03 = document.querySelector(".pomba03");

let contadorSpritePomba = 0;

function spritesPomba(){
    if(jogoEmExecucao){
        if(contadorSpritePomba == 0){
         spritePomba03.style.display = "none"
         spritePomba00.style.display = "block";
         contadorSpritePomba++;
        }
        else if(contadorSpritePomba == 1){
         spritePomba00.style.display = "none"
         spritePomba01.style.display = "block";
         contadorSpritePomba++;
        }
        else if(contadorSpritePomba == 2){
         spritePomba01.style.display = "none"
         spritePomba02.style.display = "block";
         contadorSpritePomba++;
        }
        else if(contadorSpritePomba == 3){
         spritePomba02.style.display = "none"
         spritePomba03.style.display = "block";
         contadorSpritePomba = 0;
        }
     }
}




export { spritesPomba }