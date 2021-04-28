const btn = document.getElementById("btnLaunch");
btn.addEventListener("click", salario);

function salario(){

    let salario = 1500;
    let acumuladorSalario = "";
  
   for(let i=1;i<=6;i++){

    let aumento = 0;
    aumento = (salario * 10) / 100;
    salario += aumento;
    acumuladorSalario += `<li class="list-group-item">El salario el año #${i} es de $${salario}</li>`;
    
   }

   let showList = document.getElementById("showList");
   showList.innerHTML = acumuladorSalario;

   let show = document.getElementById("show");
   show.innerHTML = `El salario total final es de $${salario}`;
    
}