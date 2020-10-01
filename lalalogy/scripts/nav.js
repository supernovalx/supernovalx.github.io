window.addEventListener("scroll", function () {
    let header = document.querySelector("nav");
    let windowPosition = window.scrollY > 28;
    header.classList.toggle("scrolling-active", windowPosition);
});

let modal = document.getElementById('nav-modal');

let modalIn = gsap.timeline({paused: true})
.fromTo("#nav-modal", {opacity: 0}, {opacity: 1, duration: 0.3})
.from("#nav-modal a", {y: 100, stagger: {amount: 0.1}}, "-=0.3");

let modalOut = gsap.timeline({paused: true})
.to("#nav-modal a", {y: -400, stagger: {amount: 0.1}})
.fromTo("#nav-modal", {opacity: 1}, {opacity: 0, duration: 0.2, onComplete: navModalExitComplete}, "-=0.55")
.to("#nav-modal a", {y: 0, duration: 0});

function onHamburgerClick() {
    var rect = document.getElementById("hamburger").getBoundingClientRect();
    var d = document.getElementById("exit");
    d.style.left = rect.left+'px';
    d.style.top = rect.top+'px';

    modal.className = "";
    // gsap.from( '#nav-modal', 1, {autoAlpha:0, y: 100, duration: 5} );
    modalIn.play(0);
}

function onNavModalExit() {
    //modalIn.seek(0);


    modalOut.play(0);

}

function navModalExitComplete() {
    modal.className = "hidden";
}