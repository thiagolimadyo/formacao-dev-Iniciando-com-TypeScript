class DesafioEstatico {
  nota: number = 1000;

  static executar(n: number) {
    console.log(n);
  }
}

DesafioEstatico.executar((new DesafioEstatico().nota = 10));
