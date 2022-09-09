const player = document.querySelector(".player");
const obstaculo1 = document.querySelector(".obstaculocarro");
const buttonStart = document.getElementById("buttonStart");

var auxPulo = 0;

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
let intervalo

buttonStart.addEventListener("click", () => {
  obstaculo1.style.left = "auto";
  obstaculo1.style.right = "-5%";
  obstaculo1.style.animation = "carroparado linear infinite 2s";
  console.log("a")

  auxPulo = 0;
  player.style.bottom = '0px';
  player.classList.remove("pula");
  intervalo = setInterval(colisao, 10);
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
    auxPulo = 1;
    
    clearInterval(intervalo);
  }
}
