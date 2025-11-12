// Criar um type ContaCorrente (numero, saldo, movimentar)
type ContaCorrente = {
  numero: number;
  saldo: number;
  movimentar: (valor: number) => void;
};

function movimentar(this: ContaCorrente, valor: number): void {
  this.saldo += valor;
}

// Criar um type Cliente (nome, email, contas[])
type Cliente = {
  nome: string;
  email: string;
  contas: ContaCorrente[];
};

// const clientes: Clientes[] = [...]
const clientes: Cliente[] = [
  {
    nome: "Joana Dark",
    email: "j.dark@email.com",
    contas: [
      {
        numero: 1001,
        saldo: 0,
        movimentar,
      },
      {
        numero: 1002,
        saldo: 0,
        movimentar,
      },
    ],
  },
  {
    nome: "Xuxa da Silva",
    email: "x.silva@email.com",
    contas: [
      {
        numero: 1003,
        saldo: 0,
        movimentar,
      },
      {
        numero: 1004,
        saldo: 0,
        movimentar,
      },
    ],
  },
  {
    nome: "João do Pulo",
    email: "j.pulo@email.com",
    contas: [
      {
        numero: 1005,
        saldo: 0,
        movimentar,
      },
      {
        numero: 1006,
        saldo: 0,
        movimentar,
      },
    ],
  },
];

function movimentarConta(numconta: number, valor: number): void {
  const conta = clientes
    .flatMap((cliente) => cliente.contas)
    .find((cc) => cc.numero === numconta);

  conta?.movimentar(100);
}

function consultarSaldo(numConta: number): number | undefined {
  // const contas = clientes.map((cliente) => cliente.contas).flat();
  const result = clientes
    .flatMap((clientes) => clientes.contas.find((cc) => cc.numero === numConta))
    .filter((cc) => cc);
  return result[0]?.saldo;
}

console.clear();

console.log(consultarSaldo(1001));
movimentarConta(1001, 100);
console.log(consultarSaldo(1001));
