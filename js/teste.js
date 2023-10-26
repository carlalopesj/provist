const params = new URLSearchParams(window.location.search);
const categoria = params.get("categoria");
const conteudo = document.getElementById('conteudo');
const frase = document.getElementById('frase');

if (categoria === "educacao") {
  conteudo.innerHTML = "EDUCAÇÃO";
  frase.innerHTML = "A educação não transforma o mundo. A educação muda as pessoas. Pessoas transformam o mundo.";
} else if (categoria === "saude") {
  conteudo.innerHTML = "SAÚDE";
  frase.innerHTML = "A saúde é o bem-estar";
} else if (categoria === "tecnologia"){
  conteudo.innerHTML = "TECNOLOGIA";
  frase.innerHTML = "Tecnologia parara";
} else if (categoria === "meio-ambiente") {
  conteudo.innerHTML = "MEIO-AMBIENTE";
  frase.innerHTML = "Proteger a natureza não é uma escolha, é nossa responsabilidade compartilhada. Pequenas ações diárias geram grandes impactos para um futuro sustentável.";
} else if (categoria === "financas") {
  conteudo.innerHTML = "FINCANÇAS";
  frase.innerHTML = "Finançassssa s";
} else if (categoria === "entretenimento") {
  conteudo.innerHTML = "ENTRETENIMENTO";
  frase.innerHTML = "Entretenimento caidasdasd";
} else if (categoria === "seguranca") {
  conteudo.innerHTML = "SEGURANÇA";
  frase.innerHTML = "Segurançasasd s";
} else if (categoria === "outros") {
  conteudo.innerHTML = "OUTROS";
  frase.innerHTML = "Não seja igual aos outros, faça e viva o diferente.";
}