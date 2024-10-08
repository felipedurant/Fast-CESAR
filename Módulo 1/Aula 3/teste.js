console.log("felipe é massa")
joão = 2
console.log(joão)

let usuario = {
    nome: "felipe",
    endereco: "rua jose cavalcante",
    idade: 22,
    id: 444222
}

console.log(usuario)

function calcular(numeroA, expoenteA, numeroB, expoenteB) {
    let resultado = (numeroA ** expoenteA) + (numeroB ** expoenteB)
    return resultado
}

let final = calcular(2, 3, 2, 3)
console.log(final)

let somaDeQuadrados = (a, b) => (a ** 2 + b ** 2)
//arrow function funciona melhor para funções inline
// nomeFuncao = (parametros) => (retorno)

console.log(somaDeQuadrados(2, 3))

let array = [1, 2, 3, 4]
array.forEach((elemento => console.log(elemento)))
// forEach chama a função que tá declarada dentro do argumento para cada elemento

// Esse padrão de como os parametrização dessa função que será chamada
// na varredura de uma lista segue para todos os métodos de varredura

console.log(array.filter(elemento => elemento != 2))
// filter é um método onde o filtro é a condicional existente no corpo da função
// passando pelo filtro todos aqueles elementos que passam no teste

console.log(array.map(elemento => elemento + 10))
// map é um método que basicamente é um forEach em que o retorno da função é organizado num array resultado

console.log(array.indexOf(elemento => elemento === 2))