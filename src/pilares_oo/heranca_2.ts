interface Entidade {
  id: number;
}

interface Vendavel {
  nome: string;
  preco: number;
  desconto: number;
}

class Produto implements Entidade, Vendavel {
  constructor(
    readonly id: number,
    readonly nome: string,
    readonly preco: number,
    readonly desconto: number
  ) {}

  get precoFinal() {
    return this.preco * (1 - this.desconto);
  }
}

const p1 = new Produto(10, "carrinho de feira amarelo", 15, 0.1);
console.log(p1);
console.log(p1.precoFinal);
