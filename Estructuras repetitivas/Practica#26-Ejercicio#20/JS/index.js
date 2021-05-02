const btn = document.getElementById("btnLaunch");
btn.addEventListener("click", numerosEnteros);


function numerosEnteros(){

    let zero = 0 ;
    let promedio = 0;
    let promedioPositivo = 0;
    let totalN = 0;

    let n = Number(prompt("¿Cuántos numeros desea ingresar?"));
    let menorQue = n;

    while(n!=0){

        let numero = Number(prompt("Ingrese un valor numerico."));
        if(isNaN(numero)){
            alert("Por favor solo ingrese valores numericos.")
        } else if(numero>0){
            promedioPositivo+=numero;
            zero++;
        } else if(numero<=0){
            promedio+=numero;
        }
        n--;
    }
    totalN = (promedio + promedioPositivo)/menorQue;
    promedioPositivo = promedioPositivo / zero;

    let show = document.getElementById("show");
    show.innerHTML = `Número total de numeros mayores a 0: ${zero}<br>
                        Promedio de los numeros positivos: ${promedioPositivo}<br>
                        promedio de todos los numeros: ${totalN}`;
}