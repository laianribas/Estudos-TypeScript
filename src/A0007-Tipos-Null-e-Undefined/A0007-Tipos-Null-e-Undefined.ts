let x
if (typeof x === 'undefined') {
  x = 20
}

console.log(x * 2)

export function createUser(
  //parametros
  name: string,
  lastName?: string,
): {
  //definição dos tipos
  name: string;
  lastName?: string;
} {
  //Instruções da função
  return {
    name,
    lastName
  }
}

export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwo = squareOf(2)

if (squareOfTwo === null) {
  console.log('Conta Inválida')
} else {
  console.log(squareOfTwo)
}
