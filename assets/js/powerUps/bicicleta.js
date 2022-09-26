import { animacaoPowerUp } from "./animacaoPowerup.js";

const powerUpBicicleta = document.querySelector(".powerUp--bicicleta");

function bicicleta(){
    powerUpBicicleta.style.animation = "none";
    powerUpBicicleta.style.right = "-10%";
    animacaoPowerUp();
}


export { bicicleta }