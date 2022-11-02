/* Mostrar popUp de feedback */

let botaoMostrarPopUpFeedback = document.querySelector(".mostrarPopUpFeedback") ;
let popUpFeedback = document.querySelector(".feedbackPopUp");
let popUpRestart = document.querySelector(".popUp");

botaoMostrarPopUpFeedback.addEventListener("click", () => {
    popUpFeedback.style.display = "flex";
    popUpRestart.style.display = "none";
    botaoMostrarPopUpFeedback.style.display = "none";
})

/* Handle form submit */

var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();  
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  })

  popUpRestart.style.display = "flex";
  popUpFeedback.style.display = "none"
}
form.addEventListener("submit", handleSubmit)

export { botaoMostrarPopUpFeedback }