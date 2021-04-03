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
