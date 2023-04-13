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
console.log("Bem-vindo ao meu programa!");
const options = [
    "Verificar numero de Fibonacci",
    "Menor e maior valor de Faturamento",
    "Porcentagem de valores dos Estados",
    "Invertendo Caracteres",
];
const index = readlineSync.keyInSelect(options, "Escolha uma opcao:");
switch (index) {
    case 0:
        (0, child_process_1.spawn)("node", ["./src/exerc2/fibonacci.js"], { stdio: "inherit" });
        break;
    case 1:
        (0, child_process_1.spawn)("node", ["./src/exerc3/switchValor.js"], { stdio: "inherit" });
        break;
    case 2:
        (0, child_process_1.spawn)("node", ["./src/exerc4/porcentagem.js"], { stdio: "inherit" });
        break;
    case 3:
        (0, child_process_1.spawn)("node", ["./src/exerc5/invertendoStrings.js"], { stdio: "inherit" });
        break;
    default:
        console.log("Nenhuma opcao foi selecionada");
        break;
}
