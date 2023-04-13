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
const child_process_1 = require("child_process");
const readlineSync = __importStar(require("readline-sync"));
const maiorValor_1 = require("./maiorValor");
const menorValor_1 = require("./menorValor");
const fs = require("fs");
const dados = JSON.parse(fs.readFileSync("./src/exerc3/dados.json")).filter((value) => value.valor > 0);
const continuar = () => {
    readlineSync.keyInPause("\nPressione qualquer tecla para continuar");
    (0, child_process_1.spawn)("node", ["./src/exerc3/switchValor.js"], { stdio: "inherit" });
};
const options = ["Valor maior", "Valor menor", "Voltar"];
const index = readlineSync.keyInSelect(options, "Escolha uma opcao:");
switch (index) {
    case 0:
        (0, maiorValor_1.maiorValor)(dados);
        continuar();
        break;
    case 1:
        (0, menorValor_1.menorValor)(dados);
        continuar();
        break;
    case 2:
        (0, child_process_1.spawn)("node", ["./src/index.js"], { stdio: "inherit" });
        break;
    default:
        console.log("Nenhuma opcao foi selecionada");
        break;
}
