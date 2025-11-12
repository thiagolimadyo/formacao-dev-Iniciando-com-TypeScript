import sum from "../../src/tipos/sum";

test("Deve retornar o valor da soma de 2 números", () => {
  const result = sum(10, 20);
  expect(result).toBe(30);
});
