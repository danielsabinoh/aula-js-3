/*declarando variáveis*/
function calcImc(){
    let altura = (document.getElementById("al").value)/100; //divisão por 100 para converter m metros
    let peso = document.getElementById("ps").value;

    //Converter para número
    altura = parseFloat (altura);
    /*
    tipos de dados;
    int = numeros inteiro
    float = de ponto flutuante, exemplo o preço da gasolina 6.27
    string = texto
    boolean = verdadeiro ou falso
    */
   peso = parseFloat (peso);

   let imc = peso / (altura * altura);
   window.alert("Seu IMC é: " + imc )
}
function alternarTema_escuro(){
    const corpo = document.body; //corpo do html
    corpo.classList.toggle("escuro");
}

function alternarTema_claro(){
    const corpo2 = document.body; //corpo do html
    corpo2.classList.toggle("claro");
}