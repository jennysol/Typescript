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

// 1 - Crie uma função chamada toNumber
// 2 - A função pode receber number | string
// 3 - Se a função receber um número, retorne um número
// 4 - Se a função receber uma string, retorne um número
// 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")

function toNumber(value: number | string): number | string {
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

console.log(toNumber("100"));

// Consult api with interface

interface Empresa {
  nome: string;
  fundacao: number;
  país: string;
}

interface Product {
  nome: string;
  descricao: string;
  garantia: string;
  preco: number;
  seguroAcidentes: boolean;
  empresaFabricante: Empresa;
  empresaMontadora: Empresa;
}

function showProduct(data: Product) {
  document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
      <p> ${data.preco}</p>
      <div>
        <h3>Fabricante : ${data.empresaFabricante.nome}</h3>
      </div>
      <div>
        <h3>Montadora : ${data.empresaMontadora.nome}</h3>
      </div>
    </div>
  `;
}

async function fetchProduct() {
  const response = await fetch("http://api.origamid.dev/json/notebook.json");
  const data = await response.json();
  console.log("Responde fetch products", data);

  showProduct(data);
}

fetchProduct();

// 2 Consult array interface

interface Curso {
  nome: string;
  aulas: string;
  gratuito: boolean;
  horas: number;
  idAulas: number[];
  nivel: "iniciante" | "avancado";
  tags: string[];
}

function showCurso(cursos: Curso[]) {
  cursos.forEach((curso) => {
    let color;
    if (curso.nivel === "iniciante") {
      color = "blue";
    } else if (curso.nivel === "avancado") {
      color = "red";
    }

    document.body.innerHTML += `
      <div>
        <h2 style="color: ${color}">${curso.nome}</h2>
        <p> Horas: ${curso.horas}</p>
        <p> Aulas : ${curso.aulas}</p>
        <p> Tipo : ${curso.gratuito ? "Gratuito" : "Pago"}</p>
        <p> Tags: ${curso.tags.join(", ")}</p>
        <p> Aulas: ${curso.idAulas.join(" | ")}</p>
      </div>
    `;
  });
}

async function fetchCursos() {
  const response = await fetch("http://api.origamid.dev/json/cursos.json");
  const data = await response.json();
  console.log("Responde fetch cursos", data);

  showCurso(data);
}

fetchCursos();
