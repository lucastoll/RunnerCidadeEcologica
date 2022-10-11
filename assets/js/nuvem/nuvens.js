const arrayNuvensPoluidasBack = document.querySelector(".nuvens__poluidas__back").children;
const arrayNuvensLimpasBack = document.querySelector(".nuvens__limpas__back").children;
const arrayNuvensPoluidasFront = document.querySelector(".nuvens__poluidas__front").children;
const arrayNuvensLimpasFront = document.querySelector(".nuvens__limpas__front").children;

function iniciaNuvens(){
    setTimeout(() => {
        arrayNuvensPoluidasBack[0].style.animation = "animacaoNuvem 50s infinite linear";
        arrayNuvensLimpasBack[0].style.animation = "animacaoNuvem 50s infinite linear";
    }, 50000);

    setTimeout(() => {
        arrayNuvensPoluidasFront[0].style.animation = "animacaoNuvem 20s infinite linear";
        arrayNuvensLimpasFront[0].style.animation = "animacaoNuvem 20s infinite linear";
    }, 20000);

    setTimeout(() => {
        arrayNuvensPoluidasBack[1].style.animation = "animacaoNuvem 45s infinite linear";
        arrayNuvensLimpasBack[1].style.animation = "animacaoNuvem 45s infinite linear";
    }, 45000);

    setTimeout(() => {
        arrayNuvensPoluidasFront[1].style.animation = "animacaoNuvem 25s infinite linear";
        arrayNuvensLimpasFront[1].style.animation = "animacaoNuvem 25s infinite linear";
    }, 25000);

    setTimeout(() => {
        arrayNuvensPoluidasBack[2].style.animation = "animacaoNuvem 55s infinite linear";
        arrayNuvensLimpasBack[2].style.animation = "animacaoNuvem 55s infinite linear";
    }, 55000);

    setTimeout(() => {
        arrayNuvensPoluidasFront[2].style.animation = "animacaoNuvem 30s infinite linear";
        arrayNuvensLimpasFront[2].style.animation = "animacaoNuvem 30s infinite linear";
    }, 30000);

    setTimeout(() => {
        arrayNuvensPoluidasBack[3].style.animation = "animacaoNuvem 51s infinite linear";
        arrayNuvensLimpasBack[3].style.animation = "animacaoNuvem 51s infinite linear";
    }, 51000);

    setTimeout(() => {
        arrayNuvensPoluidasFront[3].style.animation = "animacaoNuvem 20s infinite linear";
        arrayNuvensLimpasFront[3].style.animation = "animacaoNuvem 20s infinite linear";
    }, 20000);

    setTimeout(() => {
        arrayNuvensPoluidasBack[4].style.animation = "animacaoNuvem 60s infinite linear";
        arrayNuvensLimpasBack[4].style.animation = "animacaoNuvem 60s infinite linear";
    }, 60000);

    setTimeout(() => {
        arrayNuvensPoluidasFront[4].style.animation = "animacaoNuvem 23s infinite linear";
        arrayNuvensLimpasFront[4].style.animation = "animacaoNuvem 23s infinite linear";
    }, 23000);

    setTimeout(() => {
        arrayNuvensPoluidasBack[5].style.animation = "animacaoNuvem 40s infinite linear";
        arrayNuvensLimpasBack[5].style.animation = "animacaoNuvem 40s infinite linear";
    }, 40000);

    setTimeout(() => {
        arrayNuvensPoluidasFront[5].style.animation = "animacaoNuvem 20s infinite linear";
        arrayNuvensLimpasFront[5].style.animation = "animacaoNuvem 20s infinite linear";
    }, 20000);

    setTimeout(() => {
        arrayNuvensPoluidasBack[6].style.animation = "animacaoNuvem 46s infinite linear";
        arrayNuvensLimpasBack[6].style.animation = "animacaoNuvem 46s infinite linear";
    }, 46000);

    setTimeout(() => {
        arrayNuvensPoluidasFront[6].style.animation = "animacaoNuvem 29s infinite linear";
        arrayNuvensLimpasFront[6].style.animation = "animacaoNuvem 29s infinite linear";
    }, 29000);

    setTimeout(() => {
        arrayNuvensPoluidasBack[7].style.animation = "animacaoNuvem 50s infinite linear";
        arrayNuvensLimpasBack[7].style.animation = "animacaoNuvem 50s infinite linear";
    }, 50000);

    setTimeout(() => {
        arrayNuvensPoluidasFront[7].style.animation = "animacaoNuvem 50s infinite linear";
        arrayNuvensLimpasFront[7].style.animation = "animacaoNuvem 50s infinite linear";
    }, 30000);
}

function animacaoNuvemPoluidaParaNuvemLimpa(){
    for(let i=0; i < arrayNuvensLimpasBack.length; i++){
        arrayNuvensPoluidasBack[i].style.visibility = "hidden";
        arrayNuvensPoluidasFront[i].style.visibility = "hidden";
        
        arrayNuvensLimpasBack[i].style.visibility = "visible";
        arrayNuvensLimpasFront[i].style.visibility = "visible";
    }

    setTimeout(() => {
        for(let i=0; i < arrayNuvensLimpasBack.length; i++){
            arrayNuvensPoluidasBack[i].style.visibility = "visible";
            arrayNuvensPoluidasFront[i].style.visibility = "visible";
            
            arrayNuvensLimpasBack[i].style.visibility = "hidden";
            arrayNuvensLimpasFront[i].style.visibility = "hidden";
        }
    }, 500)

    setTimeout(() => {
        for(let i=0; i < arrayNuvensLimpasBack.length; i++){
            arrayNuvensPoluidasBack[i].style.visibility = "hidden";
            arrayNuvensPoluidasFront[i].style.visibility = "hidden";
            
            arrayNuvensLimpasBack[i].style.visibility = "visible";
            arrayNuvensLimpasFront[i].style.visibility = "visible";
        }
    }, 1000)

    setTimeout(() => {
        for(let i=0; i < arrayNuvensLimpasBack.length; i++){
            arrayNuvensPoluidasBack[i].style.visibility = "visible";
            arrayNuvensPoluidasFront[i].style.visibility = "visible";
            
            arrayNuvensLimpasBack[i].style.visibility = "hidden";
            arrayNuvensLimpasFront[i].style.visibility = "hidden";
        }
    }, 1500)

    setTimeout(() => {
        for(let i=0; i < arrayNuvensLimpasBack.length; i++){
            arrayNuvensPoluidasBack[i].style.visibility = "hidden";
            arrayNuvensPoluidasFront[i].style.visibility = "hidden";
            
            arrayNuvensLimpasBack[i].style.visibility = "visible";
            arrayNuvensLimpasFront[i].style.visibility = "visible";
        }
    }, 2000)

    setTimeout(() => {
        for(let i=0; i < arrayNuvensLimpasBack.length; i++){
            arrayNuvensPoluidasBack[i].style.visibility = "visible";
            arrayNuvensPoluidasFront[i].style.visibility = "visible";
            
            arrayNuvensLimpasBack[i].style.visibility = "hidden";
            arrayNuvensLimpasFront[i].style.visibility = "hidden";
        }
    }, 2500)

    setTimeout(() => {
        for(let i=0; i < arrayNuvensLimpasBack.length; i++){
            arrayNuvensPoluidasBack[i].style.visibility = "hidden";
            arrayNuvensPoluidasFront[i].style.visibility = "hidden";
            
            arrayNuvensLimpasBack[i].style.visibility = "visible";
            arrayNuvensLimpasFront[i].style.visibility = "visible";
        }
    }, 3000)
}

function animacaoNuvemLimpaParaNuvemPoluida(){
    for(let i=0; i < arrayNuvensLimpasBack.length; i++){
        arrayNuvensPoluidasBack[i].style.visibility = "visible";
        arrayNuvensPoluidasFront[i].style.visibility = "visible";
        
        arrayNuvensLimpasBack[i].style.visibility = "hidden";
        arrayNuvensLimpasFront[i].style.visibility = "hidden";
    }

    setTimeout(() => {
        for(let i=0; i < arrayNuvensLimpasBack.length; i++){
            arrayNuvensPoluidasBack[i].style.visibility = "hidden";
            arrayNuvensPoluidasFront[i].style.visibility = "hidden";
            
            arrayNuvensLimpasBack[i].style.visibility = "visible";
            arrayNuvensLimpasFront[i].style.visibility = "visible";
        }
    }, 500)

    setTimeout(() => {
        for(let i=0; i < arrayNuvensLimpasBack.length; i++){
            arrayNuvensPoluidasBack[i].style.visibility = "visible";
            arrayNuvensPoluidasFront[i].style.visibility = "visible";
            
            arrayNuvensLimpasBack[i].style.visibility = "hidden";
            arrayNuvensLimpasFront[i].style.visibility = "hidden";
        }
    }, 1000)

    setTimeout(() => {
        for(let i=0; i < arrayNuvensLimpasBack.length; i++){
            arrayNuvensPoluidasBack[i].style.visibility = "hidden";
            arrayNuvensPoluidasFront[i].style.visibility = "hidden";
            
            arrayNuvensLimpasBack[i].style.visibility = "visible";
            arrayNuvensLimpasFront[i].style.visibility = "visible";
        }
    }, 1500)

    setTimeout(() => {
        for(let i=0; i < arrayNuvensLimpasBack.length; i++){
            arrayNuvensPoluidasBack[i].style.visibility = "visible";
            arrayNuvensPoluidasFront[i].style.visibility = "visible";
            
            arrayNuvensLimpasBack[i].style.visibility = "hidden";
            arrayNuvensLimpasFront[i].style.visibility = "hidden";
        }
    }, 2000)

    setTimeout(() => {
        for(let i=0; i < arrayNuvensLimpasBack.length; i++){
            arrayNuvensPoluidasBack[i].style.visibility = "hidden";
            arrayNuvensPoluidasFront[i].style.visibility = "hidden";
            
            arrayNuvensLimpasBack[i].style.visibility = "visible";
            arrayNuvensLimpasFront[i].style.visibility = "visible";
        }
    }, 2500)


    setTimeout(() => {
        for(let i=0; i < arrayNuvensLimpasBack.length; i++){
            arrayNuvensPoluidasBack[i].style.visibility = "visible";
            arrayNuvensPoluidasFront[i].style.visibility = "visible";
            
            arrayNuvensLimpasBack[i].style.visibility = "hidden";
            arrayNuvensLimpasFront[i].style.visibility = "hidden";
        }
    }, 3000)
}

function colocaNuvensSujasAoReiniciarJogo(){
    for(let i=0; i < arrayNuvensLimpasBack.length; i++){
        arrayNuvensPoluidasBack[i].style.visibility = "visible";
        arrayNuvensPoluidasFront[i].style.visibility = "visible";
        
        arrayNuvensLimpasBack[i].style.visibility = "hidden";
        arrayNuvensLimpasFront[i].style.visibility = "hidden";
    }
}

export { iniciaNuvens, arrayNuvensLimpasBack, arrayNuvensLimpasFront, arrayNuvensPoluidasBack, arrayNuvensPoluidasFront, animacaoNuvemPoluidaParaNuvemLimpa, animacaoNuvemLimpaParaNuvemPoluida, colocaNuvensSujasAoReiniciarJogo }