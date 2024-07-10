let valor = document.getElementById('valor')

let qtd = document.querySelector('#quantidade')

let corEtiquetas = document.getElementsByName ('cor')

let resposta = document.querySelector('div')

function calcularDesconto() {
let descontoCor = 0 
let descontoQuantidade = 0 
let cor = 'indefinida'

// desconto para cor 

if (corEtiquetas[0].checked) {
    descontoCor= 0.5
    cor = corEtiquetas[0].value
}

else if (corEtiquetas[1].checked) {
    descontoCor= 0.3
    cor = corEtiquetas[1].value
}

else if (corEtiquetas[2].checked) {
    descontoCor= 0.15
    cor = corEtiquetas[1].value
}

// desconto por quantidade 
if (qtd.value>2 ) {
    descontoQuantidade= 0.1
}

let valorFinal = (valor.value*qtd.value)* (1-(descontoCor + descontoQuantidade))


resposta.innerHTML = ` 
<ul> 
<li> Preço Original Peça: R$${valor.value} </li>
<li> Cor da Etiqueta: ${cor.value} </li>
<li> Quantidade de peças: ${qtd.value} </li>
<li> Desconto por cor: ${descontoCor*100}% </li>
<li> Desconto por quantidade: ${descontoQuantidade*100}% </li>
<li> Total da compra com desconto: ${valorFinal}% </li>
</ul>`

}





