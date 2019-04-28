function calcularIMC()  {
    var peso = document.getElementById("peso").value.replace(",",".");
    var altura = document.getElementById("altura").value.replace(",",".");
    var IMC = peso / Math.pow(altura, 2);
    var resultado = "<p class=\"display-2 text-center\">Seu IMC é " + IMC.toFixed(2) + " kg/m²</p>"
    document.getElementById("resultado").innerHTML = resultado;
    
    var row;
    if (IMC < 17) {
        row = document.getElementById("1").classList.add("table-primary");
    } else if (IMC >= 17 && IMC < 18.5) {
        row = document.getElementById("2");
    } else if (IMC >=18.5 && IMC < 25) {
        row = document.getElementById("3");
    } else if (IMC >= 25 && IMC < 30) {
        row = document.getElementById("4");
    } else if (IMC >= 30 && IMC < 35) {
        row = document.getElementById("5");
    } else if (IMC >= 35 && IMC < 40) {
        row = document.getElementById("6");
    } else {
        row = document.getElementById("7");
    }
    row.classList.add("table-primary");
    row.classList.add("text-body");
}
