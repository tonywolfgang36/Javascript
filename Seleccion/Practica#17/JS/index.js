const btnCalcular = document.getElementById("btnCacular");
btnCalcular.addEventListener("click", epoch);

function epoch(){

    let salary = Number(document.getElementById("sueldo").value);
    let age = Number(document.getElementById("age").value);
    let bonusS = 0;
    let bonusA = 0;

    const show = document.getElementById("resultado");

    if(age<=1){
        alert("La antigüedad menor o iguales a 1 año no contaran con bono");
        return;
    
        } else if(age>=2&&age<5){
            bonusA = age + (age*20)/100;
        } else {
            bonusA = age + (agey*30)/100;
        } 
    

        if(salary<=1000&&salary>0){
            bonusS = salary + (salary*25)/100;
        } else if(salary>1000&&salary<=3500){
            bonusS = salary + (salary*15)/100;
        } else {
            bonusS = salary + (salary*10)/100;
        }
    

        if(bonusS>bonusA){
            show.innerHTML = `El bono mayor es en sueldo, total: $${bonusS}`;
        } else {
            show.innerHTML = `El bono mayor es en antigüedad, total: $${bonusA}`;
        }
    

}