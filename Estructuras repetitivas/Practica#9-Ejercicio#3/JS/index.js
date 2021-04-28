const btn = document.getElementById("btnLaunch");
btn.addEventListener("click", work);


function work(){
    
    let horasDiarias = "";
    let horasTotal = 0;
    let total = 0;
    
        
            for(let i=1;i<=6;i++){

                let horas = Number(prompt("Ingrese la cantidad de horas que trabajó"));

                if(isNaN(horas)||horas<=0){
                    alert("Ingresar un valor valido");
                    return;

                } else {
                total += horas * 25;
                horasTotal += horas;
                horasDiarias += `<li class="list-group-item">El día ${i} trabajó ${horas} horas.</li>`;
                }
    }

    const lasHoras = document.getElementById("showList");
    lasHoras.innerHTML = horasDiarias;

    const show = document.getElementById("show");
    show.innerHTML = `$25 pesos por hora,<br>
                        El pago total es de: ${total}<br>
                        El total de horas es de: ${horasTotal}`;  

}