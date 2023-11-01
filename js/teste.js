const params = new URLSearchParams(window.location.search);
const categoria = params.get("categoria");
const conteudo = document.getElementById('conteudo');
const frase = document.getElementById('frase');

if (categoria === "educacao") {
  conteudo.innerHTML = "EDUCAÇÃO";
  frase.innerHTML = "A educação não transforma o mundo. A educação muda as pessoas. Pessoas transformam o mundo.";
} else if (categoria === "saude") {
  conteudo.innerHTML = "SAÚDE";
  frase.innerHTML = "Saúde é o estado de completo bem-estar físico, mental e social e não somente a ausência de doença.";
} else if (categoria === "tecnologia"){
  conteudo.innerHTML = "TECNOLOGIA";
  frase.innerHTML = "A tecnologia é a poesia do futuro, escrita em linhas de código e moldando o amanhã.";
} else if (categoria === "meio-ambiente") {
  conteudo.innerHTML = "MEIO-AMBIENTE";
  frase.innerHTML = "Proteger a natureza não é uma escolha, é nossa responsabilidade compartilhada. Pequenas ações diárias geram grandes impactos para um futuro sustentável.";
} else if (categoria === "financas") {
  conteudo.innerHTML = "A economia é uma virtude distributiva e consiste não em poupar mas em escolher.";
  frase.innerHTML = "Finançassssa s";
} else if (categoria === "entretenimento") {
  conteudo.innerHTML = "ENTRETENIMENTO";
  frase.innerHTML = "O entretenimento é a mágica que nos transporta para outros mundos sem sair do lugar.";
} else if (categoria === "seguranca") {
  conteudo.innerHTML = "SEGURANÇA";
  frase.innerHTML = "Acidentes não acontecem por acaso, mas sim, por descado.";
} else if (categoria === "outros") {
  conteudo.innerHTML = "OUTROS";
  frase.innerHTML = " ";
}