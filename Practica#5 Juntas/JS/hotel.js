const btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", showBill2);


function showBill2(){

    let Days = Number(document.getElementById("Days").value);
    let Hotel = Number(document.getElementById("Hotel").value);
    let Food = Number(document.getElementById("Food").value);

    let hotelFinal = Days * Hotel;
    let FoodFinal = Days * Food;
    let diario = Days * 100;
    let totalBill = hotelFinal + FoodFinal + diario;

    let showFinalBill = document.getElementById("resultado");
    showFinalBill.innerHTML  = `Hotel: ${hotelFinal}.<br>
                                Comida: ${FoodFinal}.<br>
                                Gastos diarios: ${diario}.<br>
                                <em>La cantidad total es:</em> ${totalBill}.`;
}