function calcular() {
    var q_homens = document.getElementById("homens").value;
    var q_mulheres = document.getElementById("mulheres").value;
    var q_criancas = document.getElementById("crianças").value
    var kg_carne = 0.6 * q_homens + 0.4 * q_mulheres + 0.2 * q_criancas;
    
    var q_tipos_de_carne = 0;
    var tipos_de_carne = [];

    var alcatra = document.getElementById("alcatra");
    considerar(alcatra);
    var carneDeSol = document.getElementById("carne-de-sol");
    considerar(carneDeSol);
    var contraFile = document.getElementById("contra-file");
    considerar(contraFile);
    var fraldinha = document.getElementById("fraldinha");
    considerar(fraldinha);
    var maminha = document.getElementById("maminha");
    considerar(maminha);
    var picanha = document.getElementById("picanha");
    considerar(picanha);
    var pernilDeCordeiro = document.getElementById("pernil-de-cordeiro");
    considerar(pernilDeCordeiro);

    var linguicaDeFrango = document.getElementById("linguica-de-frango");
    considerar(linguicaDeFrango);
    var linguicaToscana = document.getElementById("linguica-toscana");
    considerar(linguicaToscana);

    var coracaoDeFrango = document.getElementById("coracao-de-frango");
    considerar(coracaoDeFrango);
    var sobrecoxa = document.getElementById("sobrecoxa");
    considerar(sobrecoxa);

    var peixeMeca = document.getElementById("peixe-meca");
    considerar(peixeMeca);

    var kg_por_tipo = kg_carne / q_tipos_de_carne;

    document.getElementById("resultado").innerHTML = '<table id="table"></table>';
    var table = document.getElementById("table");
    table.innerHTML = '<tr><th>Tipo de carne</th><th>Quantidade</th></tr>';
    var i;
    for (i = 0; i < q_tipos_de_carne; i++) {
        table.innerHTML += '<tr><td>' + tipos_de_carne[i] + '</td><td>' + kg_por_tipo.toFixed(2) + '</td></tr>';
    }

    var resultado = "Homens : " + q_homens + "<br>" + "Mulheres : " + q_mulheres + "<br>" + "Crianças : " + q_criancas + "<br>";
    
    //document.getElementById("resultado").innerHTML = resultado;

    function considerar(x) {
        if (x.checked) {
            q_tipos_de_carne += 1;
            tipos_de_carne.push(x.name);
        }
    }
}