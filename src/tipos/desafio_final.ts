// Criar um type ContaCorrente (numero, saldo, movimentar)
type ContaCorrente = {
  numero: number;
  saldo: number;
  movimentarConta?: (numConta: number, valor: number) => void;
};

// Criar um type Cliente (nome, email, contas[])
type Cliente = {
  nome: string;
  email: string;
  contas: ContaCorrente[];
};

// const clientes: Clientes[] = [...]
const clientes: Cliente[] = [];

// movimentarConta(numConta, valor)
const cliente1: Cliente = {
  nome: "Joana Dark",
  email: "j.dark@email.com",
  contas: [],
};

cliente1.contas.push({ numero: 1001, saldo: 0 }, { numero: 1002, saldo: 0 });

const cliente2: Cliente = {
  nome: "Xuxa da Silva",
  email: "x.silva@email.com",
  contas: [],
};

cliente2.contas.push({ numero: 1003, saldo: 0 }, { numero: 1004, saldo: 0 });

clientes.push(cliente1);
clientes.push(cliente2);

function movimentarConta(numConta: number, valor: number): void {
  clientes
    .map((cliente) => cliente.contas)
    .map((contas) => {
      for (let conta of contas) {
        if (conta.numero === numConta) {
          console.log("Conta:", conta.numero);
          console.log("\tSaldo Anterior:", conta.saldo);
          console.log("\tSaldo Atualizado:", (conta.saldo += valor));
        }
      }
    });
}

function impressao() {
  for (let cliente of clientes) {
    console.log(`Nome do Cliente: `, cliente.nome);
    cliente.contas.forEach((conta) => {
      console.log(`\tConta Corrente: `, conta.numero, `Saldo: `, conta.saldo);
    });
    console.log("");
  }
}

console.clear();

impressao();
movimentarConta(1001, -1000);
movimentarConta(1002, 3000);
impressao();
