const formulario = document.getElementById('seu-formulario');

// Adicionar um ouvinte de evento para o envio do formulário
formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    // Obter os valores do formulário
    const nomeProjeto = document.getElementById('titulo').value;
    const descricaoProjeto = document.getElementById('descricao').value;
    const categoriaProjeto = document.getElementById('categoria').value;

    // Criar um objeto para representar o projeto
    const projeto = {
        nome: nomeProjeto,
        descricao: descricaoProjeto,
        categoria: categoriaProjeto
    };

    // Armazenar o objeto no localStorage
    localStorage.setItem('projeto', JSON.stringify(projeto));

    // Redirecionar para a página de catálogo
    window.location.href = 'propage2.html';
});

//Verificar/Ver informações no localStorage
for (let i = 0; i < localStorage.length; i++) {
    const chave = localStorage.key(i);
    const valor = localStorage.getItem(chave);
    console.log(`Chave: ${chave}, Valor: ${valor}`);
  }
