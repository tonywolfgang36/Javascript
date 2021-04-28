const btn = document.getElementById("btnLaunch");
btn.addEventListener("click", ventas);

function ventas(){
    let ventas = Number(prompt("¿Cuántas ventas se hicieron en el día?"));
    let totalVenta = 0;
    let menor500 = 0;
    let mayor500 = 0;
    let mayor1000 = 0;

    for(let i=1;i<=ventas;i++){
        let valorVenta = Number(prompt(`¿Cuánto se vendió en la venta #${i}?`));
        totalVenta += valorVenta;

        if(valorVenta>=1&&valorVenta<500){
            menor500++;
        } else if(valorVenta>=500&&valorVenta<=1000){
            mayor500++;
        } else if(valorVenta>1000){
            mayor1000++;
        } else {
            alert("No ingrese número negativos o 0.");
        }

    }

    let show = document.getElementById("show");
    show.innerHTML = `El número total te ventas menores o iguales a 500 es: ${menor500}<br>
                        El número total de ventas menores a 1000 y mayor que 500 es: ${mayor500}<br>
                           El número total de ventas mayores a 1000 es: ${mayor1000}<br>
                               El número total de ventas es: ${totalVenta}`;
}