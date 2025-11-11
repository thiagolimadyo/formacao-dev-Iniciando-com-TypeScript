// const VendaStatus = Object.freeze({
//   INICIADA: "iniciada",
//   CONCLUIDA: "concluida",
//   CANCELADA: "cancelada",
// });

const Erros = {
  NOME_NULO: "nome_nulo",
  EMAIL_NAO_ENCONTRADO: "email_nao_encontrado",
  URL_INVALIDA: "url_invalida",
} as const;

let erro: string;

erro = Erros.EMAIL_NAO_ENCONTRADO;
console.log(erro);

erro = "Deu ruim";
console.log(erro);
