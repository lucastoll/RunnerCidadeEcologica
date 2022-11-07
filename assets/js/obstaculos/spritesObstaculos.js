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

const spritePassarinho00 = document.querySelector(".passarinho00");
const spritePassarinho01 = document.querySelector(".passarinho01");
const spritePassarinho02 = document.querySelector(".passarinho02");
const spritePassarinho03 = document.querySelector(".passarinho03");

let contadorSpritePassarinho = 0;

function spritesPassarinho(){
    if(jogoEmExecucao){
        if(contadorSpritePassarinho==0){
            spritePassarinho03.style.display = "none"
            spritePassarinho00.style.display = "block";
            contadorSpritePassarinho++;
        }
        else if(contadorSpritePassarinho == 1){
            spritePassarinho00.style.display = "none"
            spritePassarinho01.style.display = "block";
            contadorSpritePassarinho++;
        }
        else if(contadorSpritePassarinho == 2){
            spritePassarinho01.style.display = "none"
            spritePassarinho02.style.display = "block";
            contadorSpritePassarinho++;
        }
        else if(contadorSpritePomba == 3){
            spritePassarinho02.style.display = "none"
            spritePassarinho03.style.display = "block";
            contadorSpritePassarinho = 0;
        }
    }
}




export { spritesPomba, spritesPassarinho }