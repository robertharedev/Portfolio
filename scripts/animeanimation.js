const svgPath = document.querySelectorAll("path");
const svgFirstWordPath = document.querySelectorAll(".firstword");
const svgSecondWordPath = document.querySelectorAll(".secondword");
const subheading1Container = document.querySelector("#subheading1");
const subheading2Container = document.querySelector("#subheading2");

// line drawing animation
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
anime({
    targets: svgFirstWordPath,
    translateX: [-300, 0], // from 200 to 0
    opacity: [0, 1],
    easing: "easeInOutSine",
    duration: 1000
});

// svg secondword fadein from right
anime({
    targets: svgSecondWordPath,
    translateX: [300, 0], // from 200 to 0
    opacity: [0, 1],
    easing: "easeInOutSine",
    duration: 1000
});

// subheadings fadein from above and below
anime({
    targets: subheading1Container,
    translateY: [-75, 0], // from 75 to 0
    opacity: [0, 1],
    easing: "easeInOutExpo",
    duration: 2000,
    delay: 1000, 
});

anime({
    targets: subheading2Container,
    translateY: [75, 0], // from 75 to 0
    opacity: [0, 1],
    easing: "easeInOutExpo",
    duration: 2000,
    delay: 1500, 
});