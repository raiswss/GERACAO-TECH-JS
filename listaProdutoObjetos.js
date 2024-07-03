let produtos = []

//cadastrar 5 produtos
//crie um array com 5 produtos.
//Cada produto deve ser um objeto com as propriedades nome, preco, cor, tamanho e disponibilidade. 
//Crie um método calcularDesconto que recebe um número e retorna o preço com desconto.
//Crie um método alterar disponibilidade. Se a dispobibilidade estiver true, altere para false e vice-versa.
for(let i = 1; i<=2; i++){
   
    let produto = {
        nome: prompt(`Nome do produto nº ${i}`),
        preco: parseFloat(prompt(`Preço do produto nº ${i}`)),
        cor: prompt(`Cor do produto nº ${i}`),
        tamanho: prompt(`Tamanho do produto nº ${i}`),
        disponibilidade: confirm(`Produto nº ${i} está disponível?`),
        calcularDesconto: function(desconto=0){
            return produto.preco*(1-desconto/100)
        },
        alterarDisponibilidade: function(){

            if(produto.disponibilidade){
                produto.disponibilidade = false
            }else{
                produto.disponibilidade = true
            }
        }
    }

    produtos.push(produto)
}

console.log(produtos)
let produto2 = JSON.stringify(produtos[1])
console.log(produto2)