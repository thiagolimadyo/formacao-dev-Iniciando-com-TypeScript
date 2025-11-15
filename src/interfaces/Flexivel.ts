interface Flexivel {
  nome: string;
  [chave: string]: number | string | boolean; //index signature
}

const flexivel1: Flexivel = {
  nome: "Joana Dark",
  idade: "100",
  cidade: "São Paulo",
  isAdmin: true,
};

console.log(flexivel1);
