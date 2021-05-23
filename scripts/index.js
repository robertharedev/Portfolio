// ##########################
// #  Scroll to top button  #
// ##########################
var toTopLink = document.getElementById("to-top-link");

var deviceType;
window.onload = function() { deviceType = setDeviceType() }; // set the device type on load
window.onresize = function() { deviceType = setDeviceType(); displayScrollToTopLink() }; // on resize, set the device type and check if the user has scrolled down 20px from the top of the page
window.onscroll = function() { displayScrollToTopLink() };

function setDeviceType() {
    if (window.innerWidth > 50 * 16) { // 16 is the default font size
        return "desktop";
    } else {
        return "mobile";
    }
}

// if the screen width > 50 * default (body) font-size (so, if the screen is desktop size-ish), make the scroll-to-top link visible
function displayScrollToTopLink() {
    if (deviceType == "desktop") { // if the screen size is similar to how a desktop would be, check if the user has scrolled down 20px from top of the page
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            toTopLink.style.display = "block";
        } else {
            toTopLink.style.display = "none";
        }
    } else {
        toTopLink.style.display = "none";
    }
}


// #########################################
// #  Filling nav dots depending on scroll #
// #########################################
const navDotHome = document.getElementById("navdotHome");
const navDotProj = document.getElementById("navdotProj");
const navDotAbout = document.getElementById("navdotAbout");
const navDotContact = document.getElementById("navdotContact")
const homeDiv = document.getElementById("welcome-page");
const projDiv = document.getElementById("projects");
const aboutDiv = document.getElementById("about-me");
const contactDiv = document.getElementById("contact");
const homeTopDist = window.pageYOffset + homeDiv.getBoundingClientRect().top;
const projTopDist = window.pageYOffset + projDiv.getBoundingClientRect().top;
const aboutTopDist = window.pageYOffset + aboutDiv.getBoundingClientRect().top;
const contactTopDist = window.pageYOffset + contactDiv.getBoundingClientRect().top;

// fill top nav dot on page load
window.onload = function() {
    let dot = getCurrentDot();
    dot.style.backgroundColor = "#ffba24";
    dot.style.borderColor = "#ffba24";
}

let dots = [navDotHome, navDotProj, navDotAbout, navDotContact];

// getting dot that needs to be active based on scrollY
const halfWinHeight = window.innerHeight / 2;
function getCurrentDot() {
    let midScrollY = window.scrollY + halfWinHeight;

    if (midScrollY >= 0 && midScrollY < projTopDist) {
        return navDotHome;
    } else if (midScrollY >= projTopDist && midScrollY < aboutTopDist) {
        return navDotProj;
    } else if (midScrollY >= aboutTopDist && midScrollY - 400 < contactTopDist) { // (hacky fix) -400 because the contact dot is highlighted a bit early in the scroll so this offsets it a bit
        return navDotAbout;
    } else if (midScrollY - 400 >= contactTopDist) {
        return navDotContact;
    }
}

window.addEventListener("scroll", function() {
    // unfills all dots
    function unFill(dot) {
        dot.style.backgroundColor = "#111111";
        dot.style.borderColor = "#555555";
    }
    dots.forEach(unFill);

    // fills current dot
    getCurrentDot().style.backgroundColor = "#ffba24";
    getCurrentDot().style.borderColor = "#ffba24";
});
