class Curso {
  constructor(readonly id: number, public nome?: string) {}
}

console.clear();

const c1 = new Curso(1, "Curso Iniciando com TypeScript");
console.log(c1);

const c2 = new Curso(2);
c2.nome = "Custo 2";
console.log(c2);

export {};
