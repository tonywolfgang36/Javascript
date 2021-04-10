const btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", clientes);

function clientes(){
    
    const CX = Number(document.getElementById("CX").value);
    let fee = 0;

    const resultado = document.getElementById("resultado");

    if(CX<200){
        fee = 95;
        resultado.innerHTML = `<div class="alert alert-danger">
                                El platillo tendrá un costo de: $${fee}</div>`;

    }else if(CX>200&&CX<=300){
        fee = 85;
        resultado.innerHTML = `<div class="alert alert-warning">
                                El platillo tendrá un costo de: $${fee}</div>`;
    } else if (CX>300){
        fee = 75;
        resultado.innerHTML = `<div class="alert alert-success">
                                El platillo tendrá un costo de: $${fee}</div>`;
    }
}