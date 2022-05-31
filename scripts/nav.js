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

