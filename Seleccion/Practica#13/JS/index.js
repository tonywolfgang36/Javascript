const btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", grapes);

function grapes(){

    let size = document.getElementById("sltSize").value;
    let type = document.getElementById("sltType").value;
    let kg = 30;

    const show = document.getElementById("resultado");

    if(size=="1"&&type=="A"){
        kg = kg + 0.20;
    } else if(size=="1"&&type=="B"){
        kg = kg - 0.30;
    } else if(size=="2"&&type=="A"){
        kg = kg + 0.30;
    } else if(size=="2"&&type=="B"){
        kg = kg + 0.50;
    }

    show.innerHTML = `El precio final del kg de uva es: ${kg}`;

}