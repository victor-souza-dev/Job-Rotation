export const maiorValor = (dados: Array<Dados>): void => {
  const novosDados: Array<Dados> = dados.sort(
    (a: Dados, b: Dados) => b.valor - a.valor
  );

  const { dia, valor } = novosDados[0];
  console.log(`Dia: ${dia} / Valor: ${valor}`);
};
