class Carro {
  private _velocidade: number = 0;

  constructor(readonly velocidadeMaxima: number = 200) {}

  get velocidade() {
    return this._velocidade;
  }

  public acelerar(): void {
    this.alterarVelocidade(5);
  }

  public frear(): void {
    this.alterarVelocidade(-5);
  }

  protected alterarVelocidade(delta: number) {
    const novaVelocidade = (this._velocidade += delta);

    if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
      this._velocidade = novaVelocidade;
    }
  }
}

class Fusca extends Carro {
  constructor(readonly nome: string) {
    super(165);
  }
}

let carro = new Fusca("Fusca");

carro.acelerar();
console.log(carro.nome);
console.log(carro.velocidade);
console.log(carro.velocidadeMaxima);

class Ferrari extends Carro {
  constructor(readonly nome: string) {
    super(350);
  }

  public acelerar(): void {
    this.alterarVelocidade(30);
  }
  public frear(): void {
    this.alterarVelocidade(-30);
  }
}

carro = new Ferrari("Ferrari");
carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.frear();
console.log(carro.nome);
console.log(carro.velocidade);
console.log(carro.velocidadeMaxima);
