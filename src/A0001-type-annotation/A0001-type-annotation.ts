// Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'Luiz'; // Qualquer tipo de strings: '' "" ``
let idade: number = 0b1010; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; // bigint

//Array
let arrayDeNumeros: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8]
let arrayDeNumeros2: number[] = [1, 2, 3, 4, 5, 6, 7, 8]
let arrayDeStrings: Array<string> = ['a', 'b', 'c', 'd', 'e', 'f']
let arrayDeStrings2: string[] = ['a', 'b', 'c', 'd', 'e', 'f']

//Objeto
let pessoa: { nome: string, idade: number, adulto?: boolean } = {
  idade: 26,
  nome: 'Laian',
}

//Funções
function soma(x: number, y: number) {
  return x + y
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
