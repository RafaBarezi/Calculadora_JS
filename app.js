// Confirmando se todos os campos estão preenchidos:
function verificarCampos() {
    const num1 = document.getElementById("numero1").value;
    const num2 = document.getElementById("numero2").value;
    const operador = document.getElementById("operador").value;
    const botaoCalcular = document.getElementById("calcular");

    // Habilitando o botão se os dois números e o operador forem informados
    botaoCalcular.disabled = !(num1 !== "" && num2 !== "" && operador !== "");
}

// função para fazer o calculo
function calcular() {
    const num1 = parseFloat(document.getElementById("numero1").value);
    const num2 = parseFloat(document.getElementById("numero2").value);
    const operador = document.getElementById("operador").value;
    let resultado;

    switch (operador) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                resultado = " um número não pode ser dividido por zero";
            } else {
                resultado = (num1 / num2).toFixed(2).replace(".", ","); // Exibindo apenas duas casas na divisão e ainda substituindo o ponto por vírgula
            }
            break;
        default:
            resultado = "Erro: operador inválido.";

    }

    // exibindo o resultado nos dois campos
    document.getElementById("resultado").innerText = "O resultado é : " + resultado;
}

// registra os eventos somente após o carregamento do DOM. Ou seja, estas instruções vão me permitir alterar n°s apśo informados e fazer novas contas.  
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("numero1").addEventListener("input", verificarCampos);
    document.getElementById("numero2").addEventListener("input", verificarCampos);
    document.getElementById("operador").addEventListener("change", verificarCampos);
});