//Declarando as variáveis e atribuindo seus valores html
var projects = document.getElementById("projects");
var categorias =  document.getElementById("exibir-categorias");
var icone = document.getElementById("icon-proj");

var perfil = document.getElementById('perfil');
var opcoes = document.getElementById('exibir-opcoes');

//Quando clicar em projetos aparecer um submenu, dividido em categorias
projects.addEventListener("click", function(e) {
    e.preventDefault();
    visualizar(categorias);
});
icone.addEventListener("click", function(e) {
    e.preventDefault();
    visualizar(categorias);
});

// Fecha o menu de categorias ao clicar em um link
const linksCategorias = document.querySelectorAll("#exibir-categorias a");
linksCategorias.forEach(function (link) {
    link.addEventListener("click", function () {
        categorias.style.display = "none";
    });
});

//Função para realizar a visualizção
function visualizar(categorias) {
    if (categorias.style.display === "none" || categorias.style.display === "") {
        categorias.style.display = "block";
    } else {
        categorias.style.display = "none";
    }
}

/* Perfil*/
perfil.addEventListener("click", function(e) {
    e.preventDefault();
    visualizar(opcoes);
});
icone.addEventListener("click", function(e) {
    e.preventDefault();
    visualizar(opcoes);
});

// Fecha o menu de opções do perfil ao clicar em um link
const linksOpcoes = document.querySelectorAll("#exibir-opcoes a");
linksOpcoes.forEach(function (link) {
    link.addEventListener("click", function () {
        opcoes.style.display = "none";
    });
});

//Função para visualizar as opções quando clicado em perfil
function visualizar(opcoes) {
    if (opcoes.style.display === "none" || opcoes.style.display === "") {
        opcoes.style.display = "block";
    } else {
        opcoes.style.display = "none";
    }
}

/*Função para mudar o ícone de abrir e fechar menu responsivo*/

function menuShow() {
    let menuMobile = document.querySelector(".mobile-menu");
    if (menuMobile.classList.contains("open")) {
        menuMobile.classList.remove("open");
        document.querySelector(".menu-icon").src = "image/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add("open");
        document.querySelector(".menu-icon").src = "image/close_white_36dp.svg";
    }
}

// Fecha o menu mobile ao clicar em um link
const linksDoMenu = document.querySelectorAll(".mobile-menu a");
linksDoMenu.forEach(function (link) {
    link.addEventListener("click", function () {
        let menuMobile = document.querySelector(".mobile-menu");
        menuMobile.classList.remove("open");
        document.querySelector(".menu-icon").src = "image/menu_white_36dp.svg";
    });
});

//Função para sair do login/logout
function logout() {
    window.location.href = 'index.html';
}


//POP UP com as funções que se pode fazer quando logado (no caso postar um projeto) 

const openPopupButton = document.getElementById('open-popup');

const closePopupButton = document.getElementById('close-popup');

const popup = document.getElementById('popup');

openPopupButton.addEventListener('click', () => {
    popup.style.display = 'block';
});

closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Fechar o pop-up se o usuário clicar fora dele
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});

