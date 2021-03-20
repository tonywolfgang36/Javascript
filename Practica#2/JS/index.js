//Entradas -> Son los datos que provee el usuario.
//Procesos -> Son las acciones que afectaran a las *Entradas.
//Salidas -> Es el resultado obtenido por los *Procesos previamente realizados.

let btnSumarObj = document.getElementById("btnSuma");
let btnRestaObj = document.getElementById("btnResta");
let btnTimesObj = document.getElementById("btnTimes");
let btnDivObj = document.getElementById("btnDiv");

btnSumarObj.addEventListener("click", showSuma);
btnRestaObj.addEventListener("click", showAddiction);
btnTimesObj.addEventListener("click", showTimes);
btnDivObj.addEventListener("click", showDiv);

function showSuma(){

    let numero1Obj = Number(document.getElementById("numero1").value); 
    let numero2Obj = Number(document.getElementById("numero2").value);
    
    let final_showSumar = numero1Obj + numero2Obj;

    let containerResultadoObj = document.getElementById("containerResponse");
    containerResultadoObj.innerText = final_showSumar;
}


function showAddiction(){

    let numero1RObj = Number(document.getElementById("numero1R").value); 
    let numero2RObj = Number(document.getElementById("numero2R").value);

    let final_showResta = numero1RObj - numero2RObj;

    let containerResultadoRObj = document.getElementById("containerResta");
    containerResultadoRObj.innerText = final_showResta;
}

function showTimes(){

    let numero1MObj = Number(document.getElementById("numero1M").value); 
    let numero2MObj = Number(document.getElementById("numero2M").value);

    let final_showTimes = numero1MObj*numero2MObj;

    let containerResultadoMObj = document.getElementById("containerTimes");
    containerResultadoMObj.innerText = final_showTimes;
}

function showDiv(){

    let numero1DObj = Number(document.getElementById("numero1D").value); 
    let numero2DObj = Number(document.getElementById("numero2D").value);

    let final_showDiv = numero1DObj / numero2DObj;

    let containerResultadoDObj = document.getElementById("containerDiv");
    containerResultadoDObj.innerText = final_showDiv;
}