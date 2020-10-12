function vw(v) {
    let w = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
    );
    return (v * w) / 100;
}

function vh(v) {
    let h = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
    );
    return (v * h) / 100;
}

let modal = document.getElementById("nav-modal");

let modalIn = gsap
    .timeline({ paused: true })
    .fromTo("#nav-modal", { opacity: 0 }, { opacity: 1, duration: 0.3 })
    .from("#nav-modal a", { y: 100, stagger: { amount: 0.1 } }, "-=0.3");

let modalOut = gsap
    .timeline({ paused: true })
    .to("#nav-modal a", { y: -400, stagger: { amount: 0.1 } })
    .fromTo(
        "#nav-modal",
        { opacity: 1 },
        { opacity: 0, duration: 0.2, onComplete: navModalExitComplete },
        "-=0.55"
    )
    .to("#nav-modal a", { y: 0, duration: 0 });

function onHamburgerClick() {
    var rect = document.getElementById("hamburger").getBoundingClientRect();
    var d = document.getElementById("exit");
    d.style.left = rect.left + "px";
    d.style.top = rect.top + "px";

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

let chatbotAnim = null;
document
    .querySelector("#robo-head")
    .addEventListener("mouseenter", function () {
        chatbotAnim = setInterval(function () {
            let tspan = document.querySelector("#robo-head-text").textContent;
            if (tspan === "...")
                document.querySelector("#robo-head-text").textContent = ".";
            else
                document.querySelector("#robo-head-text").textContent =
                    document.querySelector("#robo-head-text").textContent + ".";
        }, 300);
    });

document
    .querySelector("#robo-head")
    .addEventListener("mouseleave", function () {
        clearInterval(chatbotAnim);
        document.querySelector("#robo-head-text").textContent = "...";
    });

window.onscroll = function () {
    chatHeadScroll();
};
let footer = document.getElementsByTagName("footer")[0];
function chatHeadScroll() {
    let viewBottom = window.scrollY + vh(100);
    let footerTop = footer.offsetTop;
    document.getElementById("robo-head").style.bottom =
        Math.max(viewBottom - footerTop + 40, 40, vh(2)) + "px";
    //console.log(viewBottom, footerTop, viewBottom - footerTop);
}
