const btn = document.getElementById("btnLaunch");
btn.addEventListener("click", ciudad);

function ciudad(){


    let ciudades = Number(prompt("¿Cuántas ciudades hay?"));
    let tiendas = Number(prompt("¿Cuántas tiendas hay?"));
    let empleados = Number(prompt("¿Cuántos empleados hay?"));

    let empleadosTotal = 0;
    let tiendasTotal = 0;
    let ciudadesTotal = 0;

    let acumuladorEmpleados = "";
    let acumuladorTiendas = "";
    let acumuladorCiudades = "";

    let empleadosTotalFinal = 0;
  
    for(let i=1;i<=ciudades;i++){
        for(let j=1;j<=tiendas;j++){
            for(let k=1;k<=empleados;k++){

                empleadosTotal = Number(prompt(`¿Cuánto vendió el empleado #${k} de la tienda #${j} de la ciudad #${i} en el día de hoy.`));
                empleadosTotalFinal = empleadosTotal;
                acumuladorEmpleados += `<li class="list-group-item">El empleado #${k} de la tienda #${j} de la ciudad #${i} en el día de hoy vendió $${empleadosTotalFinal}</li>`;
                tiendasTotal+=empleadosTotalFinal;
                empleadosTotalFinal = 0;
            }
            acumuladorTiendas += `<li class="list-group-item">La tienda #${j} de la ciudad #${j} vendió $${tiendasTotal}</li>`;
            ciudadesTotal+=tiendasTotal;
            tiendasTotal = 0;
        }
        acumuladorCiudades += `<li class="list-group-item">La ciudad #${i} vendió $${ciudadesTotal}</li>`;
        ciudadesTotal = 0;
    }

    let showList = document.getElementById("showList");
    showList.innerHTML = `${acumuladorCiudades}<br>
                            ${acumuladorTiendas}<br>
                            ${acumuladorEmpleados}`;
}