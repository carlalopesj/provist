var projects = document.getElementById("projects");
var categorias =  document.getElementById("exibir-categorias");
var icone = document.getElementById("icon-proj");

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

function visualizar(categorias) {
    if (categorias.style.display === "none" || categorias.style.display === "") {
        categorias.style.display = "block";
    } else {
        categorias.style.display = "none";
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