let numUser = prompt(`Digite o primeiro num`)


let numMaior = numUser
let numMenor = numMenor
let qtdNumeros = 10

for (let i = 2 ; i <=qtdNumeros ; i++) {
  if(numUser > numMaior){
    numMaior = numUser
  }else if (numUser < numMenor) {
    numMenor = numUser
  }



  numUser = prompt(`Digite o ${i}`)
  


}
