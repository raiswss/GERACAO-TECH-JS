









//mostre no console o nome da pessoa e quanto ela recebe em um texto formatado, para todos os itens do array,com uma string formatada.
funcionarios.forEach((item) => (`${item.nome} recebe R$ ${(item.gratificacao + item.salario)} salário de bonificação`)
    );

    let gratificacoes = funcionarios.map ((item)=> item.gratificacao) 

    // utilizando o map, crie uma função   que retorna um array, com os valores dobrados do array de gratificações
    let gratificacaoDobro = gratificacoes.map((item) => item * 2)

    //4)crie uma array cpm as pessoas (objeto) que recebem mais de 4 mil reais de salario.

    let salarioSup4k = funcionarios.filter((item)=> {
        if (item.salario>4000) {
            return item
        }
    })

    //5)crie um array com as pessoas (objeto) que tem mais de 20 anos.

    let maiores20anos = funcionarios.filter((pessoa)=> {
        if (pessoa.idade>20) {
            return pessoa
        }
    })

 // exiba o valor total das gratificações. Utilize reduce. 

 let totalGratificacoes = funcionarios.reduce((total, funcionarios)=>{
    total =+ funcionarios.gratificacao 
    return total
 })