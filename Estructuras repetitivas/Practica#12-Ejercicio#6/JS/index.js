const btn = document.getElementById("btnLaunch");
btn.addEventListener("click", producto);

function producto(){
    
    let pagoIncrementado = 10;
    let pagoTotal = 0;
    let acumuladorDePagos = "";

    for(let i=1;i<=20;i++){
        pagoTotal += pagoIncrementado;
        acumuladorDePagos += `<li class="list-group-item">La cantidad que deberá pagar en el mes #${i} es de: ${pagoIncrementado}</li>`;
        pagoIncrementado = pagoIncrementado * 2;

    }

    let showList = document.getElementById("showList");
    showList.innerHTML = acumuladorDePagos;

    let show = document.getElementById("show");
    show.innerHTML = `La cantidad total de pago es: $${pagoTotal}.`;
}