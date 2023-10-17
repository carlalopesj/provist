/*document.addEventListener('DOMContentLoaded', function () {
    const botaoPostar = document.getElementById('submit');

    botaoPostar.addEventListener('click', function (e) {
        e.preventDefault(); // Impede o envio do formulário

        // Obtenha os valores dos campos do formulário
        let tituloProjeto = document.getElementById('titulo').value;
        let descricaoProjeto = document.getElementById('descricao').value;
        let categoriaProjeto = document.getElementById('categoria').value;
        let telefoneContato = document.getElementById('telefone').value;
        let emailContato = document.getElementById('email').value;
        let arquivoProjeto = document.getElementById('arquivo').files[0]; // Use .files[0] para obter o arquivo

        // Agora você pode fazer o que quiser com esses valores, por exemplo, enviá-los para o servidor usando uma solicitação AJAX
        // ou realizando qualquer outra ação necessária.

        // Exemplo: exibir os valores no console
        console.log('Título do Projeto:', tituloProjeto);
        console.log('Descrição do Projeto:', descricaoProjeto);
        console.log('Categoria do Projeto:', categoriaProjeto);
        console.log('Telefone de Contato:', telefoneContato);
        console.log('Email de Contato:', emailContato);
        console.log('Arquivo do Projeto:', arquivoProjeto);

        // Agora você pode continuar com o processamento dos dados, como enviá-los para o servidor, validar o formulário, etc.

        // Função para criar a div de projeto.

    });
});

function criarProjetoDiv(dadosProjeto) {
    // Crie a div de projeto com base nos dados e adicione-a à página.
    const projetoDiv = document.createElement('div');
    projetoDiv.classList.add('grid-item-a');
    projetoDiv.innerHTML = `
      <h2>${dadosProjeto.titulo}</h2>
      <p>${dadosProjeto.descricao}</p>
      <a href="individual.html" target="_blank"><button class="more">Saber mais</button></a>
    `;
  
    // Adicione a div do projeto ao container (grid-container).
    const gridContainer = document.querySelector('.grid-container-allpro');
    gridContainer.appendChild(projetoDiv);
}
  
  // Função para obter parâmetros de consulta da URL.
  function obterParametrosDaURL() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return {
      titulo: urlParams.get('titulo'),
      descricao: urlParams.get('descricao')
    };
}
  
  // Verifique a URL da página atual e tome ação com base nela.
  if (window.location.pathname === '/index2.html') {
    // Estamos na página de perfil/formulário.
    const btnPostar = document.getElementById('submit');
  
    btnPostar.addEventListener('click', function(event) {
      event.preventDefault();
  
      // Obtenha os valores dos campos do formulário.
      const tituloProjeto = document.getElementById('titulo').value;
      const descricaoProjeto = document.getElementById('descricao').value;
  
      // Crie uma URL com os parâmetros de consulta.
      const url = `propage.html?titulo=${encodeURIComponent(tituloProjeto)}&descricao=${encodeURIComponent(descricaoProjeto)}`;
  
      // Redirecione para a página de exposição de projetos.
      window.location.href = url;
    });
  } else if (window.location.pathname === '/propage.html') {
    // Estamos na página de exposição de projetos.
    const dadosProjeto = obterParametrosDaURL();
    criarProjetoDiv(dadosProjeto);
  }
  
*/
//Tentando coisar os formulários para a página




