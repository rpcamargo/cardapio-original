const lanches = {
    "lanche": [{
        "id": 1,
        "nome": 'Original Burguer',
        "descricao": 'Pão de hambúrguer, hambúrguer fraldinha 100g, mussarela, cheddar e molho especial',
        "preco": 20.00
    },
    {
        "id": 2,
        "nome": 'Original Salada',
        "descricao": 'Pão de hambúrguer, hambúrguer fraldinha 100g, mussarela, alface, tomate',
        "preco": 21.00
    },
    ,
    {
        "id": 3,
        "nome": 'Original Bacon',
        "descricao": 'Pão de hambúrguer, hambúrguer fraldinha 100g, bacon, mussarela, alface, tomate',
        "preco": 22.00
    },
    {
        "id": 4,
        "nome": 'Original Calabresa',
        "descricao": 'Pão de hambúrguer, hambúrguer fraldinha 100g, calabresa, mussarela, alface, tomate',
        "preco": 23.00
    },
    {
        "id": 5,
        "nome": 'Original Egg',
        "descricao": 'Pão de hambúrguer, hambúrguer fraldinha 100g, ovo, mussarela, alface, tomate',
        "preco": 24.00
    },
    {
        "id": 6,
        "nome": 'Original Tudo',
        "descricao": 'Pão de hambúrguer, hambúrguer fraldinha 100g, calabresa, ovo, bacon, mussarela, alface, tomate',
        "preco": 25.00
    }]
}

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

lanches.lanche.forEach( item => {
    window.onload = function (){
        let caixa = document.getElementById('caixa') // seleciona o html
        let h2 = document.createElement('h2') // cria o h2
        h2[item].setAttribute('class', 'titulo_lanche') // seta a classe titulo_lanche
        caixa.appendChild(h2[item]) // seta onde
    }
})

/*lanches.lanche.forEach( item => { // esta mandando para o lugar certo, mas não da maneira certa
    const h2 = document.getElementById('nome_lanche')
    const p = document.getElementById('descricao_lanche')
    h2.innerHTML = `${item.nome}`
    p.innerHTML = `${item.descricao}`
})*/

lanches.lanche.forEach( item => {
    const li = document.createElement('p')
    const texto = document.createTextNode(`${item.nome}: ${item.descricao}  R$ ${item.preco}`)
    li.append(texto);
    document.getElementById("exibirLanches").append(li)
})

bebidas.bebida.forEach( item => { // enquanto existir bebida(array) dentro do obj bebidas, vai pegar os valores e jogar para item
    const li = document.createElement('li')
    const texto = document.createTextNode(`${item.nome}: ${item.preco}`)// adiciona os item a variavel texto
    li.append(texto); // adiciona a string da variavel texto a variavel li
    document.getElementById("exibirBebidas").append(li) // pega o texto adicionado a variavel li e joga para o html com id exibirBebidas
})
