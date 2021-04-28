const btn = document.getElementById("btnLaunch");
btn.addEventListener("click", salario);

function salario(){

    let ahorro = 0.03;
    let acumuladorAhorro = "";
    let acumuladorAhorroFinal = "";

   for(let i=1;i<=365;i++){

        acumuladorAhorro += `<li class="list-group-item">El ahorro actual es de $${ahorro} dia #${i}</li>`
        ahorro = (ahorro * 3).toFixed(2);
        acumuladorAhorroFinal = `<li class="list-group-item">El ahorro final es $${ahorro}</li>`


   }

   let showList = document.getElementById("showList");
   showList.innerHTML = `${acumuladorAhorro}<br>
                            ${acumuladorAhorroFinal}`;
   
    
}
