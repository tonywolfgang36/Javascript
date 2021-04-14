const btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", descendentes);

function descendentes(){

    let A = Number(document.getElementById("primerN").value);
    let B = Number(document.getElementById("segundoN").value);
    let C = Number(document.getElementById("terceroN").value);

    let show = document.getElementById("resultado");

    let mayor = 0;
    let middleNumer = 0;
    let menor = 0;

    if(A<B&&A<C){
            menor = A;
    } else if(B<A&&B<C){
        menor = B;
    } else {
        menor = C;
        }

    if(A>B&&A>C){
        mayor = A;
    } else if(B>A&&B>C){
    mayor = B;
    } else {
    mayor = C;
    }

    middleNumer = (A+B+C) - (mayor+menor);

    show.innerHTML = `El orden de los números descentes es: ${mayor} - ${middleNumer} - ${menor}.`;

}