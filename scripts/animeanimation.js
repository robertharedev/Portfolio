const svgPath = document.querySelectorAll("path");
const svgFirstWordPath = document.querySelectorAll(".firstword");
const svgSecondWordPath = document.querySelectorAll(".secondword");
const subheadingContainer = document.querySelector(".subheading-container");

// line drawing animation
anime({
    targets: svgPath,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 2000,
    delay: function(el, i) { return i * 100 }, 
    direction: "forwards",
    loop: false
});

// svg firstword fadein from left
anime({
    targets: svgFirstWordPath,
    translateX: [-300, 0], // from 200 to 0
    opacity: [0, 1],
    easing: "easeInOutExpo",
    duration: 1750
});

// svg secondword fadein from right
anime({
    targets: svgSecondWordPath,
    translateX: [300, 0], // from 200 to 0
    opacity: [0, 1],
    easing: "easeInOutExpo",
    duration: 1750
});

// subheading fadein from below
anime({
    targets: subheadingContainer,
    translateY: [75, 0], // from 75 to 0
    opacity: [0, 1],
    easing: "easeInOutExpo",
    duration: 2000
});