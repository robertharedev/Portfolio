toTopLink = document.getElementById("to-top-link");

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        toTopLink.style.display = "block";
    } else {
        toTopLink.style.display = "none";
    }
}