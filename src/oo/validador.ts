export default class Validador {
  static maiorQueZero(n: number, msgErro: string) {
    if (n <= 0) throw new Error(msgErro);
  }

  static tamanhoEntre(t: string, min: number, max: number, msgErro: string) {
    Validador.entre(t.length, min, max, msgErro);
  }

  static entre(n: number, min: number, max: number, msgErro: string) {
    if (n < min || n > max) throw new Error(msgErro);
  }
}
