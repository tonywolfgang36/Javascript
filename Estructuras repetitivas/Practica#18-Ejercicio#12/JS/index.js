const btn = document.getElementById("btnLaunch");
btn.addEventListener("click", industry);



function industry(){

    let continuar = true;
    let fabricaN = 0;
    let produccionMayor = 0;

    let acumuladorEtiquetasFabricas="";
    let acumuladorEtiquetasMayor="";
    let acumuladorEtiquetasJulio="";

    while(continuar){
            fabricaN+=1;
            let produccionTotal = 0;
            for(let i=1;i<13;i++){
                let produccion = Number(prompt(`Ingrese el valor de la produccion en el mes #${i}`));
                produccionTotal+=produccion;
                if(isNaN(produccion)||produccion<=0){
                    alert("Ingresar números positivos.");
                    return;
               
                     } else if(i==7&&produccion>=300000){
                        acumuladorEtiquetasJulio = "";
                        acumuladorEtiquetasJulio += `<li class="list-group-item">La empresa #${fabricaN} produjo más en el mes de Julio con un total de: $${produccion}`;
                    } 
                }

                acumuladorEtiquetasFabricas += `<li class="list-group-item">La empresa #${fabricaN} produjo un total de: $${produccionTotal} este año.`;

                if(produccionTotal > produccionMayor){
                    produccionMayor = produccionTotal;
                    acumuladorEtiquetasMayor = "";
                    acumuladorEtiquetasMayor += `<li class="list-group-item">La empresa #${fabricaN} produjo más en todo el año con un total de: 
                    $${produccionMayor}.`;
                }
                
        if(confirm("¿Desea añadir otra fabrica?")){
            continuar = true;
        }  else {
            continuar = false;
        }

    }

    let showList = document.getElementById("showList");
    showList.innerHTML = `${acumuladorEtiquetasFabricas}<br>
                            ${acumuladorEtiquetasMayor}<br>
                            ${acumuladorEtiquetasJulio}.`;
    
}