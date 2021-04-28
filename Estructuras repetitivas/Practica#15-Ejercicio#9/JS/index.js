const btn = document.getElementById("btnLaunch");
btn.addEventListener("click", index);


function index(){

    let index = Number(prompt("Ingrese el valor a buscar"));
    let numero1 = 0;
    let numero2 = 1;
    let array = [numero1, numero2];

    let show = document.getElementById("show");

    for(let i=1;i<=100;i++){

        let permuta = numero1 + numero2;
        array.push(permuta);
        numero1 = numero2;
        numero2 = permuta;

        if(array[i]<=index){
            show.innerHTML = `El número cercano o igual en la serie fibonacci es: ${array[i]}`;
        }
    }

}