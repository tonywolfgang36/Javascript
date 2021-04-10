const btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", triangulo);

function triangulo(){

    let lado1 = Number(document.getElementById("Primerlado").value);
    let lado2 = Number(document.getElementById("Segundolado").value);
    let lado3 = Number(document.getElementById("Tercerlado").value);

    let resultado = document.getElementById("resultado");

    if(lado1==lado2&&lado2==lado3){
        resultado.innerHTML=`El triangulo es equilatero porque tiene 3 lados iguales.`;
                   }
        if(lado1==lado2&&lado2!=lado3||lado3==lado1&&lado1!=lado2||lado2==lado3&&lado3!=lado1){
            resultado.innerHTML=`El triangulo es isosceles porque tiene 2 lados son iguales.`;
                    }
            if(lado1!=lado2&&lado1!=lado3&&lado2!=lado1&&lado2!=lado3&&lado3!=lado1&&lado3!=lado2){
                resultado.innerHTML=`El triangulo es escaleno porque sus 3 lados son diferentes.`; 
            }
}