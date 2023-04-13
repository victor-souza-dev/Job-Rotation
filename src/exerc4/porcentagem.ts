import * as readlineSync from "readline-sync";
import { spawn } from "child_process";

const fs = require("fs");

const dados = JSON.parse(fs.readFileSync("./src/exerc4/valores.json"));

const valorTotal = dados.reduce(
  (acumulador: any, dado: any) => acumulador + dado.valor,
  0
);

const porcentagem = dados.map((value: Valores) => {
  const calcPorcentagem = Math.round((value.valor / valorTotal) * 100);
  console.log(
    `\nEstado: ${value.estado} / Valor: ${value.valor
      .toString()
      .replace(".", ",")} - ${calcPorcentagem}%`
  );
});

readlineSync.keyInPause("\nPressione qualquer tecla para continuar");
spawn("node", ["./src/index.js"], { stdio: "inherit" });
