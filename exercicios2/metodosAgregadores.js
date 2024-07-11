// let frutas = ['maça', 'uva', 'banana']

let numeros = [1,2,3,4]

//sem necessidade de armazenar retorno 
// let retorno = frutas.forEach((FRUTA)=>console.log(FRUTA.toUpperCase()))
// console.log(frutas)

let numerosDobro = numeros.map((num)=>{console.log(num)
    return num*2} )

    //filter
    let par = numeros.filter((x)=>{
        if (x%2==0) {
            return x
        }

    
    })


    //construir um array de 4 objetos. Cada objeto terá as seguintes chaves: nome, noeta. Sendo a nota entre 0 e 10. 

    let alunos = [

        {
            nome: 'ana',
            nota: 8 
        },

        {
            nome: 'Paulo',
            nota: 10
        },

        {
            nome: 'Maria',
            nota: 5
        },

        {
            nome: 'José',
            nota: 7
        },

    ]
        //montar um array de objetos, contendo apenas nos aprovados (nota maior que 7)

    let filtroAprovados = alunos.filter((item)=>{
        if (item.nota >= 7) {
            return item.nome/// todo o objeto
        }

    })


    let nomeAprovados = filtroAprovados.map((elemento)=> elemento.nome)

    let notas = filtroAprovados.map((elemento)=> elemento.nota)

    let somaNotas = filtroAprovados.map((elemento)=> elemento.notas)
    
    let somaNumeros = numeros.reduce((soma, num)=> soma += num, 100)

    console.log(somaNumeros)

    //crie um array com as pessoas (objeto) que recebem mais que 4 mil reais de salário.
    