const btn = document.getElementById("btnLaunch");
btn.addEventListener("click", distancia);


function distancia(){

    let x = 0;
    let y = 0;

   for(let i=200;i<=400;i++){
    if(i%2==0){
        x += i;
    } else {
        y += i;
    }
   }

   let show = document.getElementById("show");
   show.innerHTML = `La suma de los numero pares es: ${x}.<br>
                        La suma de los numeros impares es: ${y}`;
}