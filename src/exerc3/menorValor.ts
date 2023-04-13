export const menorValor = (dados: Array<Dados>): void => {
  const novosDados: Array<Dados> = dados.sort(
    (a: Dados, b: Dados) => a.valor - b.valor
  );

  const { dia, valor } = novosDados[0];
  console.log(`Dia: ${dia} / Valor: ${valor}`);
};
