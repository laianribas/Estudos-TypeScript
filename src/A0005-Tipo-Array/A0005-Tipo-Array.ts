function multiply(...args: Array<number>): number {
  return args.reduce((a, b) => a * b, 1)
}

function concat(...args: string[]): string {
  return args.reduce((a, b) => a + b)
}

function toUpper(...args: string[]): string[] {
  return args.map((element) => element.toUpperCase())
}

const multiplyResult = multiply(1, 2, 3)
const concatResult = concat('a', 'b', 'c')
const toUpperResult = toUpper('a', 'b', 'c')

console.log(multiplyResult)
console.log(concatResult)
console.log(toUpperResult)

