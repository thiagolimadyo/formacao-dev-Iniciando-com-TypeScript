export function saudacao(nome: string): string {
  return `Olá, ${nome}. Passar bem!`;
}

export function multiplicar(a: number, b: number): number {
  return a * b;
}

export function multiplicarPerigosa(a: any, b: any): number {
  return a * b;
}

export function imprimirNoConsole(): void {
  console.log("Função que não tem retorno");
}
imprimirNoConsole();
