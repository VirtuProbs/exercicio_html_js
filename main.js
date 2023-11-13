const form = document.getElementById('form-comparador');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const mesagemSucesso = `O valor de A é menor que valor de B, resposta correta!`;
    const mesagemError = `O valor A é maior que o valor de B, resposta incorreta!`;

    var valor1 = document.getElementById('campo-a').value;
    var valor2 = document.getElementById('campo-b').value;


    if (valor1 < valor2){
        alert(mesagemSucesso)
    } else{
        alert(mesagemError)
    }

})
