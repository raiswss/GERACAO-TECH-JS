
let entrada = document.getElementById('entrada')
let principal = document.getElementById('principal')
let bebida = document.getElementById('bebida')
let sobremesa = document.getElementById('sobremesa')
let texaservico = document.getElementById('taxaServico')
let subTotal = document.getElementById('subTotal')
let total = document.getElementById('total')

function alteracao() {
    console.log(`campo alterado`)
}

function calcularConta() {
    let precoTotal = Number( entrada.value) + Number(principal.value) + Number(bebida.value) + Number(sobremesa.value) 

    let valorTaxa = precoTotal *0.1

    let totalApagar = precoTotal + valorTaxa

    return [precoTotal,valorTaxa,totalApagar]
}

function mostrarConta() {
    let valores = calcularConta() //[precoTotal, valorTaxa, totalApagar]

    subTotal.value = valores[0]

    taxaservico.value = valores[1]
    
    total.value = valores[3].toFixed
}