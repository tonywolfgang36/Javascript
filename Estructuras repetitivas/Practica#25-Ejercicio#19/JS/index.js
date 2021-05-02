const btn = document.getElementById("btnLaunch");
btn.addEventListener("click", serie2y3);


function serie2y3(){

    let numeros = 2;
    let flag = false;
    let acumuladorDeEtiquetas = "";
    
    while(numeros!=1800){
        
        if(flag){
            numeros += 2;
            acumuladorDeEtiquetas += `<li class="list-group-item">${numeros}</li>`;
            flag=false;
        } else{
            numeros+= 3;
            acumuladorDeEtiquetas += `<li class="list-group-item">${numeros}</li>`;
            flag=true;
        }

    }

    const showList = document.getElementById("showList");
    showList.innerHTML = acumuladorDeEtiquetas;

}