const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 88) {

    }
    if (currentScroll > lastScroll && !header.classList.contains('scrollDown') && currentScroll > 88) {
        header.classList.add('scrollDown');
    }
    if (currentScroll < lastScroll && header.classList.contains('scrollDown')) {
        header.classList.remove('scrollDown');

    }
    lastScroll = currentScroll;
})



// Hamburger menu
const hamburger = document.querySelector('#hamburgerIcon');
const ul = document.querySelector('header nav ul');
const emmyrentia = document.querySelector('header span');


let collapsed = true;


hamburger.addEventListener('click', () => {
    if (collapsed === true) {
        ul.style.height = '190px';
        collapsed = false;
        emmyrentia.style.opacity = 0;
    } else {
        ul.style.height = '32px';
        collapsed = true;
        emmyrentia.style.opacity = 1;
    }
})

