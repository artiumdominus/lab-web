function calcular() {
    var q_homens = document.getElementById("homens").value;
    var q_mulheres = document.getElementById("mulheres").value;
    var q_criancas = document.getElementById("crianças").value
    var kg_carne = 0.6 * q_homens + 0.4 * q_mulheres + 0.2 * q_criancas;
    
    var q_tipos_de_carne = 0;
    var tipos_de_carne = [];

    var carnes = document.getElementsByClassName("carne");
    var i;
    for (i = 0; i < carnes.length; ++i) {
        if (carnes[i].checked) {
            tipos_de_carne.push(carnes[i].name);    
        }
    }
    
    q_tipos_de_carne = tipos_de_carne.length;

    var kg_por_tipo = kg_carne / q_tipos_de_carne;

    document.getElementById("resultado").innerHTML = '<table id="table"></table>';
    var table = document.getElementById("table");
    table.innerHTML = '<tr><th>Tipo de carne</th><th>Quantidade</th></tr>';
    var i;
    for (i = 0; i < q_tipos_de_carne; i++) {
        table.innerHTML += '<tr><td>' + tipos_de_carne[i] + '</td><td>' + kg_por_tipo.toFixed(2) + '</td></tr>';
    }
}
