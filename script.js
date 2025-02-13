function calculateIMC() {
    var height = parseFloat(document.getElementById("height").value);
    var weight = parseFloat(document.getElementById("weight").value);
    var result = document.getElementById("result");

    // Validação dos campos
    if (isNaN(height) || height <= 0) {
        result.innerHTML = "Por favor, insira uma altura válida.";
        return;
    } else if (isNaN(weight) || weight <= 0) {
        result.innerHTML = "Por favor, insira um peso válido.";
        return;
    }

    // Cálculo do IMC
    var imc = (weight / (height * height) * 10000).toFixed(2);

    // Exibição do resultado com classificação
    if (imc < 18.5) {
        result.innerHTML = "Seu IMC é: " + imc + " (Abaixo do peso)";
    } else if (imc >= 18.5 && imc < 25) {
        result.innerHTML = "Seu IMC é: " + imc + " (Peso normal)";
    } else if (imc >= 25 && imc < 30) {
        result.innerHTML = "Seu IMC é: " + imc + " (Sobrepeso)";
    } else if (imc >= 30 && imc < 40) {
        result.innerHTML = "Seu IMC é: " + imc + " (Obesidade)";
    } else {
        result.innerHTML = "Seu IMC é: " + imc + " (Obesidade Grave)";
    }
}

function resetIMC() {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("result").innerHTML = "";
}