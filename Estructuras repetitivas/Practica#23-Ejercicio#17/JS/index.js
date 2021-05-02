const btn = document.getElementById("btnLaunch");
btn.addEventListener("click", coches);


function coches(){

    let continuar = true;

    let precio1 = 1000;
    let precio2 = 2000;
    let precio3 = 3000;

    let precioTotal1 = 0;
    let precioTotal2 = 0;
    let precioTotal3 = 0;

    let categoria1 = 0;
    let categoria2 = 0;
    let categoria3 = 0;

    let totalPrecio = 0;
    

    while(continuar){
        let clave = Number(prompt("Ingrese la clave del auto."));
        if(isNaN(clave)){
            alert("Ingrese solo valores numericos.");
        } else if(clave==1){
            categoria1 = ((precio1 * 10) / 100) + precio1;
            precioTotal1 += categoria1;

        } else if(clave==2){
            categoria2 = ((precio2 * 7) / 100) + precio2;
            precioTotal2 += categoria2;

        } else if(clave==3){
            categoria3 = ((precio3 * 5) / 100) + precio3;
            precioTotal3 += categoria3;

        } else{
            alert("Elija una categoria entre 1 - 3.");
        }
        if(confirm("¿desea ingresar otro vehiculo?")){
            continuar = true;
        } else{
            continuar = false;
        }
    }

    totalPrecio = precioTotal1 + precioTotal2 + precioTotal3;

    let show = document.getElementById("show");
    show.innerHTML = `  <h3>El precio por la categoria #1 es: $${((precio1*10)/100)+1000}, 10% incluido.</h3>
                        <h3>El precio por la categoria #2 es: $${((precio2*7)/100)+2000}, 7% incluido.</h3>
                        <h3>El precio por la categoria #3 es: $${((precio3*5)/100)+3000}, 5% incluido.</h3>
                        
                        El precio total que se pagará por la categoria 1 es: $${precioTotal1}<br>
                        El precio total que se pagará por la categoria 2 es: $${precioTotal2}<br>
                        El precio total que se pagará por la categoria 3 es: $${precioTotal3}<br>
                        
                        La cantidad total que se pagará es: $${totalPrecio}`;
    
}