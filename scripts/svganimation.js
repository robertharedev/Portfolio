anime({
    targets: "svg path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 1500,
    delay: function(el, i) { return i* 150 },
    direction: "forwards",
    loop: false
});