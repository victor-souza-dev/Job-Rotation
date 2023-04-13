"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const readline_sync_1 = __importDefault(require("readline-sync"));
const string = readline_sync_1.default.question("\nDigite uma palavra para inverter: ");
let stringInvertida = "";
for (let i = string.length; i >= 0; i--) {
    stringInvertida = stringInvertida + string.charAt(i);
}
console.log(stringInvertida);
readline_sync_1.default.keyInPause("\nPressione qualquer tecla para continuar");
(0, child_process_1.spawn)("node", ["./src/index.js"], { stdio: "inherit" });
