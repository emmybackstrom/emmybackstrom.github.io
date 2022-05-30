const carouselSlide = document.querySelector('.carouselSlide');
const carouselImages = document.querySelectorAll('.carouselSlide img');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');


function nextFadeOut() {
    let fadeOutInterval = setInterval(fade, 20)
    let opacity = 1;
    function fade() {
        if (opacity > 0.3) {
            opacity -= 0.05;
            carouselImages[counter - 1].style.opacity = opacity;
            carouselImages[counter].style.opacity = 1;
        }
        else {
            clearInterval(fadeOutInterval);
        }
    }
}


function prevFadeOut() {
    let fadeOutInterval = setInterval(fade, 20)
    let opacity = 1;
    function fade() {
        if (opacity > 0.3) {
            opacity -= 0.05;

            carouselImages[counter + 1].style.opacity = opacity;

            carouselImages[counter].style.opacity = 1;
        }
        else {
            clearInterval(fadeOutInterval);
        }
    }
}


let counter = 1;

// BUGFIX
setTimeout(() => {
    let size = carouselImages[0].getBoundingClientRect().width;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}, 100)
// BUGFIX

carouselImages[counter].style.opacity = '1';

window.addEventListener('resize', () => {
    let size = carouselImages[0].getBoundingClientRect().width;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

nextBtn.addEventListener('click', () => {
    let size = carouselImages[0].getBoundingClientRect().width;
    if (counter >= carouselImages.length - 1) {
        return;
    }
    carouselSlide.style.transition = 'transform 0.6s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    nextFadeOut();
})

prevBtn.addEventListener('click', () => {
    let size = carouselImages[0].getBoundingClientRect().width;
    if (counter <= 0) {
        return;
    }
    carouselSlide.style.transition = 'transform 0.6s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    prevFadeOut();

})
carouselSlide.addEventListener('transitionend', () => {
    let size = carouselImages[0].getBoundingClientRect().width;
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    } else if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    for (let img of carouselImages) {
        img.style.opacity = '.3';
    }
    carouselImages[counter].style.opacity = '1';
})





