const btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", package);

function package(){

    let kg = Number(document.getElementById("kg").value);
    let zone = Number(document.getElementById("my-select").value);
    
    const show = document.getElementById("resultado");
    let price = 0;

    kg = kg * 1000;

    if(kg<5000&&kg>=1){
       
        if(zone==1){
            price = kg * 11;
            show.innerHTML = `El precio total es: ${price}`;
        } else if(zone==2){
            price = kg * 10;
            show.innerHTML = `El precio total es: ${price}`;
        } else if (zone==3){
            price = kg * 12;
            show.innerHTML = `El precio total es: ${price}`;
        } else if (zone==4){
            price = kg * 24;
            show.innerHTML = `El precio total es: ${price}`;
        } else {
            price = kg *27;
            show.innerHTML = `El precio total es: ${price}`;
        }
        
    } else {

        alert("La cantidad de peso está excedida o es invalida, el paquete no podrá salir");
        return;
    }

}