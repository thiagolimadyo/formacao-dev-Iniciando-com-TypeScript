interface Usuario {
  id?: number;
  nome: string;
  email: string;
  senha?: string;
}

const usuarioLogado: Usuario = {
  id: 10,
  nome: "Xuxa da Suilva",
  email: "x.silva@microsoft.com",
};

console.log(usuarioLogado);

const usuarioOpcional: Partial<Usuario> = {
  nome: "Joana Dark",
};

console.log(usuarioOpcional);

const usuarioCompleto: Required<Usuario> = {
  id: 10,
  nome: "Dom Pedro",
  email: "d.predo@ig.com.br",
  senha: "1234",
};

console.log(usuarioCompleto);
