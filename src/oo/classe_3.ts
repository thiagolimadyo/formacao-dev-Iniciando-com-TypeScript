import Validador from "./validador";

class Produto {
  constructor(
    readonly id: number,
    readonly nome: string,
    readonly preco: number,
    readonly desconto: number
  ) {
    Validador.maiorQueZero(id, "ID inválido");
    Validador.tamanhoEntre(nome, 3, 250, "Tamanho do nome inválido!");

    // if (nome.length < 2 || nome.length > 250)
    //   throw new Error(`Tamanho do nome inválido: ${nome}`);

    if (preco <= 0) throw new Error(`Preço deve ser maior que zero: ${preco}`);

    Validador.entre(desconto, 0, 0.8, "Desconto deve ser entre 0 e 80%");
    // if (desconto < 0 || desconto > 0.8)
    //   throw new Error(`Desconto deve estar entre 0 e 80%: ${desconto}`);
  }

  //   precoFinal() {
  get precoFinal() {
    return this.preco * (1 - this.desconto);
  }
}

const p1 = new Produto(1, "ASUS VIVOBOOK S14", 1300, 0.1);
console.log(p1);
console.log(`\tPreço Final Com Desconto: R$`, p1.precoFinal);
