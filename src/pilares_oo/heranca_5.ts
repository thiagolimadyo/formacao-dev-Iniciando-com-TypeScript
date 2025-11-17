abstract class Celular {
  ligar() {
    console.log("Em ligação...");
  }

  abstract acessarRedeMovel(): void;
}

class Iphone23Pro extends Celular {
  acessarRedeMovel(): void {
    console.log("Usando rede móvel 5G");
  }
}

class Galaxy99XPlayH2O extends Celular {
  acessarRedeMovel(): void {
    console.log("Usando rede 99G");
  }
}

let c1 = new Iphone23Pro();
c1.ligar();
c1.acessarRedeMovel();

c1 = new Galaxy99XPlayH2O();
c1.ligar();
c1.acessarRedeMovel();
