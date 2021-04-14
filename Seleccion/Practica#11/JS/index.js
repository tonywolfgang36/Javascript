const btnEvaluar = document.getElementById("btnCalcular");
btnEvaluar.addEventListener("click", Evaluate);

function Evaluate(){

    const N1 = Number(document.getElementById("edad1").value); 
    const N2 = Number(document.getElementById("edad2").value);    
    const resultado = document.getElementById("resultado");
    let dif = 0;

    if(N1>N2){
            dif = N1-N2;
            resultado.innerText = `El número mayor es: ${N1}
                                    La diferencia de edad es: ${dif}`;

    } else {
            dif = N2-N1;
            resultado.innerText = `El número mayor es: ${N2}
                                     La diferencia de edad es: ${dif}`;

    }

}