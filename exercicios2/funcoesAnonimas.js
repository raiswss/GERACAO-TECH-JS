// function nomeFuncao(){
//     console.log('Fiz algo')
// }

// function nomeOutraFuncao(x= '1', y){
//     console.log('Fiz algo' + x + y)
// }

// // nomeOutraFuncao('segundo', 'primeiro')

// //funções de seta 
// // console.log(()=> 'fizAlgo')

// // callback
// function calculadora(n1, n2, funcao){
//     return(funcao(n1,n2))
// }

// function imprimir(algo){
//     console.log(algo)
// }

// function somar(n1, n2){
//     let resultado = n1+ n2
//     return resultado
// }

// let soma = calculadora(2,2,somar)

// calculadora(10, 3, imprimir)

function dizerOiRecife(nome){
    console.log(`${nome}, eiii boy!`)
}
function dizerOiFortaleza(nome){
    console.log(`${nome}, eiii MAHH!`)
}
function dizerOiSalvador(nome){
    console.log(`${nome}, eiii pivete!`)
}

function falarCidade(nome, funcao){
    funcao(nome)
}

falarCidade('Cleitinho', dizerOiRecife)
falarCidade('Cleitinho', dizerOiSalvador)