const btn = document.getElementById("btnLaunch");
btn.addEventListener("click", profe);


function profe(){

    let n = 20;
    let m = n;

    let promedioGeneral = 0;
    let promedioH = 0;
    let promedioM = 0;
    let promedioHigher = 0;

    let general = 0;
    let mujeres = 0;
    let hombres = 0;

    let contadorHombres = 0;
    let contadorMujeres = 0;
    while(n!=0){

        let x = Number(prompt("Ingrese la calificacion del alumno"));
        let y = Number(prompt(`Ingrese el sexo del alumno
        Seleccione "1" para hombre y "2" para mujer`));

        if(isNaN(x)||isNaN(y)){
            alert("Porfavor seleccione valores numericos");
        } else if(y==2){
            mujeres += x;
            contadorMujeres++;
        } else{
            hombres += x;
            contadorHombres++;
        }
        
        n--;
    }

    general = hombres + mujeres;

    promedioGeneral = general / m;
    promedioH = hombres / contadorHombres;
    promedioM = mujeres / contadorMujeres;

    if(promedioM>promedioH){
        promedioHigher = promedioM;
    } else{
        promedioHigher = promedioH;
    }

    let show = document.getElementById("show");
    show.innerHTML = `El promedio general del grupo es:${promedioGeneral}<br>
                        El promedio obtenido solo por mujeres es:${promedioM}<br>
                            El promedio obtenido solo por hombres es:${promedioH}<br>
                                El promedio mas alto es: ${promedioHigher}`;

}