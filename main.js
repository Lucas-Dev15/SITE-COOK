const sections = document.querySelectorAll('section');
const nav = document.querySelector('nav');
const btnBurger = document.getElementById('burger-menu');
const navigation = document.querySelector('.navigation');
const links = document.querySelectorAll('.navigation a');

btnBurger.addEventListener("click", () => {
    navigation.classList.toggle('active');
    btnBurger.classList.toggle('bx-x');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        navigation.classList.remove('active');
        btnBurger.classList.remove('bx-x');
    });
});

window.addEventListener('scroll', () => {
    navigation.classList.remove('active');
    btnBurger.classList.remove('bx-x');
});

window.addEventListener('scroll', () => {
    if(window.scrollY > 0) {
        nav.classList.toggle('active');
    }
});
