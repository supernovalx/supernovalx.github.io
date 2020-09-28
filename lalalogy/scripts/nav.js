window.addEventListener("scroll", function () {
    let header = document.querySelector("nav");
    let windowPosition = window.scrollY > 28;
    header.classList.toggle("scrolling-active", windowPosition);
});

var modal = document.getElementById('nav-modal');
function onHamburgerClick() {
    modal.classList = "";
    // gsap.from( '#nav-modal', 1, {autoAlpha:0, y: 100, duration: 5} );
    gsap.from("#nav-modal", {opacity: 0, duration: 0.2});

}

function onNavModalExit() {
    modal.classList = "hidden";

}