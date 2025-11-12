type Usuario = { name: string; email: string };

let usuario: Usuario = {
  name: "Xuxa da Silva",
  email: "xuxas@micron.com",
};

console.log(usuario.name, usuario.email);

usuario.name = "Joana Dark";
usuario.email = "j.dark@intel.com";
console.log(usuario);

let usuario2: Usuario = {
  name: "Perla",
  email: "perlita@uol.com.br",
};

console.log(usuario2);
