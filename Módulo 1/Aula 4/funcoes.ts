let aviso: string = "pane no sistema"
let numero: number = 2

let somar = (a: number, b: number): void => console.log(a + b)
//declaração de uma arrow fucntion em ts
// let nomeFuncao = (parametroA: tipo, parametroB: tipo): tipo da saída => retorno

function subtracao(a: number, b: number): number {
    return a - b
}

let resultado: number = subtracao(3, 3)
console.log(resultado)
somar(2, 3)

let calculadora = (primeiro: number, segundo: number, operacao: string): number => {
    if (operacao == "+")
        return primeiro + segundo
    if (operacao == "-")
        return primeiro - segundo
    if (operacao == "*")
        return primeiro * segundo
    else { return primeiro / segundo }
}

console.log(calculadora(2, 3, "/"))

