interface OperacaoMatematicaObj {
  fn: (n1: number, n2: number) => number;
}

const somaObj: OperacaoMatematicaObj = {
  fn(n1: number, n2: number) {
    return n1 + n2;
  },
};

console.log(somaObj.fn(10, 20));

interface OperacaoMatematica {
  (n1: number, n2: number): number;
}

const soma: OperacaoMatematica = (n1: number, n2: number) => {
  return n1 + n2;
};

console.log(soma(1000, 20000));
