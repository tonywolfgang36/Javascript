let paragraph = document.getElementById('mainParagraph');
let btnNumeric = document.getElementById('numeric');
let btnText = document.getElementById('text');
let btnBoolean = document.getElementById('boolean');

btnNumeric.addEventListener("click", writeNumeric);
btnText.addEventListener("click", writeText);
btnBoolean.addEventListener("click", writeBooleanV);


function writeNumeric(){
    let numericV = 2+2;
    paragraph.textContent=numericV;
}

function writeText(){
    let textV = "Tony.";
    paragraph.textContent=textV;
}

function writeBooleanV(){
    let booleanV = true;
    paragraph.textContent = booleanV;
}
