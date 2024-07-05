let btnVermelho = document.getElementsByTagName('button')[0]
let btnVerde = document.getElementsByTagName('button')[1]
let btnAzul= document.getElementsByTagName('button')[2]

let quadro = document.querySelector('.quadro')

function mudarCor(cor){
    quadro.style.background= cor
}

let elementoFilho = document.criateElement('p')

elementoFilho.innetHTML = 'Texto inserido no inner HTML de um parágrafo criado com o createElement do objeto document'

let elementoPai = document.querySelector('body')

elementoPai.appendChild(elementoFilho)

let outroElementoFilho = document.createElement('h1')

outroElementoFilho.innerHTML = 'título criado com JS'

elementoPai.appendChild(outroElementoFilho)

elementoPai.innerHTML += outroElementoFilho