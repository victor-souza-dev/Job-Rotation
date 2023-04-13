"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const readline_sync_1 = __importDefault(require("readline-sync"));
const number = parseInt(readline_sync_1.default.question("\nDigite um numero: "));
(function isFibonacciNumber(n) {
    let [existente, inexistente] = ["Existente", "Inexistente"];
    let a = 0;
    let b = 1;
    while (b < n) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    console.log(`${b === n ? existente : inexistente} na sequência de Fibonacci!`);
})(number);
readline_sync_1.default.keyInPause("\nPressione qualquer tecla para continuar");
(0, child_process_1.spawn)("node", ["./src/index.js"], { stdio: "inherit" });
