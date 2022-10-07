import { player } from "../colisorObstaculos.js";

const playerWalking2 = document.querySelector(".playerWalking--2");
const playerWalking3 = document.querySelector(".playerWalking--3");
const playerWalking4 = document.querySelector(".playerWalking--4");
const playerWalking5 = document.querySelector(".playerWalking--5");

const arrayPlayerWalking = [playerWalking2, playerWalking3, playerWalking4, playerWalking5];

let spriteAtual = 0;


const c = setInterval(() => {
    if(spriteAtual == 4){
        spriteAtual = 0;
    }
    if(spriteAtual == 0){
        arrayPlayerWalking[3].style.display = "none";
    }
    else{
        arrayPlayerWalking[spriteAtual - 1].style.display = "none";
    }
    arrayPlayerWalking[spriteAtual++].style.display = "block";

}, 250); 

	/* 
	1 = background-size: 100% 100%;
	2 = background-size: 80% 100%;
	3 = background-size: 75% 100%;
	4 = background-size: 70% 100%;
	5 = background-size: 80% 100%;
	*/