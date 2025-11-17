interface Entidade {
  id: string;
}

interface EntidadeComDatas extends Entidade {
  criadoEm?: Date;
  atualizadoEm: Date | null;
  deletadoEm?: Date;
}

interface Vendavel {
  preco: number;
  desconto: number;
}

// Exemplo com USUÁRIO

interface Usuario extends EntidadeComDatas {
  nome: string;
  email: string;
  senha: string;
}

const u1: Usuario = {
  id: "001=00",
  nome: "Joana Dark",
  email: "joana.dark@tesla.com",
  senha: "aaa-111",
  criadoEm: new Date(),
  atualizadoEm: null,
};

console.log(u1);

// Exemplo com PRODUTO

interface Produto extends EntidadeComDatas, Vendavel {
  nome: string;
}

const p1: Produto = {
  id: "pro-001",
  nome: "Vassoura do Harry Potter - Edição de Natal",
  preco: 100,
  desconto: 0.05,
  atualizadoEm: new Date(),
};

console.log(p1);
