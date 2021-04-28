const btn = document.getElementById("btnLaunch");
btn.addEventListener("click", estatura);

function estatura(){

    let estaturaFinal=0;
    let cantidad_de_estatura=0;
    let continuar=true;

    while(continuar){
        let next = prompt(`Ingrese la siguiente estatura`);

        if(next){
            estaturaFinal = estaturaFinal + Number(next);
            cantidad_de_estatura++;

        } else{
            continuar=false;
        }

        let promedio = (estaturaFinal/cantidad_de_estatura);
        const show = document.getElementById("show");

        show.innerHTML = `La cantidad de estaturas son: ${cantidad_de_estatura}<br>
                            La estatura promedio es: ${promedio}`;

    }
}