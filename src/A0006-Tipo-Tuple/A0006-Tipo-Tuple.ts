const dadosClient1: readonly [number, string] = [1, 'Laian'];
const dadosClient3: [number, string, string] = [1, 'Laian', 'Ribas'];
const dadosClient2: [number, string, string?] = [1, 'Laian'];
const dadosClient4: [number, string, ...string[]] = [1, 'Laian', 'Ribas'];

console.log(dadosClient1)
console.log(dadosClient2)
console.log(dadosClient3)
console.log(dadosClient4)

const array1: readonly string[] = ['Laian', 'Ribas'];
const array2: ReadonlyArray<string> = ['Ribas', 'Laian'];

console.log(array1)
console.log(array2)
