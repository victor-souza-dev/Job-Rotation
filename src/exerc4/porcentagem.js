"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
const child_process_1 = require("child_process");
const fs = require("fs");
const dados = JSON.parse(fs.readFileSync("./src/exerc4/valores.json"));
const valorTotal = dados.reduce((acumulador, dado) => acumulador + dado.valor, 0);
const porcentagem = dados.map((value) => {
    const calcPorcentagem = Math.round((value.valor / valorTotal) * 100);
    console.log(`\nEstado: ${value.estado} / Valor: ${value.valor
        .toString()
        .replace(".", ",")} - ${calcPorcentagem}%`);
});
readlineSync.keyInPause("\nPressione qualquer tecla para continuar");
(0, child_process_1.spawn)("node", ["./src/index.js"], { stdio: "inherit" });
