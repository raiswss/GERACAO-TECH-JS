//4 operações básicas

let num1 = Number(prompt('Digite um número'))
let num2 =Number(prompt('Digite outro número'))
let resultado
let opcao = prompt('Digite o caracter da operação: \n + soma \n - subtração \n * multiplicação \n \ divisão')

function calculadora(num1, num2, opcao) {
    switch (opcao) {
        case '+':
            resultado = num1 + num2
            console.log(resultado)
            break
        case '-':
            resultado = num1 - num2
            console.log(resultado)
            break
        case '*':
            resultado = num1 * num2
            console.log(resultado)
            break
        case '/':
            if(num2 != 0){
                resultado = num1 / num2
                console.log(resultado)  
            }
            else{
                resultado= 'nao é possivel divisão por 0'
                console.log(resultado)
            }
            break
    
        default:
            console.log('Não há suporte para operação escolhida')
            break;
    }
}

