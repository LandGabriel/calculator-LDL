function calculate() {
    // Obtenha os valores dos campos de entrada
    var ctValue = parseFloat(document.getElementById('ct').value);
    var hdlValue = parseFloat(document.getElementById('hdl').value);
    var trigValue = parseFloat(document.getElementById('trig').value);

    // Verifique se os valores são números válidos
    if (isNaN(ctValue) || isNaN(hdlValue) || isNaN(trigValue)) {
        alert("Por favor, insira valores numéricos válidos.");
        return;
    }

    // Calcular o LDL usando a fórmula de Friedewald
    var ldlValue = ctValue - hdlValue - (trigValue / 5);

    // Calcular as relações
    var ctHdlRatio = ctValue / hdlValue;
    var ldlHdlRatio = ldlValue / hdlValue; // Corrigido para LDL/HDL

    // Atualizar os resultados nos elementos correspondentes
    document.getElementById('ldl-total').textContent = "LDL: " + ldlValue.toFixed(2);
    document.getElementById('ct-hdl').textContent = "CT/HDL: " + ctHdlRatio.toFixed(2);
    document.getElementById('ldl-hdl').textContent = "LDL/HDL: " + ldlHdlRatio.toFixed(2);

    // Exibir os resultados
    document.getElementById('result').style.display = 'block';
}
