async function converterMoedas( codigoMoeda) {
   let resposta = await fetch(`https://economia.awesomeapi.com.br/last/${codigoMoeda}-BRL`)

   let cotacao = await resposta.json()

   console.log( await cotacao)

   montarTela(await cotacao[codigoMoeda+'BRL'])

}


function montarTela(objeto){
    let converterMoedaDiv = document.getElementById9('conversaoMoeda')

    let titulo = document.createElement('h1')
    titulo.innerHTML = objeto.name

    let valor = document.createElement('p')
    let valorOriginalReal = document.getElementById('valor').Value
    valor.innerHTML = `R$${valorOriginalReal}`

    let valorConvertido = document.createElement('p')
    
    converterMoedaDiv.appendChild(titulo)
    converterMoedaDiv.appendChild(valor)
    converterMoedaDiv.appendChild(valorConvertido)

}

let btnUsd = docum.getElementById('usd')



