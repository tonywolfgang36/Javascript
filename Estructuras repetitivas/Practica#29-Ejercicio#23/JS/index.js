const btn = document.getElementById("btnLaunch");
btn.addEventListener("click", tabla);


function tabla(){

    let n = Number(prompt("Ingrese un numero"));
    let acumuladorDeEtiquetas = "";

    if(isNaN(n)){
        alert("Solo ingresar valores numericos");

    } else if(n>10||n<0){
        alert("Ingrese solo numeros entre 1 - 10")

    } else {
        for(let i=1;i<=10;i++){
            acumuladorDeEtiquetas += `<li class="list-group-item">${n} x ${i} = ${i*n}</li>`;
        }
    }

    let showList = document.getElementById("showList");
    showList.innerHTML = acumuladorDeEtiquetas;
}