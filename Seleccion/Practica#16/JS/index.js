const btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", policy);

function policy(){

    let coverage = Number(document.getElementById("sltPoliza").value);
    let alhl = document.getElementById("sltAlcohol").value;
    let glasses = document.getElementById("sltLentes").value;
    let disease = document.getElementById("sltEnfermedad").value;
    let age = document.getElementById("sltEdad").value;
    let total = 0;

    const show = document.getElementById("resultado");

    if(alhl=="Si"&&glasses=="Si"&&disease=="Si"&&age=="Si"){
        total = coverage + (coverage*40)/100;
    } else if(alhl=="No"&&glasses=="Si"&&disease=="Si"&&age=="Si"){
        total = coverage + (coverage*30)/100;
    } else if(alhl=="Si"&&glasses=="No"&&disease=="Si"&&age=="Si"){
        total = coverage + (coverage*35)/100;
    } else if(alhl=="Si"&&glasses=="Si"&&disease=="No"&&age=="Si"){
        total = coverage + (coverage*35)/100;
    } else if(alhl=="Si"&&glasses=="Si"&&disease=="Si"&&age=="No"){
        total = coverage + (coverage*30)/100;
    } else if(alhl=="No"&&glasses=="No"&&disease=="Si"&&age=="Si"){
        total = coverage + (coverage*25)/100;
    } else if(alhl=="No"&&glasses=="No"&&disease=="No"&&age=="Si"){
        total = coverage + (coverage*20)/100;
    } else if(alhl=="No"&&glasses=="No"&&disease=="No"&&age=="No"){
        total = coverage + (coverage*10)/100;
    } else if(alhl=="Si"&&glasses=="No"&&disease=="No"&&age=="No"){
        total = coverage + (coverage*20)/100;
    } else if(alhl=="No"&&glasses=="Si"&&disease=="No"&&age=="No"){
        total = coverage + (coverage*15)/100;
    } else if(alhl=="No"&&glasses=="No"&&disease=="Si"&&age=="No"){
        total = coverage + (coverage*15)/100;
    } else if(alhl=="No"&&glasses=="No"&&disease=="No"&&age=="Si"){
        total = coverage + (coverage*20)/100;
    } else if(alhl=="No"&&glasses=="No"&&disease=="Si"&&age=="Si"){
        total = coverage + (coverage*25)/100;
    } else if(alhl=="Si"&&glasses=="Si"&&disease=="No"&&age=="No"){
        total = coverage + (coverage*15)/100;
    } else if(alhl=="Si"&&glasses=="No"&&disease=="No"&&age=="Si"){
        total = coverage + (coverage*25)/100;
    } else if(alhl=="No"&&glasses=="Si"&&disease=="Si"&&age=="No"){
        total = coverage + (coverage*30)/100;
    }
    

    show.innerHTML = `El total de su poliza es: $${total}`;
}

