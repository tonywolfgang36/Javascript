const btn = document.getElementById("btnLaunch");
btn.addEventListener("click", ULAM);


function ULAM(){

    let numero = Number(prompt("Ingrese un número positivo"));
    let acumuladorSerie = "";

    while(numero!=1){

        if(numero%2==0){
            acumuladorSerie += `<li class="list-group-item">${numero} </li>`;
            numero = numero / 2;
        } else {
            acumuladorSerie += `<li class="list-group-item">${numero} </li>`;
            numero = (numero * 3) + 1;        
        }

    }

    let showList = document.getElementById("showList");
    showList.innerHTML = acumuladorSerie;
}