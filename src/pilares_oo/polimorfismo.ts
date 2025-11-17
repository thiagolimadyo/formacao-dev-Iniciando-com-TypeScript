abstract class Animal {
  abstract emitirSom(): string;
}

class Gato extends Animal {
  emitirSom(): string {
    return "miau";
  }
}

class Cachorro extends Animal {
  emitirSom(): string {
    return "auau";
  }
}

function exibir(animal: Animal) {
  console.log(animal.emitirSom());
}

let a1 = new Gato();
exibir(a1);

a1 = new Cachorro();
exibir(a1);
