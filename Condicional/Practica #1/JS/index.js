const btnEvaluar = document.getElementById("btnCalcular");
btnEvaluar.addEventListener("click", Evaluate);

function Evaluate(){

    const N1 = Number(document.getElementById("edad1").value); 
    const N2 = Number(document.getElementById("edad2").value);    
    const resultado = document.getElementById("resultado");

    if(N1>N2){
            resultado.innerText = `EL número mayor es: ${N1}`;
    } else {
            resultado.innerText = `EL número mayor es: ${N2}`;
    }
   
}