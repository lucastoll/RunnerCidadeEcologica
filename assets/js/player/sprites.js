import { jogoEmExecucao } from "../comecarJogo.js";
import { player } from "../obstaculos/colisorObstaculos.js";
import { animacaoPowerupRodando, playerTemPowerUp } from "../powerUps/animacaoPowerup.js";
import { playerTemBicicleta } from "../powerUps/bicicleta.js";
import { playerTemCaminhada } from "../powerUps/caminhada.js";
import { playerTemCarroEletrico } from "../powerUps/carroEletrico.js";
import { playerTemOnibus } from "../powerUps/onibus.js";

const loopSpritesPlayer = setInterval(() => {
    if(jogoEmExecucao){
        if(playerTemPowerUp == false){
            spritesPlayerCarro();
        }
        else if(playerTemBicicleta){
            spritesPlayerBicicleta();
        }
        else if(playerTemOnibus){
            spritesPlayerOnibus();
        }
        else if(playerTemCarroEletrico){
            spritesPlayerCarroEletrico();
        }
        else if(playerTemCaminhada){
            spritesPlayerAndando();
        }
    }
}, 250); 

const spriteBicicleta1 = document.querySelector(".bicicleta--1");
const spriteBicicleta2 = document.querySelector(".bicicleta--2");
const spriteBicicleta3 = document.querySelector(".bicicleta--3");
const spriteBicicleta4 = document.querySelector(".bicicleta--4");

const arraySpriteBicicleta = [spriteBicicleta1, spriteBicicleta2, spriteBicicleta3, spriteBicicleta4];
let spriteBicileta = 0;

function spritesPlayerBicicleta(){
    player.classList.add("bicicleta");
    if(spriteBicileta == 4){
        spriteBicileta = 0;
    }
    if(spriteBicileta == 0){
        arraySpriteBicicleta[3].style.display = "none";
    }
    else{
        arraySpriteBicicleta[spriteBicileta - 1].style.display = "none";
    }
    arraySpriteBicicleta[spriteBicileta++].style.display = "block";
}

const spriteOnibus1 = document.querySelector(".onibus--1");
const spriteOnibus2 = document.querySelector(".onibus--2");

const arraySpriteOnibus = [spriteOnibus1, spriteOnibus2];
let spriteOnibus = 0;

function spritesPlayerOnibus(){
    player.classList.add("onibus");
    if(spriteOnibus == 1){
        spriteOnibus = 0;
    }
    if(spriteOnibus == 0){
        arraySpriteOnibus[1].style.display = "none";
    }
    else{
        arraySpriteOnibus[spriteOnibus - 1].style.display = "none";
    }
    arraySpriteOnibus[spriteOnibus++].style.display = "block";
}

const spriteCarroEletrico1 = document.querySelector(".carroEletrico--1");
const spriteCarroEletrico2 = document.querySelector(".carroEletrico--2");
const spriteCarroEletrico3 = document.querySelector(".carroEletrico--3");
const arraySpriteCarroEletrico = [spriteCarroEletrico1, spriteCarroEletrico2, spriteCarroEletrico3];
let spriteCarroEletrico = 0;

function spritesPlayerCarroEletrico(){
    player.classList.add("carro");
    if(spriteCarroEletrico == 3){
        spriteCarroEletrico = 0;
    }
    if(spriteCarroEletrico == 0){
        arraySpriteCarroEletrico[2].style.display = "none";
    }
    else{
        arraySpriteCarroEletrico[spriteCarroEletrico - 1].style.display = "none";
    }
    arraySpriteCarroEletrico[spriteCarroEletrico++].style.display = "block";
}

const spriteCarro1 = document.querySelector(".carro--1");
const spriteCarro2 = document.querySelector(".carro--2");
const spriteCarro3 = document.querySelector(".carro--3");
const spriteCarro4 = document.querySelector(".carro--4");

const arraySpriteCarro = [spriteCarro1, spriteCarro2, spriteCarro3, spriteCarro4];
let spriteCarro = 0;

function spritesPlayerCarro(){
    player.classList.add("carro");
    if(spriteCarro == 4){
        spriteCarro = 0;
    }
    if(spriteCarro == 0){
        arraySpriteCarro[3].style.display = "none";
    }
    else{
        arraySpriteCarro[spriteCarro - 1].style.display = "none";
    }
    arraySpriteCarro[spriteCarro++].style.display = "block";
}

const playerWalking1 = document.querySelector(".playerWalking--1");
const playerWalking2 = document.querySelector(".playerWalking--2");
const playerWalking3 = document.querySelector(".playerWalking--3");
const playerWalking4 = document.querySelector(".playerWalking--4");
const playerWalking5 = document.querySelector(".playerWalking--5");

const arrayPlayerWalking = [playerWalking2, playerWalking3, playerWalking4, playerWalking5];

let spriteAndando = 0;

function spritesPlayerAndando(){
    if(animacaoPowerupRodando == false){
        playerWalking1.style.display = "none";
        if(spriteAndando == 4){
            spriteAndando = 0;
        }
        if(spriteAndando == 0){
            arrayPlayerWalking[3].style.display = "none";
        }
        else{
            arrayPlayerWalking[spriteAndando - 1].style.display = "none";
        }
        arrayPlayerWalking[spriteAndando++].style.display = "block";
    }
    else{
        for(let i=0; i < arrayPlayerWalking.length; i++){
            arrayPlayerWalking[i].style.display = "none"
        }
        playerWalking1.style.display = "block";
    }

}

function limpaSprites(){
    player.classList.remove("carro");
    player.classList.remove("bicicleta");
    player.classList.remove("onibus");

    playerWalking1.style.display = "none";
    for(let i=0; i < arrayPlayerWalking.length; i++){
        arrayPlayerWalking[i].style.display = "none"
    }
    for(let i=0; i < arraySpriteCarro.length; i++){
        arraySpriteCarro[i].style.display = "none"
    }
    for(let i=0; i < arraySpriteCarroEletrico.length; i++){
        arraySpriteCarroEletrico[i].style.display = "none"
    }
    for(let i=0; i < arraySpriteBicicleta.length; i++){
        arraySpriteBicicleta[i].style.display = "none"
    }
    for(let i=0; i < arraySpriteOnibus.length; i++){
        arraySpriteOnibus[i].style.display = "none"
    }
}

export { limpaSprites }