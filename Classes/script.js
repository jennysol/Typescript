"use strict";
// 1) Fix code js for ts
function textNormalize(text) {
  return text.trim().toLowerCase();
}
console.log(textNormalize(" DesigN"));
// 2) Fix code js for ts
const input = document.querySelector("input");
const total = localStorage.getItem("total");
if (input && total) {
  input.value = total;
  calcGain(Number(input.value));
}
function calcGain(value) {
  const p = document.querySelector("p");
  if (p) {
    p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
  }
}
function totalMudou() {
  if (input) {
    localStorage.setItem("total", input.value);
    calcGain(Number(input.value));
  }
}
if (input) {
  input.addEventListener("keyup", totalMudou);
}
// 1 - Crie uma função chamada toNumber
// 2 - A função pode receber number | string
// 3 - Se a função receber um número, retorne um número
// 4 - Se a função receber uma string, retorne um número
// 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")
function toNumber(value) {
  if (typeof value === "number") {
    return value;
  } else if (typeof value === "string") {
    const numericValue = parseFloat(value);
    if (!isNaN(numericValue)) {
      return numericValue;
    } else {
      throw new Error(
        "O valor da string não pode ser convertido para um número"
      );
    }
  } else {
    throw new Error("value deve ser um número ou uma string");
  }
}
console.log(toNumber(true));
