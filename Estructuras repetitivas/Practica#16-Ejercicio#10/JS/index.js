const btn = document.getElementById("btnLaunch");
btn.addEventListener("click", votos);

let candidato1 = 0;
let candidato2 = 0;
let candidato3 = 0;
let candidato4 = 0;

function votos(){
    
    let i = Number(prompt("Elija a su candidato"));

    while(i!=0){
        
        if(i==1){
            candidato1++;
        } else if(i==2){
            candidato2++;
        } else if(i==3){
            candidato3++;
        } else if(i==4){
            candidato4++;
        } else if(i==0){
            return;
        } else {
            alert("Ingrese un valor entre el 1 - 4. Elija 0 si desea salir.");
        }      
        
        i = Number(prompt("Elija a su candidato"));

    }

    let show = document.getElementById("show");
    show.innerHTML = `Candidato #1 recibió ${candidato1} votos.<br>
                        Candidato #2 recibió ${candidato2} votos.<br>
                        Candidato #3 recibió ${candidato3} votos.<br>
                        Candidato #4 recibió ${candidato4} votos.`;

}