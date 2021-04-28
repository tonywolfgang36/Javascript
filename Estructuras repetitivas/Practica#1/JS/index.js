const btn = document.getElementById("btnIniciar");
btn.addEventListener("click", suma);

function suma(){

    let resultado = 0;


    for(let i=1;i<=10;i++){
        let numero = Number(prompt(`Ingrese el número ${i}`));

        resultado = resultado + numero;
    }

    const show = document.getElementById("show");
    show.innerHTML = `<span>La suma de los 10 números es:<br>
                        ${resultado}</span>`;
}