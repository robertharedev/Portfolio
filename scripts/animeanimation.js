// navbar elements drop down onto page
anime({
    targets: ".nav-element",
    translateY: [-200, 0],
    opacity: [0, 1],
    delay: function(el, i, l) { return (i * 200) + 1800; },
    direction: "forwards",
    easing: "easeInOutExpo",
    duration: 2000,
});

// line drawing animation
anime({
    targets: ".lineDraw",
    strokeDashoffset: [anime.setDashoffset, 0],
    delay: function(el, i) { return i * 100 }, 
    direction: "forwards",
    easing: "easeInOutSine",
    duration: 3000,
});

// svg firstword fadein from left
anime({
    targets: ".firstword",
    translateX: [-150, 0], // from -300 to 0
    opacity: [0, 1],
    easing: "easeInOutSine",
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
        delay: function(el, i, l) { return (i * 100); },
        duration: 1000
    });
}

// svg secondword fadein from right
anime({
    targets: ".secondword",
    translateX: [150, 0], // from 200 to 0
    opacity: [0, 1],
    easing: "easeInOutSine",
    duration: 2000
});

// subheading1 fadein from above
anime({
    targets: "#subheading-container-1",
    translateY: [-75, 0], // from 75 to 0
    opacity: [0, 1],
    easing: "easeInOutExpo",
    duration: 2000,
    delay: 1000, 
});

// subheading2 fadein from below
anime({
    targets: "#subheading-container-2",
    translateY: [75, 0], // from 75 to 0
    opacity: [0, 1],
    easing: "easeInOutExpo",
    duration: 2000,
    delay: 1500, 
});

// scroll symbol fadein from above
anime({
    targets: "#scroll-symbol-container",
    translateY: [-75, 0], // from 75 to 0
    opacity: [0, 1],
    easing: "easeInOutExpo",
    duration: 2000,
    delay: 3000, 
});


// animating project elements' thumbnails
