window.addEventListener("scroll", function () {
    var header = document.getElementById("1no");
    if (window.scrollY > 0) {
        header.style.backgroundColor = "#2a0511"
    } else {
        header.style.backgroundColor = "transparent"
    };

})
function mainFunction() {
    printText();
}
function printText() {
    inputText = document.getElementById("correoIngresado").value
    if (inputText == "") {
        inputText = "Casilla de correo vacia"
        alert(inputText)
    }

    else {
        document.getElementById("correoIngresado").value = ""
        document.getElementById("final").setAttribute("class", "");
        document.getElementById("final").innerHTML = "Usuario Registrado";
        alert("Registro exitoso")
    }

    console.log(inputText)
}


