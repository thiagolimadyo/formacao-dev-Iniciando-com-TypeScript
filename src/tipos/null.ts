type Usuario = {
  name: string;
  email: string;
};

const usuarios: Usuario[] = [
  { name: "Joana Dark", email: "j.dark@email.com" },
  { name: "xuxa da silva", email: "x.silva@email.com" },
];

function findByEmail(email: string): Usuario | null {
  return usuarios.find((usuario) => usuario.email === email) ?? null;
}

console.log(findByEmail("j.dark@email.com"));
