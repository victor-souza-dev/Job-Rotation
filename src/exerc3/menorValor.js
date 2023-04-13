"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menorValor = void 0;
const menorValor = (dados) => {
    const novosDados = dados.sort((a, b) => a.valor - b.valor);
    const { dia, valor } = novosDados[0];
    console.log(`Dia: ${dia} / Valor: ${valor}`);
};
exports.menorValor = menorValor;
