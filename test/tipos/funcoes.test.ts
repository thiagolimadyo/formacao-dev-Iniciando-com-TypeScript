import {
  multiplicar,
  multiplicarPerigosa,
  saudacao,
} from "../../src/tipos/funcoes";

test("Deve retornar uma saudacao no formato string", () => {
  const result = saudacao("Xuxa da Silva");
  expect(result).toBe("Olá, Xuxa da Silva. Passar bem!");
});

test("Deve multiplicar 2 numeros", () => {
  const result = multiplicar(10, 20);
  expect(result).toBe(200);
});

test("Deve receber uma string e retornar NaN", () => {
  const result = multiplicarPerigosa("a", 10);
  expect(result).toBeNaN();
});
