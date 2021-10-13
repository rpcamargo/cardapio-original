const bebidas = {
    "bebida": [
        {
            "id": 1,
            "nome": 'Coca Cola',
            "preco": 5.00
        },
        {
            "id": 2,
            "nome": 'Fanta',
            "preco": 6.00,
        },
        {
            "id": 3,
            "nome": 'Água',
            "preco": 3.00
        }
    ]
}


bebidas.bebida.forEach( item => { // enquanto existir bebida(array) dentro do obj bebidas, vai pegar os valores e jogar para item
    const li = document.createElement('li')
    const texto = document.createTextNode(`${item.nome}: R$${item.preco}`)// adiciona os item a variavel texto
    li.append(texto); // adiciona a string da variavel texto a variavel li
    document.getElementById("exibirBebidas").append(li) // pega o texto adicionado a variavel li e joga para o html com id exibirBebidas
})