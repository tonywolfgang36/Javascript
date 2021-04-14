const btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", buses);

function buses(){

    let tipo = document.getElementById("sltTipo").value;
    let personas = Number(document.getElementById("personas").value);
    let KM = Number(document.getElementById("KM").value);

    const resultado = document.getElementById("resultado");

    if(personas==""&&KM==""||personas==0&&KM==0||personas==""&&KM==0||personas==0&&KM==""){

        alert("Por favor ingrese los personas o kilometros validos.")
        return;

    } else if (personas<20){

        personas = 20;

    } 

    if(tipo=="A"){

        KM = KM * 1.5;
        total = personas;
        total = total * KM;
    } else if (tipo=="B"){
        
        KM = KM * 2.0;
        total = personas;
        total = total * KM;
    } else if (tipo=="C"){
       
        KM = KM * 2.5;
        total = personas;
        total = total * KM;
    } else if (tipo=="D"){

        KM = KM * 3.0;
        total = personas;
        total = total * KM;
    }

    resultado.innerHTML = `La cantidad total es: $${total}<br>
                            El precio por persona es: $${KM}`;

}