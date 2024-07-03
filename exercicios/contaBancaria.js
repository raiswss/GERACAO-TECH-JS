// nome do titular
const nome= 'Cleitinho Bigode Fino Felino da Silva'
// saldo 
let saldo = 500000000.5
let entradaSenha = prompt('Digite sua senha')
// escolha

let senha = 'sache100#'


if (senha == entradaSenha){ //caso senha esteja correta
    let escolha = Number( prompt(`${nome} digite uma operação para a sua conta: \n 1- depósito \n 2- saque \n 3- saldo `))
    //3 operaçãoes básicas:
    switch (escolha) {
        //depósito
        case 1:
            let valorDeposito = Number(prompt(`${nome} digite o valor a ser depositado (apenas números)`))
            saldo += valorDeposito
            console.log('O valor foi depositado')
            console.log(`O saldo da conta atual é R$ ${saldo}`)
            break;
        //saque
        case 2:
            let valorSaque = Number(prompt(`${nome} digite o valor a ser sacado (apenas números)`))
            if(saldo >= valorSaque){
                saldo -= valorSaque
                console.log('Pegue seu dinheiro no caixa')
            }
            else{
                console.log('Saldo insuficiente')
            }       
            break;
        case 3:
            console.log(`O saldo  atual da conta é R$ ${saldo}`)
            break; 
        default:
            console.log(`A operação desejada não está disponível em nenhum das nossas opções`)
            break;
    }
}
else{
    console.log('Acesso negado! Senha inválida')
}




//saque
// saldo superior ao valor de saque
// saldo inferior ao valor de saque

//extrato