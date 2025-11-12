// export let operacao: (a: number, b: number) => number;
type Operacao = (a: number, b: number) => number;
let operacao: Operacao;

function somar(n1: number, n2: number): number {
  return n1 + n2;
}

function multiplicar(n1: number, n2: number): number {
  return n1 * n2;
}
operacao = somar;
console.log(operacao(10, 200));

operacao = multiplicar;
console.log(operacao(10, 20));
