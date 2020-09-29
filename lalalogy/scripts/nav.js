window.addEventListener("scroll", function () {
    let header = document.querySelector("nav");
    let windowPosition = window.scrollY > 28;
    header.classList.toggle("scrolling-active", windowPosition);
});

var modal = document.getElementById('nav-modal');
function onHamburgerClick() {
    modal.classList = "";
    // gsap.from( '#nav-modal', 1, {autoAlpha:0, y: 100, duration: 5} );
    gsap.fromTo("#nav-modal", {opacity: 0}, {opacity: 1, duration: 0.3});
    gsap.from("#nav-modal a", {y: 100, stagger: {amount: 0.1}});

}

function onNavModalExit() {
    gsap.timeline().to("#nav-modal a", {y: -400, stagger: {amount: 0.1}})
    .to("#nav-modal a", {y: 0, duration: 0});
    gsap.fromTo("#nav-modal", {opacity: 1}, {opacity: 0, duration: 0.2, onComplete: navModalExitComplete});
    
}

function navModalExitComplete() {
    console.log(1);
    modal.classList = "hidden";
}