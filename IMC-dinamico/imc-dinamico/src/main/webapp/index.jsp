<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>IMC</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
</head>
<body>
    <div class="container text-center">
        <h1>IMC : I&#769ndice de Massa Corporal</h1>
        <p>Digite o seu peso e a sua altura no formula&#769rio abaixo para calcular o seu IMC.</p>
    </div>
    <div class="container">
        <form class="form-inline justify-content-center">
            <label for="peso" class="mr-sm-2">Peso: </label>
            <input type="text" class="form-control mb-2 mr-sm-2" id="peso" name="peso" placeholder="peso (em kg)">
            <label for="altura" class="mr-sm-2">Altura: </label>
            <input type="text" class="form-control mb-2 mr-sm-2" id="altura" name="altura" placeholder="altura (em metros)">
            <button type="submit" class="btn btn-primary mb-2">Calcular</button>
        </form>
    </div>
    <%@page import="java.text.DecimalFormat" %>
    <%
        String pesoStr = request.getParameter("peso");
        String alturaStr = request.getParameter("altura");
        if (pesoStr != null && alturaStr != null) {
            double peso = Double.parseDouble(pesoStr);
            double altura = Double.parseDouble(alturaStr);
            double imc = peso / (altura * altura);
            DecimalFormat decimalFormat = new DecimalFormat("0.##");
    %>
    <p class="display-2 text-center">Seu IMC e&#769 <%=decimalFormat.format(imc)%> kg/m&sup2</p>
    <%--
        }
    --%>
    <div class="container">
        <table class="table table-dark table-striped">
            <thead>
                <tr>
                    <th>Resultado</th>
                    <th>Situa&ccedil&atildeo</th>
                </tr>
            </thead>
            <tbody>
                <tr <%=(imc < 17 ? "class=\"table-primary text-body\"" : "")%>>
                    <td>Abaixo de 17</td>
                    <td>Muito abaixo do peso</td>
                </tr>
                <tr <%=(imc >= 17 && imc < 18.5 ? "class=\"table-primary text-body\"" : "")%>>
                    <td>Entre 17 e 18,49</td>
                    <td>Abaixo do peso</td>
                </tr>
                <tr <%=(imc >= 18.5 && imc < 25 ? "class=\"table-primary text-body\"" : "")%>>
                    <td>Entre 18,5 e 24,99</td>
                    <td>Peso normal</td>
                </tr>
                <tr <%=(imc >= 25 && imc < 30? "class=\"table-primary text-body\"" : "")%>>
                    <td>Entre 25 e 29,99</td>
                    <td>Acima do peso</td>
                </tr>
                <tr <%=(imc >= 30 && imc < 35 ? "class=\"table-primary text-body\"" : "")%>>
                    <td>Entre 30 e 34,99</td>
                    <td>Obesidade I</td>
                </tr>
                <tr <%=(imc >= 35 && imc < 40 ? "class=\"table-primary text-body\"" : "")%>>
                    <td>Entre 35 e 39,99</td>
                    <td>Obesidade II (severa)</td>
                </tr>
                <tr <%=(imc > 40 ? "class=\"table-primary text-body\"" : "")%>>
                    <td>Acima de 40</td>
                    <td>Obesidade III (m&oacuterbida)</td>
                </tr>
            </tbody>
        </table>
    </div>
    <%}%>
</body>
</html>
