const portrait = document.querySelector('#portrait');
const text = document.querySelector('#imEmmy');

// Adjusts the height of the portrait to be the same
// height as the text section on the left. 
function adjustHeight() {
    if (window.screen.width > 770) {
        portrait.style.height = `${text.getBoundingClientRect().height}px`;
    } else {
        portrait.style.height = 'auto';
    }
}

// Calls the adjust function on load.
setTimeout(adjustHeight, 50)

// Calls adjust everytime window resizes. 
window.addEventListener('resize', adjustHeight)





const dates1 = document.querySelectorAll('#cvExperience .dates')
const dates2 = document.querySelectorAll('#cvEducation .dates')
const dates3 = document.querySelectorAll('#cvSkills .dates')
const headers = document.querySelectorAll('.categoryHeader h3')

const dateSpans = [dates1, dates2, dates3]

function lockDates(){
    for (let i = 0; i < headers.length; i++) {
        for (let span of dateSpans[i]) {
            span.style.width = `${headers[i].getBoundingClientRect().width}px`;
        }
    }
}

setTimeout(lockDates, 50)


