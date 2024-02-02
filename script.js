const items = [
    {
        id: 0, 
        name: "camisa 1",
        price: 10,
        img: 'img.jpg',
        quantidade: 0

    },

    {
        id: 1, 
        name: "camisa 2",
        price: 10,
        img: 'img.jpg',
        quantidade: 0

    },

    {
        id: 2, 
        name: "camisa 3",
        price: 10,
        img: 'img.jpg',
        quantidade: 0

    }
]



inicializarLoja = () => {
    var containerProdutos = document.getElementById('produtos');
    items.map((val)=>{
    containerProdutos.innerHTML+= `
    <div class="produto-single">
    <img src="`+val.img+ `" />
    <p>`+val.name+`</p>
    <a key="`+val.id+`" href="#">Adicionar ao carrinho!<a/>
    </div>`
       })
}

inicializarLoja();

atualizarCarrinho = () => {
    var containerCarrinho = document.getElementById('carrinho');
    var quantidadeTotal = items.reduce(obterSoma, 0);
    function obterSoma(quantidadeTotal, item) {
     return quantidadeTotal + (item.quantidade)
        
    }
    containerCarrinho. innerHTML = ""
    items.map((val)=>{
        if(val.quantidade > 0 ){
     containerCarrinho.innerHTML+= `
     <p>`+val.name+` | quantidade: `+val.quantidade+`</p>
     <hr>
     `;
    }
    
}) 
console.log(quantidadeTotal)
containerCarrinho.innerHTML+=`<p>Quantidade total:`+quantidadeTotal+``
}

var links = document.getElementsByTagName('a')

for(var i = 0; i < links.length; i++){

    links[i].addEventListener("click", function () {
        let key = this.getAttribute('key');
        items[key].quantidade++;
        atualizarCarrinho()
        return false
    })
}