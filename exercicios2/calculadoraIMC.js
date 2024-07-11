//elementos a serem manipulados
let nome = document.getElementById('nome')

let peso = document.querySelector("#peso")

let altura = document.querySelectorAll("#altura")[0]

let resposta = document.querySelector('div')

function calcularIMC() {
    let nomeUser = nome.Value
    let pesoUser = Number(peso.value)
    let alturaUser = Number(altura.value)
    let IMC = pesoUser / alturaUser**2


    Resposta.innerHTML= `<p> ${nomeUser}, seu IMC é de ${IMC.tofixed(2)} </p>`


}