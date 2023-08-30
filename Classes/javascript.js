const input = document.querySelector("input");

const total = localStorage.getItem("total");
input.value = total;
calcGain(input.value);

function calcGain(value) {
  const p = document.querySelector("p");
  p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
}

function totalMudou() {
  const value = Number(input.value);
  localStorage.setItem("total", value);
  calcGain(value);
}

input.addEventListener("keyup", totalMudou);
