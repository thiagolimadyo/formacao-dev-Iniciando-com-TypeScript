class Carro {
  private velocidadeAtual: number = 0;
  protected readonly VELOCIDADE_MAXIMA: number = 200;

  constructor(public nome: string) {}

  get velocidade() {
    return this.velocidadeAtual;
  }

  protected alterarVelocidade(delta: number) {
    const novaVelocidade = this.velocidadeAtual + delta;

    if (novaVelocidade >= 0 && novaVelocidade <= this.VELOCIDADE_MAXIMA) {
      this.velocidadeAtual += delta;
    }
  }

  acelerar(valor: number) {
    this.alterarVelocidade(valor);
  }
}

const c1 = new Carro("Fuscão Presto");

console.log(c1.velocidade);
// console.log(c1.alterarVelocidade(10));
c1.acelerar(5);
c1.acelerar(20);
console.log(c1.velocidade);
