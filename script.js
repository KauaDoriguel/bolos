document.addEventListener('DOMContentLoaded', () => {
    const listaProdutosDiv = document.getElementById('product-list');
    const botoesCategoria = document.querySelectorAll('.category-btn');

    const ListaDeBolo = [
        {
            id: 1,
            nome: "Brigadeiro dos Sonhos",
            category: "chocolate",
            imagem: "Logo/Gemini_Generated_Image_i7ah55i7ah55i7ah.png",
            preco: "R$ 10,00"
        },
        {
            id: 2,
            nome: "Ninho com Nutella",
            category: "chocolate",
            imagem: "Logo/Gemini_Generated_Image_i7ah55i7ah55i7ah.png",
            preco: "R$ 12,00"
        },
        {
            id: 3,
            nome: "Meio a Meio",
            category: "frutas",
            imagem: "Logo/Gemini_Generated_Image_l2ithxl2ithxl2it.png",
            preco: "R$ 11,00"
        },
        {
            id: 4,
            nome: "Meio frutifero",
            category: "frutas",
            imagem: "Logo/Gemini_Generated_Image_l2ithxl2ithxl2it.png",
            preco: "R$ 11,00"
        },
        {
            id: 5,
            nome: "Prestige Especial",
            category: "chocobranco",
            imagem: "Logo/Gemini_Generated_Image_pp69k4pp69k4pp69.png",
            preco: "R$ 12,50"
        },
        {
            id: 6,
            nome: "Tentação Alpino",
            category: "chocobranco",
            imagem: "Logo/Gemini_Generated_Image_pp69k4pp69k4pp69.png",
            preco: "R$ 13,00"
        },
        {
            id: 7,
            nome: "mongral du grau",
            category: "chocolate",
            imagem: "Logo/Gemini_Generated_Image_i7ah55i7ah55i7ah.png",
            preco: "R$ 12,50"
        },
        {
            id: 8,
            nome: "O sagaz",
            category: "chocolate",
            imagem: "Logo/Gemini_Generated_Image_i7ah55i7ah55i7ah.png",
            preco: "R$ 12,50"
        }
    ];

    function mostrarBolosPorCategoria(categoria) {
        listaProdutosDiv.innerHTML = '';

        const bolosFiltrados = categoria === "todos"
            ? ListaDeBolo
            : ListaDeBolo.filter(bolo => bolo.category === categoria);

        if (bolosFiltrados.length === 0) {
            listaProdutosDiv.innerHTML = '<p>Ops! Nenhum bolo encontrado nesta categoria. Volte mais tarde!</p>';
            return;
        }

        bolosFiltrados.forEach(bolo => {
            const divBolo = document.createElement('div');
            divBolo.classList.add('product-item');

            divBolo.innerHTML = `
                <img src="${bolo.imagem || 'https://via.placeholder.com/250x200?text=Imagem+Indisponível'}" alt="${bolo.nome}" class="product-image">
                <h3>${bolo.nome}</h3>
                <p class="product-price">${bolo.preco}</p>
                <button class="add-to-cart-btn" data-nome="${bolo.nome}">Eu quero</button>
            `;

            listaProdutosDiv.appendChild(divBolo);
        });
    }

    // Inicializa mostrando todos
    mostrarBolosPorCategoria('todos');

    // Botões de categoria
    botoesCategoria.forEach(botao => {
        botao.addEventListener('click', () => {
            botoesCategoria.forEach(btn => btn.classList.remove('active'));
            botao.classList.add('active');

            const categoria = botao.getAttribute('data-category');
            mostrarBolosPorCategoria(categoria);
        });
    });

    listaProdutosDiv.addEventListener('click', function (e) {
    if (e.target.classList.contains('add-to-cart-btn')) {
        const nomeDoBolo = e.target.getAttribute('data-nome');
        const imagemDoBolo = e.target.closest('.product-item').querySelector('img').src;
        const telefone = '5514996569885';
        const mensagem = `Gostaria de um bolo de pote "${nomeDoBolo}".\nImagem: ${imagemDoBolo}`;
        const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
        window.open(url, '_blank');
    }
});

});

// Função para o formulário de contato
function enviarWhats(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5514996569885';

    const texto = `Olá! Me chamo ${nome}, ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;
    console.log(url);

    window.open(url, '_blank');
}
