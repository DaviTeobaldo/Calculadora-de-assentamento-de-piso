function calcularCusto() {
    var comprimento = parseFloat(document.getElementById("comprimento").value);
    var largura = parseFloat(document.getElementById("largura").value);
    var precoPorMetroQuadrado = 36.00; 

    if (!isNaN(comprimento) && !isNaN(largura)) {
        var area = comprimento * largura;
        var custo = area * precoPorMetroQuadrado;
        document.getElementById("resultado").textContent = custo.toFixed(2);
    } else {
        alert("Por favor, insira valores válidos.");
    }
}