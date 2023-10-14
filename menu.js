const hamburguer = document.querySelector('.hamburguer');
const navMenu =document.querySelector('.nav-menu');
const dropdown = document.querySelector('.dropdown-content');

hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})

dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('show');
})