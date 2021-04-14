const btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", multiplo);

function multiplo(){

    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);

    const show = document.getElementById("resultado");

    if(n1%n2==0){
        show.innerHTML = `El primero número es multiplo del segundo número.`
    } else if(n2%n1==0) {
        show.innerHTML = `El segundo número es multiplo del primero número.`
    } else if(n1%n2!=0){
        show.innerHTML = `El primer número no es multiplo del primero número.`
    } else if(n2%n1!=0){
        show.innerHTML = `El segundo número no es multiplo del primero número.`
    }

}