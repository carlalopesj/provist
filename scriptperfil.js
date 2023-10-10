function logout() {
    window.location.href = 'index.html';
}

const openPopupButton = document.getElementById('open-popup');
const openPopupButton2 = document.getElementById('open-arc');
const openPopupButton3 = document.getElementById('open-popup3');
const closePopupButton = document.getElementById('close-popup');
const popup = document.getElementById('popup');
const popup2 = document.getElementById('popup2');
const popup3 = document.getElementById('popup3');


openPopupButton.addEventListener('click', () => {
    popup.style.display = 'block';
});

openPopupButton2.addEventListener('click', () => {
    popup2.style.display = 'block';
});

openPopupButton3.addEventListener('click', () => {
    popup3.style.display = 'block';
});

closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none';
});
closePopupButton2.addEventListener('click', () => {
    popup2.style.display = 'none';
});
closePopupButton3.addEventListener('click', () => {
    popup3.style.display = 'none';
});

// Fechar o pop-up se o usuário clicar fora dele
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});
