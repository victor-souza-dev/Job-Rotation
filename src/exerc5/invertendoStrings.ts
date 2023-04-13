import { spawn } from "child_process";
import readlineSync from "readline-sync";

const string = readlineSync.question("\nDigite uma palavra para inverter: ");
let stringInvertida = "";
for (let i = string.length; i >= 0; i--) {
  stringInvertida = stringInvertida + string.charAt(i);
}
console.log(stringInvertida);

readlineSync.keyInPause("\nPressione qualquer tecla para continuar");
spawn("node", ["./src/index.js"], { stdio: "inherit" });
