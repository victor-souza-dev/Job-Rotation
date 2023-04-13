import { spawn } from "child_process";
import * as readlineSync from "readline-sync";
import { maiorValor } from "./maiorValor";
import { menorValor } from "./menorValor";

const fs = require("fs");

const dados = JSON.parse(fs.readFileSync("./src/exerc3/dados.json")).filter(
  (value: Dados) => value.valor > 0
);

const continuar = (): void => {
  readlineSync.keyInPause("\nPressione qualquer tecla para continuar");
  spawn("node", ["./src/exerc3/switchValor.js"], { stdio: "inherit" });
};

const options = ["Valor maior", "Valor menor", "Voltar"];
const index = readlineSync.keyInSelect(options, "Escolha uma opcao:");
switch (index) {
  case 0:
    maiorValor(dados);
    continuar();
    break;
  case 1:
    menorValor(dados);
    continuar();
    break;
  case 2:
    spawn("node", ["./src/index.js"], { stdio: "inherit" });
    break;

  default:
    console.log("Nenhuma opcao foi selecionada");
    break;
}
