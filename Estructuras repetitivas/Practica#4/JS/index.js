const btn = document.getElementById("btnLaunch");
btn.addEventListener("click", savings);

function savings(){

    let ahorroAcumulado = 0;
    let acumuladorEtiquetas = "";

    for(let i=1;i<=12;i++){

        let ahorroMensual = Number(prompt(`Ingrese el ahorro del mes ${i}`));
        ahorroAcumulado = ahorroAcumulado + ahorroMensual;
        acumuladorEtiquetas += `<li class="list-group-item">El ahorro acumulado en el mes ${i} 
        es: ${ahorroAcumulado}`;
        
    }
    const acumulacionMensual = document.getElementById("acumulacionMensual");
    acumulacionMensual.innerHTML = acumuladorEtiquetas;


    const show = document.getElementById("show");
    show.innerHTML = `El ahorro total final es: ${ahorroAcumulado}`;
}