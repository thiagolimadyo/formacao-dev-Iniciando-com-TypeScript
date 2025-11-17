interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha: string;
}

interface CasoDeUso {
  executar(entrada: any): any;
}

class RegistrarUsuario implements CasoDeUso {
  executar(usuario: Usuario) {
    console.log("Registrando usuário...");
    console.log(usuario);
  }
}

const u1: Usuario = {
  id: 1,
  nome: "Joana Dark",
  email: "j.dark@email.com",
  senha: "1234",
};

const casoDeUso: CasoDeUso = new RegistrarUsuario();
casoDeUso.executar(u1);
