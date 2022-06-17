let Age = 23
let iAmHuman = true
let birthday = "Novembro"
let Name = "Luiz"

if( Age >= 18 ){
    console.log('É maior de idade')
}else{
    console.log('Não é maior de idade')
}

if( Age >= 18 && iAmHuman === true ){
    console.log('Tenho mais de 18 anos e Sou humano')
}else{
    console.log('Não é maior de idade ou não é humano, é um robô roubando dados kk')
}

if( birthday == "Janeiro" || birthday == "Dezembro" ){
    console.log('Parabéns')
} else{
    console.log('Não é seu aniversário')
}

if (Name.substring(0, 1) === "R"){
    console.log('verdade')
}else {
    console.log('mentira tem perna curta')
}

if (Name.length > 6 || Name.substring(0, 1) === "E"){
    console.log('verdade')
}else {
    console.log('nenhuma das condições se aplica')
}


