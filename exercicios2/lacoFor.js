
//escreva todos os númeors pares de 1 até 100.

for (let i = 0; i < 101; i+=2) {
    console.log(i);
    
}

//calcular a média de 4 notas 

//aritmética

let somaNotas 
let Media

for (let i = 1; i < 4; i++) {
    const element = array[i];
    somaNotas+= Number (prompt (`Digite a nota num ${i}`))
}
    
Media= somaNotas / i-1

//poderada

media = 0
somaNotas = 0
pesos = 0

for (let i = 1; i <= 12; i++) {
    if (i==2 || i==4) {
     somaNotas+= (Number (prompt (`Digite a nota num ${i}`)) *2)
     pesos += 2
    }

    else if(i == 3){
        somaNotas+= (Number (prompt (`Digite a nota num ${i}`)) *3)    
    }


   else{
    somaNotas += Number(prompt(`Digite a nota num ${i}`))
   }
   
   pesos+= 1

}