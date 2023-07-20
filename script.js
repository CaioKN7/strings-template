//Prática 1

//function imprimirPessoa (){

//    const nome = prompt ("digite seu nome")
//    const corFavorita = prompt ("digite sua cor favorita")
//    console.log("A cor favorita de " + nome + " é " + corFavorita + ".")


//    console.log(`A cor favorita de ${nome} é ${corFavorita}.`)
//}

//imprimirPessoa()

//Prática 2

//function imprimirPessoa (){

//    const nome = prompt ("digite seu nome")
//    const corFavorita = prompt ("digite sua cor favorita")
//    const citacao = prompt("Digite sua citação favorita")
//    console.log(`A cor favorita de ${nome} é ${corFavorita}.`)
//    console.log("\""+citacao+"\"")
//    console.log(`Nome: ${nome} \nCor favorita: ${corFavorita}`)
//    \"
//}

//imprimirPessoa()

//Prática 3

//const nome = prompt ("digite seu nome")
//   const corFavorita = prompt ("digite sua cor favorita")
//    console.log(`A cor favorita de ${nome.toUpperCase()} é ${corFavorita}.`)
//    console.log(nome.length)
//    console.log(nome.includes("a"))


//Prática extra

function verificaLogin (){

  const nome = prompt ("digite seu nome")
  const email = prompt ("digite seu melhor e-mail")
  const frase = (`O e-mail ${email} foi cadastrado\nBoas vindas ${nome}. A quantidade de caracteres no seu nome é ${nome.length}!`)
  console.log(frase.replaceAll("r", "x"))
  console.log(`O email ${email} possui o caracter "@"? ${email.includes("@")}` )
}


verificaLogin()