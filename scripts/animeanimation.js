
// line drawing animation
const svgPath = document.querySelectorAll(".lineDraw");
anime({
    targets: svgPath,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 2500,
    delay: function(el, i) { return i * 100 }, 
    direction: "forwards",
    loop: false
});

// svg firstword fadein from left
const svgFirstWordPath = document.querySelectorAll(".firstword");
anime({
    targets: svgFirstWordPath,
    translateX: [-150, 0], // from -300 to 0
    opacity: [0, 1],
    easing: "easeInOutSine",
    duration: 2000
});

// svg secondword fadein from right
const svgSecondWordPath = document.querySelectorAll(".secondword");
anime({
    targets: svgSecondWordPath,
    translateX: [150, 0], // from 200 to 0
    opacity: [0, 1],
    easing: "easeInOutSine",
    duration: 2000
});

// subheading1 fadein from above
const subheading1Container = document.querySelector("#subheading-container-1");
anime({
    targets: subheading1Container,
    translateY: [-75, 0], // from 75 to 0
    opacity: [0, 1],
    easing: "easeInOutExpo",
    duration: 2000,
    delay: 1000, 
});

// subheading2 fadein from below
const subheading2Container = document.querySelector("#subheading-container-2");
anime({
    targets: subheading2Container,
    translateY: [75, 0], // from 75 to 0
    opacity: [0, 1],
    easing: "easeInOutExpo",
    duration: 2000,
    delay: 1500, 
});

// scroll symbol fadein from above
const scrollSymbol = document.querySelector("#scroll-symbol-container");
anime({
    targets: scrollSymbol,
    translateY: [-75, 0], // from 75 to 0
    opacity: [0, 1],
    easing: "easeInOutExpo",
    duration: 2000,
    delay: 2000, 
});