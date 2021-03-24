// line drawing animation
anime({
    targets: "svg path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 1500,
    delay: function(el, i) { return i * 150 }, 
    direction: "forwards",
    loop: false
});

// svg name rise up
anime({
    targets: "svg path",
    translateY: [200, 0], // from 200 to 0
    easing: "easeInOutExpo",
    duration: 1750
});

// subheading fade in
anime({
    targets: ".subheading-container",
    translateY: [-75, 0], // from 75 to 0
    opacity: [0, 1],
    easing: "easeInOutExpo",
    duration: 1750
});