/**
 * Toda a execução do seu programa deve estar dentro dessa função. 
 * Pode criar outras funções e outros scripts na pasta src, mas o principal deve estar nessa função!
 */
function initCalculadora(){
    var resultado = document.getElementById("resultado");
    var btnResultado = document.getElementsByClassName("resultar")[0];

    function displayValue(field){
        resultado.value += field;
    }

    function calcular(){
        // if(isNaN(resultado.value.substring(resultado.length, resultado.length - 1))){
        //     print('eero ps');
        //     return resultado.value = 'Erro de operação.'
        // }
        var numero1 = "";
        var simbolo;
        var numero2 = "";
        var primeiroNum = true;

        for (var i = 0; i < resultado.value.length; i++){
            // se for número
            if(!isNaN(resultado.value.substring(i, i + 1))){

                if(primeiroNum){
                    numero1 += resultado.value.substring(i, i + 1); 
                }else{
                    numero2 += resultado.value.substring(i, i + 1); 
                }

            }else{

                if(resultado.value.substring(i, i + 1) == '.'){
                    primeiroNum ? numero1 += resultado.value.substring(i, i + 1) : numero2 += resultado.value.substring(i, i + 1);
                }else{
                    if(primeiroNum) primeiroNum = false;
                    simbolo = resultado.value.substring(i, i + 1);
                }
                if(primeiroNum && resultado.value.substring(i, i + 1) != '.') primeiroNum = false;
            }
        }

        var resp;

        switch(simbolo){
            case '+':
                resp = parseFloat(numero1) + parseFloat(numero2);
                break;
            case '-':
                resp = parseFloat(numero1) - parseFloat(numero2);
                break;
            case '*':
                resp = parseFloat(numero1) * parseFloat(numero2);
                break;
            case '/':
                resp = parseFloat(numero1) / parseFloat(numero2);
                break;
            default:
                resp = null;
                
        }

        if(resultado.value.substring(resultado.value.length - 1, resultado.value.length) == simbolo) return resultado.value = "Erro de operação";

        if(simbolo == null){
            return;
        }

        resultado.value = resp;

    }
    
    function adicionar(field){
        
        // se for um número
        if(!isNaN(field)){
                displayValue(field);
        }else{

            // tratando .
            var numero1 = "";
            var numero2 = "";
            var num1 = true;

            for (var i = 0; i < resultado.value.length; i++){
                // se for número
                if(!isNaN(resultado.value.substring(i, i + 1))){
    
                    if(num1){
                        numero1 += resultado.value.substring(i, i + 1); 
                    }else{
                        numero2 += resultado.value.substring(i, i + 1); 
                    }
    
                }else{
                    if(resultado.value.substring(i, i + 1) == '.'){
                        num1 ? numero1 += resultado.value.substring(i, i + 1) : numero2 += resultado.value.substring(i, i + 1);
                    }
                    if(num1 && resultado.value.substring(i, i + 1) != '.') num1 = false;
                }
            }
            if(field == '.'){
                if(resultado.value.substring(resultado.value.length - 1, resultado.value.length) == '.'){
                    return;
                }

                if(num1){
                    if(!numero1.includes('.')){
                        displayValue(field);
                    }
                }else{
                    if(!numero2.includes('.')){
                        displayValue(field);
                    }
                }
                return;
            }

            // ultimo caractere é numero
            if(!isNaN(resultado.value[resultado.value.length - 1])){

                var temSimbolo = false;

                for (var i = 0; i < resultado.value.length; i++){
                    valor = resultado.value[i]
                    if(isNaN(valor)){
                        if(!temSimbolo){
                            if(valor != '.'){
                                temSimbolo = true;
                            }
                        }
                    }else{
                        
                    }
                }

                if(!temSimbolo && field != '.'){
                    displayValue(field);
                }
                
            }
        }

    }

    const btnNumeros = document.getElementsByClassName("numero");

    btnNumeros[0].onclick =  function() { displayValue(9); }
    btnNumeros[1].onclick =  function() { adicionar(8); }
    btnNumeros[2].onclick =  function() { adicionar(7); }
    btnNumeros[3].onclick =  function() { adicionar(6); }
    btnNumeros[4].onclick =  function() { adicionar(5); }
    btnNumeros[5].onclick =  function() { adicionar(4); }
    btnNumeros[6].onclick =  function() { adicionar(3); }
    btnNumeros[7].onclick =  function() { adicionar(2); }
    btnNumeros[8].onclick =  function() { adicionar(1); }
    btnNumeros[9].onclick =  function() { adicionar(0); }
    btnNumeros[10].onclick =  function() { adicionar('.'); }

    const btnSoma = document.getElementsByClassName("somar")[0];
    const btnSubtracao = document.getElementsByClassName("subtrair")[0];
    const btnMultiplicacao = document.getElementsByClassName("multiplicar")[0];
    const btnDivisao = document.getElementsByClassName("dividir")[0];

    btnSoma.onclick = function() { adicionar('+'); }
    btnSubtracao.onclick = function() { adicionar('-'); }
    btnMultiplicacao.onclick = function() { adicionar('*'); }
    btnDivisao.onclick = function() { adicionar('/'); }
    document.getElementsByClassName("resultar")[0].onclick = function() { calcular(); }
}