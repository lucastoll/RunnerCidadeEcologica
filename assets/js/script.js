const player = document.querySelector(".player");
const obstaculo1 = document.querySelector(".obstaculocarro");
const buttonStart = document.querySelectorAll(".buttonStart");
const buttonMenu = document.querySelector(".buttonMenu");
const menu = document.querySelector(".menu");
const areajogo1 = document.querySelector(".areajogo1");
const popUp = document.querySelector(".containerPopUpRestart");

console.log(buttonStart)

var auxPulo = 0;
var auxStart;

/* Define a ação para quando ele teclar a tecla W */

const pular = () => {
  player.classList.add("pula");
  setTimeout(() => {
    player.classList.remove("pula");
    auxPulo = 0;
  }, 1000);
};

document.addEventListener("keydown", (event) => {
  var tecla = event.key;
  console.log(auxPulo)

  if (tecla === "w" && auxPulo === 0) {
    auxPulo = 1;
    pular();
  }
});

/* Define a colisão e condição de parada */
let intervalo, intervaloPulo;

buttonMenu.addEventListener("click", () => {
  menu.style.display = "none";
  areajogo1.style.display = "block";
})

buttonStart.forEach((button, index) => {
  button.addEventListener('click', () => {
    popUp.style.display = "none";
    obstaculo1.style.left = "auto";
    obstaculo1.style.right = "-5%";
    obstaculo1.style.animation = "carroparado linear infinite 2s";
  
    auxPulo = 0;
    auxStart = true;
    player.classList.remove("pula");
    player.style.bottom = '0px';
    intervalo = setInterval(colisao, 1);
    clearInterval(intervaloPulo);
  })
})



function colisao(){
  const posicaocarro = obstaculo1.offsetLeft;
  const posicaoplayer = window.getComputedStyle(player).bottom.replace("px", "");

  console.log(`Posição obstaculo = ${posicaocarro}, posicao player = ${posicaoplayer}`);
  if (posicaocarro <= 97 && posicaocarro > 0 && posicaoplayer < 50) {
    obstaculo1.style.animation = "none";
    obstaculo1.style.left = `${posicaocarro}px`;
    player.style.animation = "none";
    player.classList.remove("pula");
    player.style.bottom = `${posicaoplayer}px`;
    popUp.style.display = "flex";
    auxStart = false;
    
    intervaloPulo = setInterval(manterAuxPuloFalse, 50);
    clearInterval(intervalo);
  }
}

function manterAuxPuloFalse(){
  auxPulo = 1;
}
