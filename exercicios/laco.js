// repetir 3x São Longuinho
// console.log('São Longuinho')
// console.log('São Longuinho')
// console.log('São Longuinho')

let quantasVezes = 3
let i = 1
let acumulador = 0

// a cada vez que chamar são longuinho ganhará 100 reais
while(i<= quantasVezes){
    console.log('São Longuinho')
    console.log('Ganhou 100')
    acumulador += 100
    i+=1
}

//escreva de 0 a 10 de 2 em dois

let numero = 0
while(numero <= 10){
    console.log(numero)
    numero+=2
}

// faça a soma de todos os números pares de 0 a 100 e mostre o resultado no console

let j = 0
let final = 100
let soma

while(j<=final){
    soma += j
    j += 2
}
while(j<=final){
    if(j%2==0 || j%5==0){
        soma += j
    }    
    j += 1
}
//fazer a soma de todos os números pares OU divisíveis por 5 no intervalo de 0 a 100