function temp(msg = "msg err!"): never {
  throw new Error(msg);
}

temp("Deu ruim...");
