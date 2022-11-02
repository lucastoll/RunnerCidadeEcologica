let containerPopUp = document.querySelector(".containerPopUpCreditos");

document.querySelector(".buttonCreditos").addEventListener("click", () => {
    containerPopUp.style.display = "flex";
})

containerPopUp.addEventListener('click', (e) => {
    console.log(e.target.id)
    if(e.target.id != 'popUpCreditosLink'){
        containerPopUp.style.display = "none";
    }
    
})