const btn = document.getElementById("btnLaunch");
btn.addEventListener("click", imprimirNumeros);

function imprimirNumeros(){
  
    let resultadoAcumulado = "";
    for(let i=0;i<=100;i++){
        if(i%2==0){
            resultadoAcumulado+= `<li class="list-group-item">El número ${i} es par.</li>`;
        } 
    }

    const show = document.getElementById("show");
    show.innerHTML = resultadoAcumulado;  
}