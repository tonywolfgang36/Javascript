const btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", sanvalentin);

function sanvalentin(){

    let budget = Number(document.getElementById("budget").value);
    let show = document.getElementById("resultado");

    if(budget<=10&&budget>0){
        show.innerHTML = `Usted puede comprar una tarjeta`;
    } else if(budget>=11&&budget<=100){
        show.innerHTML = `Usted puede comprar chocolates`;
    } else if(budget>=101&&budget<=250){
        show.innerHTML = `Usted puede comprar Flores`;
    } else {
        show.innerHTML = `Usted puede comprar un anillo`;
    }
}