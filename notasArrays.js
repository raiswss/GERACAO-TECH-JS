// crie uma função que armazena 3 notas, lidas do usuário, em um array. O último elemento do array será a media calculada a partir das notas informadas pelo usuário.
//retorne o array


function media3notas(){
    let notas=[]
    for(let i = 1 ; i<=3; i++){
        notas[i-1]= Number(prompt(`Digite a ${i}º nota`))
    }
    notas[notas.length]=(notas[0]+ notas[1] + notas[2]) / notas.length
    return notas
}
// [ n1, n2, n3, media]


// let arrayNotas = media3notas()


let arrayNotas = [1,2,3]
console.log(arrayNotas)
arrayNotas[3]= 'A'
console.log(arrayNotas)
//adiciona ao final
arrayNotas.push('B')
console.log(arrayNotas)
//exclusao do ultimo elemento
let excluido = arrayNotas.pop()
console.log(arrayNotas)
console.log(excluido)

//adiciona ao inicio
arrayNotas.unshift('inicio')
console.log(arrayNotas)
//remover do inico
console.log(arrayNotas.shift())
console.log(arrayNotas)