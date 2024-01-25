function calculate() {
 
    var ctValue = parseFloat(document.getElementById('ct').value);
    var hdlValue = parseFloat(document.getElementById('hdl').value);
    var trigValue = parseFloat(document.getElementById('trig').value);

    if (isNaN(ctValue) || isNaN(hdlValue) || isNaN(trigValue)) {
        alert("Por favor, insira valores numéricos válidos.");
        return;
    }

    var ldlValue = ctValue - hdlValue - (trigValue / 5);

    // Calcular as relações
    var ctHdlRatio = ctValue / hdlValue;
    var ldlHdlRatio = ldlValue / hdlValue; 

 
    document.getElementById('ldl-total').textContent = "LDL: " + ldlValue.toFixed(2);
    document.getElementById('ct-hdl').textContent = "CT/HDL: " + ctHdlRatio.toFixed(2);
    document.getElementById('ldl-hdl').textContent = "LDL/HDL: " + ldlHdlRatio.toFixed(2);


    document.getElementById('result').style.display = 'block';
}
