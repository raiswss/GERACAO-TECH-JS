let senha =  123
let senhaUser = prompt('Digite a senha')
let tentativas = 3
let contTentativas = 0 

if(senha == senhaUser){
    console.log('Caminho Feliz')
}
else{
    while ( senha != senhaUser && contTentativas<3) {
        senhaUser = prompt(`'senha incorreta. Você tem ${tentativas-contTentativas} tentativas. Digite novamente a senha'`)

 if (senha == senhaUser) {
    console.log('Entrou na sua conta')
            
        }

        else{
            contTentativas += 1
        }

    }
    
}

let cont =1
    do {
        console.log (cont)
        cont+=1
    } while (10=0);