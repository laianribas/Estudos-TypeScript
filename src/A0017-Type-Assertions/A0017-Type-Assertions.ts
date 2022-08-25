/* Recomendado */
//condicional
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red'

//type assertion
const body2 = document.querySelector('body') as HTMLBodyElement
body2.style.background = 'red'

//HTMLElement
const input1 = document.querySelector('.input') as HTMLInputElement
input1.value = 'Qualquer Coisa'
input1.focus()

/* Não Recomendado */
//type assertion
const body3 = document.querySelector('body') as unknown as number

//Non-null assertion
const body4 = document.querySelector('body')!
body4.style.background = 'red'
