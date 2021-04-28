const btn = document.getElementById("btnLaunch");
btn.addEventListener("click", imprimirNumeros);

function imprimirNumeros(){
  
    let resultadoAcumulado = "";

    for(let i=100;i>=0;i--){

        resultadoAcumulado += `<li class="list-group-item">${i}</li>`;

    }

    const show = document.getElementById("show");
    show.innerHTML = resultadoAcumulado;
}