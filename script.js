let Age = 23
let iAmHuman = true
let birthday = "Novembro"
let Name = "Luiz"
let NameFirstLetter = "L"
let NameLenght = 4

if( Age >= 18 ){
    console.log('É maior de idade')
}else{
    console.log('Não é maior de idade')
}

if( iAmHuman == true ){
    console.log('Sou Humano')
}else{
    console.log('não sou humano, sou um robô roubando dados kk')
}

if( birthday == "Janeiro" || birthday == "Dezembro" ){
    console.log('Parabéns')
} else{
    console.log('Não é seu aniversário')
}

if( NameFirstLetter == "R" ){
    console.log('Começa pela letra R')
} else{
    console.log('Não começa pela letra R')
}

if( NameLenght > 6 || NameFirstLetter == "E" ){
    console.log('OK')
} else{
    console.log('Acesso Negado')
}