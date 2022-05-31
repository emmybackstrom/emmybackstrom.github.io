const h1 = document.querySelector('h1');
const hoverSpanOne = document.querySelector('#hoverSpanOne');
const hoverSpanTwo = document.querySelector('#hoverSpanTwo');
const hiddenPContainer = document.querySelector('#hiddenPContainer');
const hiddenP = document.querySelector('#hiddenP');


const anims = {
    hoverSpanOne: bodymovin.loadAnimation({
        container: hoverSpanOne,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'animations/squigglyLine/spanOne.json'
    }),
    hoverSpanTwo: bodymovin.loadAnimation({
        container: hoverSpanTwo,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'animations/squigglyLine/spanTwo.json'
    })
}
hoverSpanOne.addEventListener('mouseover', () => {
    if (window.innerWidth > 1088) {
        anims.hoverSpanOne.setDirection(1);
        anims.hoverSpanOne.goToAndPlay(0, true);
        let fadeInDelay = setTimeout(fadeIn, 200);             // Calls fadeIn after .2 sec, so the text doesnt flicker if you hover the text
        // back and forth. Also the delay looks clean.
        function fadeIn() {
            hiddenP.textContent = 'My primary skillset in digital design is complemented with related skills such as graphic design, animation, branding and social media to create value in a wide variety of projects.';
            let fadeInInterval = setInterval(show, 20);          // Calls show every 20th ms.
            function show() {
                let opacity = Number(hiddenPContainer.style.opacity);  // Sets the variable opacity to the value of the paragraphs opacity.
                if (opacity < 1) {                                  // Add .05 to the opacity until it hits 1, aka 100%.
                    opacity += 0.05;
                    hiddenPContainer.style.opacity = opacity;
                } else {
                    clearInterval(fadeInInterval);                  // If p is at full opacity, clear the interval.
                }
            }
            hoverSpanOne.addEventListener('mouseout', () => {     // Clears the fade in interval if mouse leaves the span.
                clearInterval(fadeInInterval)                       // This fixes the bug where both fade in and fade out compete indefinitely
            })                                                      // if you mouse out in the middle of one animation.
        }
        hoverSpanOne.addEventListener('mouseout', () => {
            clearTimeout(fadeInDelay);                     // Clear the .2 second delay of the animation if you mouse out before it
        })                                                          // begins.
    }
})
hoverSpanOne.addEventListener('mouseout', () => {
    if (window.innerWidth > 1088) {
        anims.hoverSpanOne.setDirection(-1);
        anims.hoverSpanOne.goToAndPlay(8, true);

        let fadeOutInterval = setInterval(hide, 20);            
        function hide() {
            let opacity = hiddenPContainer.style.opacity;
            if (opacity > 0) {
                opacity -= 0.1;
                hiddenPContainer.style.opacity = opacity;
            } else {
                clearInterval(fadeOutInterval);
            }
        }
        hoverSpanOne.addEventListener('mouseover', () => {
            clearInterval(fadeOutInterval)
        })
    }
})
hoverSpanTwo.addEventListener('mouseover', () => {
    if (window.innerWidth > 1088) {
        anims.hoverSpanTwo.setDirection(1);
        anims.hoverSpanTwo.goToAndPlay(0, true);

        let timeout = setTimeout(fadeIn, 200)
        function fadeIn() {
            hiddenP.textContent = 'I believe design can be a powerful tool to improve people’s lives and contribute to a better world. That’s what drives me to never stop learning and to give every project my all.';
            let fadeInInterval = setInterval(show, 20);
            function show() {
                let opacity = Number(hiddenPContainer.style.opacity);
                if (opacity < 1) {
                    opacity += 0.05;
                    hiddenPContainer.style.opacity = opacity;
                } else {
                    clearInterval(fadeInInterval);
                }
            } hoverSpanTwo.addEventListener('mouseout', () => {
                clearInterval(fadeInInterval)
            })
        }
        hoverSpanTwo.addEventListener('mouseout', () => {
            clearTimeout(timeout);
        })
    }
})
hoverSpanTwo.addEventListener('mouseout', () => {
    if (window.innerWidth > 1088) {
        anims.hoverSpanTwo.setDirection(-1);
        anims.hoverSpanTwo.goToAndPlay(8, true);
        let fadeOutInterval = setInterval(hide, 20);
        function hide() {
            let opacity = hiddenPContainer.style.opacity;
            if (opacity > 0) {
                opacity -= 0.1;
                hiddenPContainer.style.opacity = opacity;
            } else {
                clearInterval(fadeOutInterval);
            }
        }
        hoverSpanTwo.addEventListener('mouseover', () => {
            clearInterval(fadeOutInterval)
        })
    }
})




// Hover state declarations
const mekHover = document.querySelector('.mek .hoverState')
const hmHover = document.querySelector('.hm .hoverState')
const twentyNineHover = document.querySelector('.twentyNine .hoverState')
const goalPlanHover = document.querySelector('.goalPlan .hoverState')
const acastHover = document.querySelector('.acast .hoverState')

function hoverFadeIn(thumbnail) {
    let fadeInInterval = setInterval(show, 20);          // Calls show every 20th ms.
    function show() {
        let opacity = Number(thumbnail.style.opacity);  // Sets the variable opacity to the value of the paragraphs opacity.
        if (opacity < 1) {                                  // Add .05 to the opacity until it hits 1, aka 100%.
            opacity += 0.2;
            thumbnail.style.opacity = opacity;
        } else {
            clearInterval(fadeInInterval);                  // If p is at full opacity, clear the interval.
        }
    }
    thumbnail.addEventListener('mouseout', () => {     // Clears the fade in interval if mouse leaves the span.
        clearInterval(fadeInInterval)                       // This fixes the bug where both fade in and fade out compete indefinitely
    })                                                      // if you mouse out in the middle of one animation.
}
function hoverFadeOut(thumbnail) {
    let fadeOutInterval = setInterval(hide, 20);
    function hide() {
        let opacity = Number(thumbnail.style.opacity);
        if (opacity > 0) {
            opacity -= 0.2;
            thumbnail.style.opacity = opacity;
        } else {
            clearInterval(fadeOutInterval);
        }
    }
    thumbnail.addEventListener('mouseover', () => {
        clearInterval(fadeOutInterval)
    })
}

mekHover.addEventListener('mouseover', () => {
    hoverFadeIn(mekHover);
})
mekHover.addEventListener('mouseout', () => {
    hoverFadeOut(mekHover);
})
hmHover.addEventListener('mouseover', () => {
    hoverFadeIn(hmHover);
})
hmHover.addEventListener('mouseout', () => {
    hoverFadeOut(hmHover);
})
twentyNineHover.addEventListener('mouseover', () => {
    hoverFadeIn(twentyNineHover);
})
twentyNineHover.addEventListener('mouseout', () => {
    hoverFadeOut(twentyNineHover);
})
goalPlanHover.addEventListener('mouseover', () => {
    hoverFadeIn(goalPlanHover);
})
goalPlanHover.addEventListener('mouseout', () => {
    hoverFadeOut(goalPlanHover);
})
acastHover.addEventListener('mouseover', () => {
    hoverFadeIn(acastHover);
})
acastHover.addEventListener('mouseout', () => {
    hoverFadeOut(acastHover);
})








