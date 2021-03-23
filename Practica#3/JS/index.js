let btnCalcular = document.getElementById("btnCalcular");

btnCalcular,addEventListener("click", calcularCosto);


function calcularCosto(){
    let costoMaterial = Number(document.getElementById("costoMaterial").value);
    let altoPared = Number(document.getElementById("altoPared").value);
    let anchoPared = Number(document.getElementById("anchoPared").value);
    
    let costoTotal = costoMaterial * altoPared * anchoPared;
    let costoShow = document.getElementById("resultado");

    costoShow.innerHTML = `
    <em>El resultado es:<em> ${costoTotal}
    `;
}