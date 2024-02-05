// Crie uma função que arredonda um valor passado pra ela
// A função pode receber string ou number
// A função deve retornar o mesmo tipo que receber

function round(n: number): number;
function round(n: string): string;

function round(n: string | number): string | number {
  if (typeof n === "number") {
    return Math.round(n);
  } else {
    return Math.ceil(Number(n)).toString();
  }
}

console.log(round("3.3"), typeof round("3.3"));
console.log(round(2.2), typeof round(2.2));
