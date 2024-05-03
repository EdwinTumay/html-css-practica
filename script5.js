
let button = document.getElementById("button-color");

function cambioColor(){
    var elemento = document.getElementById("body");
    elemento.classList.toggle("bodyoscuro")
}

button.onclick = cambioColor;
