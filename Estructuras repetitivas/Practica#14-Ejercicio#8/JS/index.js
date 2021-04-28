const btn = document.getElementById("btnLaunch");
btn.addEventListener("click", index);


function index(){

    let index = Number(prompt("Ingrese el index a buscar"));
    let numero1 = 0;
    let numero2 = 1;
    let array = [numero1, numero2];

    let show = document.getElementById("show");

    for(let i=1;i<=index;i++){

        let permuta = numero1 + numero2;
        array.push(permuta);
        numero1 = numero2;
        numero2 = permuta;

        if(i==index){
            show.innerHTML = `El index en la serie fibonacci es: ${array[index]}`;
        }
    }

}