function imc() {
    let weight = document.getElementById('weightEdit').value;
    let height = document.getElementById('heightEdit').value;
    //toFixed(): fixa a certa quantidade de casa demais
    let imc = (parseFloat(weight)/(parseFloat(height)*parseFloat(height))).toFixed(2);
    document.getElementById('imcAwnser').innerText = "O seu IMC é: " + imc; 
    classification(imc);
}

function classification(imc) {
    let classification;
    if (imc < 18.5)
    classification   = "Abaixo do peso";
    if(imc < 24.9)
    classification = "Peso ideal";
    if(imc < 29.9)
    classification = "Levemente acima do peso";
    if(imc < 34.9)
    classification = "Obesidade grau I";
    if(imc < 39.9)
    classification = "Obesidade grau II";
    if(imc > 40)
    classification = "Obesidade grau III"
    document.getElementById('classificationAwnser').innerText = classification;


}