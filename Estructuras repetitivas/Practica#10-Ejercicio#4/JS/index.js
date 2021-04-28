const btn = document.getElementById("btnLaunch");
btn.addEventListener("click", distancia);


function distancia(){

    let conductorA = 70;
    let conductorB = 150;
    let distanciaBetween = conductorA - conductorB;
    let encuentro = 0;
    
    while(distanciaBetween < 0){
        conductorA += 1;
        conductorB -= 1;
        distanciaBetween = conductorA - conductorB;
        encuentro = conductorA;
    }

    const show = document.getElementById("show");
    show.innerHTML = `La distancia de encuentro es ${encuentro} km.`

}