"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maiorValor = void 0;
const maiorValor = (dados) => {
    const novosDados = dados.sort((a, b) => b.valor - a.valor);
    const { dia, valor } = novosDados[0];
    console.log(`Dia: ${dia} / Valor: ${valor}`);
};
exports.maiorValor = maiorValor;
