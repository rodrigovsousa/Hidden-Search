const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})

/* Aqui ele definiu as constantes, com base no HTML e usou o querySelector 
para pegar as classes do HTML, isso é padrão. 

O evento btn ficou esperando o click para acionar a chamada da arrow function que é 
para adicionar e tirar a classe "active" no search do HTML.
O input.focus é para permitir que ele se expanda.*/
