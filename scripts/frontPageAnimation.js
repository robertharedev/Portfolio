// subheading1 fadein from above
anime({
    targets: "#subheading-container-1",
    translateY: [-75, 0], // from 75 to 0
    opacity: [0, 1],
    easing: "easeInOutExpo",
    duration: 2000
});

drawNameLogo();

function drawNameLogo() {
    // line drawing animation
    anime({
        targets: ".lineDraw",
        strokeDashoffset: [anime.setDashoffset, 0],
        direction: "forwards",
        easing: "easeInOutSine",
        opacity: [0, 1],
        delay: 1000,
        duration: 2000,
        complete: () => { // On completion of this animation, call this function
            fillFirstWord();
        }
    });
    
    function fillFirstWord() {
        // fill first word orange
        anime({
            targets: ".firstword",
            fill: '#ffba24',
            easing: "easeInOutSine",
            direction: "forwards",
            duration: 500
        });
    }
}

// subheading2 fadein from below
anime({
    targets: "#subheading-container-2",
    translateY: [75, 0], // from 75 to 0
    opacity: [0, 1],
    easing: "easeInOutExpo",
    duration: 2000,
    delay: 2000
});

// nav elements drop down
anime({
    targets: ".nav-element",
    translateY: [-100, 0],
    opacity: [0, 1],
    delay: function(el, i, l) { return (i * 200) + 2500; },
    direction: "forwards",
    easing: "easeInOutExpo",
    duration: 2000,
});

// scroll symbol fadein from above
anime({
    targets: "#scroll-symbol-container",
    translateY: [-75, 0], // from 75 to 0
    opacity: [0, 1],
    easing: "easeInOutExpo",
    duration: 2000,
    delay: 4000, 
});