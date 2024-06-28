let min = 1
let max = 25 
let valorCompra = 500
let incrementoCompra = 100.00

for (let i = min; i <= max ; i++) {
    let valorFinal = valorCompra - (valorCompra* i/100)
    console.log(`valor compra: R$ ${valorCompra.toFixed(2)} - ${i}% - Valor final: R$${valorFinal.toFixed(2)} `)
    valorCompra += incrementoCompra
     
}