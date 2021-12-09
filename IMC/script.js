
const calculate = document.getElementById("calcular");


function imc (){
    const name = document.getElementById("nome").value;
    const height = document.getElementById("altura").value;
    const weight = document.getElementById("peso").value;
    const result = document.getElementById("resultado");

    if(name != '' && height != '' && weight != '')
    {
        const imcResul = (weight / (height * height)).toFixed(2);
        let classfication = '';
        if(imcResul < 18.5){
            classfication = "abaixo do peso.";
        }else if (imcResul < 25){
            classfication = "com o peso ideal";
        }else if (imcResul < 30){
            classfication = "com Sobrepeso";
        }else if (imcResul < 35) {
            classfication = "com Obesidade Gral I";
        }else if (imcResul < 40){
            classfication = "com Obesidade Gral II";
        }else if (imcResul >= 40)        {
            classfication = "com Obesidade Gral II ou Mórbida";
        }
        result.textContent =`${name} seu IMC é: ${imcResul} e você está ${classfication}`;
    }else
    {
        result.textContent = "Preencha todos os campos!!";
    }
   
}
calculate.addEventListener('click',imc);
