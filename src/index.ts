import * as readlineSync from "readline-sync";
import { spawn } from "child_process";

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
    spawn("node", ["./src/exerc2/fibonacci.js"], { stdio: "inherit" });
    break;
  case 1:
    spawn("node", ["./src/exerc3/switchValor.js"], { stdio: "inherit" });
    break;
  case 2:
    spawn("node", ["./src/exerc4/porcentagem.js"], { stdio: "inherit" });
    break;
  case 3:
    spawn("node", ["./src/exerc5/invertendoStrings.js"], { stdio: "inherit" });
    break;
  default:
    console.log("Nenhuma opcao foi selecionada");
    break;
}
