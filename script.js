const main = document.querySelector('.main');
const button = document.querySelector('.button');
const icon = document.querySelector('.button-icon');
const body = document.querySelector('body');
const navlink = document.querySelectorAll('.nav__link');

console.log(body);


button.addEventListener('click', (e) => {

    if (icon.classList.contains('button-icon--clicked')){
        icon.classList.remove('button-icon--clicked');
        main.classList.remove('main--rotated');
        body.style.overflow = '';

        navlink.forEach(nav => nav.classList.remove('nav__link--visible'));
    }
    else{
        icon.classList.add('button-icon--clicked');
        main.classList.add('main--rotated');
        body.style.overflow = 'hidden';

        navlink.forEach(nav => nav.classList.add('nav__link--visible'));
    }

})