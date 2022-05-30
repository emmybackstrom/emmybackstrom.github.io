const hoverState = document.querySelector('#emailHover');
const emailIcon = document.querySelector('#emailIcon');


emailIcon.addEventListener('mouseover', ()=>{
    hoverState.style.display = 'initial';
})

emailIcon.addEventListener('mouseout', ()=>{
    hoverState.style.display = 'none';
})