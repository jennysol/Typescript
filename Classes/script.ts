// 1) Fix code js for ts

function textNormalize(text: string) {
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

function calcGain(value: number) {
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
