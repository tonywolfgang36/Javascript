const btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", budget);

function budget(){

    let gBudget = Number(document.getElementById("budget").value);
    let A = Number(document.getElementById("art1").value);
    let B = Number(document.getElementById("art2").value);
    let C = Number(document.getElementById("art3").value);
    let D = Number(document.getElementById("art4").value);
    let fbudget = 0;

    let show = document.getElementById("resultado");

    fbudget = A + B + C + D;

    if(fbudget>gBudget){
        show.innerHTML = `El precio está fuera del presupuesto`;
    } else {
        show.innerHTML = `El precio está dentro del presupuesto`;
    }

}