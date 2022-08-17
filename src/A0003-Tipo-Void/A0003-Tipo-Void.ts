function semRetorno(...args: string[]): void {
  console.log(args.join(' '))
}

semRetorno('Laian', 'Ribas')

const pessoa = {
  nome: 'Laian',
  sobrenome: 'Ribas',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome)
  }
}

pessoa.exibirNome();

export { pessoa }
