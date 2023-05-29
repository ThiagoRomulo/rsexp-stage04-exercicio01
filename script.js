// Criação de variáveis
let firstNumber
let secondNumber

let add
let sub
let mul
let div
let mod

let verifyPair
let pair
let equal

// Entradas do usuário
firstNumber = prompt("Digite o primeiro número:")
secondNumber = prompt("Digite o segundo número:")

// Processamento dos dados
firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

add = (firstNumber + secondNumber)
sub = (firstNumber - secondNumber)
mul = (firstNumber * secondNumber)
div = (firstNumber / secondNumber)
mod = (firstNumber % secondNumber)

add = String(add)

for(let char of add){
  verifyPair = char
}

if (verifyPair == 0 || verifyPair == 2 || verifyPair == 4 || verifyPair == 6 || verifyPair == 8) {
  pair = "Par"
} else {
  pair = "Ímpar"
}

if (sub == 0){
  equal = "Iguais"
} else {
  equal = "Diferentes"
}

add = Number(add)

// Saída das informações
alert(`A soma dos dois números é: ${add}`)
alert(`A subtração dos dois números é: ${sub}`)
alert(`A multiplicação dos dois números é: ${mul}`)
alert(`A divisão dos dois números é: ${div}`)
alert(`O resto da divisão dos dois números é: ${mod}`)
alert(`A soma dos dois números é ${pair}: ${add}`)
alert(`Os números inseridos são ${equal}.`)