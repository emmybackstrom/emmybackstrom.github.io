const sideNav = document.querySelector('#sideNav');
const stages = document.querySelectorAll('#sideNav a')
const stageSpans = document.querySelectorAll('.stageSpan');
const stageHeaders = document.querySelectorAll('h2.bigHeader');



for (let stage of stages) {
    stage.addEventListener('click', () => {
        setTimeout(() => {
            document.querySelector('header').classList.add('scrollDown');
        }, 720)
    })
}

function changeActive(currentStage) {
    sideNav.style.right = '0';
    for (let stage of stages) {
        stage.classList.remove('active');
        stage.style.backgroundColor = '#aaa';
    }
    stages[currentStage].classList.add('active');
    stages[currentStage].style.backgroundColor = '#000';
}

window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;

    if (stageHeaders[3].getBoundingClientRect().top <= -windowHeight / 3) {
        sideNav.style.right = '-100px';
    } else if (stageHeaders[3].getBoundingClientRect().top <= windowHeight / 2) {
        changeActive(3);
    } else if (stageHeaders[2].getBoundingClientRect().top <= windowHeight / 2) {
        changeActive(2);
    } else if (stageHeaders[1].getBoundingClientRect().top <= windowHeight / 2) {
        changeActive(1);
    } else if (stageHeaders[0].getBoundingClientRect().top <= windowHeight / 2) {
        changeActive(0);
    } else {
        sideNav.style.right = '-100px';
    }
})

for (let i = 0; i <= 3; i++) {
    stageSpans[i].style.opacity = 0;
    stages[i].addEventListener('mouseenter', () => {
        stages[i].style.width = parseFloat(window.getComputedStyle(stageSpans[i]).width) + 20 + 'px';
        // stageSpans[i].style.marginRight = '20px';
        stageSpans[i].style.opacity = 1;
    })
    stages[i].addEventListener('mouseleave', () => {
        stages[i].style.width = '10px';
        stageSpans[i].style.opacity = 0;
    })
}


