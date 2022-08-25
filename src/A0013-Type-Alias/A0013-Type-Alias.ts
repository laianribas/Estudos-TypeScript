type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string
}

type CorRGB = 'Vermelho' | 'Verde' | 'Azul'
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto'
type CorPreferida = CorRGB | CorCMYK

export const pessoa: Pessoa = {
  idade: 30,
  nome: 'Laian',
  salario: 600
}

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor }
}

console.log(setCorPreferida(pessoa, 'Ciano'))
console.log(pessoa)
