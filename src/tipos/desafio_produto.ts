// Deve ter nome, preço, desconto(entre 0 e 1) e uma função precoComDesconto

type Produto = {
  nome: string;
  preco: number;
  desconto: number;
  precoComDesconto: () => number;
};

let notebook: Produto = {
  nome: "Surface Laptop 7",
  preco: 1000.0,
  desconto: 0.1,
  precoComDesconto() {
    return this.preco * (1 - this.desconto);
  },
};

console.log(`
    \tNome do Produto: ${notebook.nome}\n
    \tPreço do Produto: ${notebook.preco}\n
    \tDescoto: ${notebook.desconto}\n
    \tPreço com Desconto: ${notebook.precoComDesconto()}
    `);
