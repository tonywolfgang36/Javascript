const btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", km);

function km(){

    let budget = Number(document.getElementById("budget").value);
    let finalFee = 2;

    const showResult = document.getElementById("resultado");

    let mexico = 750 * finalFee;
    let pv = 800 * finalFee;
    let acapulco = 1200 * finalFee;
    let cancun =  1800 * finalFee;

    if(budget==0||budget==""||budget<0){
        alert("Por favor ingrese un valor diferene");
        return;
    }

    if(budget<mexico){
        showResult.innerHTML =  `QUEDESE EN SU CASA, HAY COVI ;)`
    } else if(budget>=mexico&&budget<pv){
        showResult.innerHTML =  `USTED PUEDE VIAJAR A MEXICO :)`;
    } else if(budget>=pv&&budget<acapulco){
        showResult.innerHTML =  `USTED PUEDE VIAJAR A PUERTO VALLARTA :)`;
    } else if(budget>=acapulco&&budget<cancun){
        showResult.innerHTML =  `USTED PUEDE VIAJAR A ACAPULCO :)`;
    } else if(budget>=cancun){
        showResult.innerHTML =  `USTED PUEDE VIAJAR A CANCUN Y A DONDE QUIERA :)`;
    }

}