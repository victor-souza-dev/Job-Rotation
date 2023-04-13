import { spawn } from "child_process";
import readlineSync from "readline-sync";

const number = parseInt(readlineSync.question("\nDigite um numero: "));

(function isFibonacciNumber(n: number): void {
  let [existente, inexistente]: Array<String> = ["Existente", "Inexistente"];
  let a: number = 0;
  let b: number = 1;
  while (b < n) {
    let temp: number = b;
    b = a + b;
    a = temp;
  }
  console.log(
    `${b === n ? existente : inexistente} na sequência de Fibonacci!`
  );
})(number);

readlineSync.keyInPause("\nPressione qualquer tecla para continuar");
spawn("node", ["./src/index.js"], { stdio: "inherit" });
