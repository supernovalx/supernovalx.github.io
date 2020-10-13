
$( document ).ready(function() {
    gsap.timeline({repeat: -1, repeatDelay: 5}).from(".chat-line", {display: "none", scale: 0, stagger: 2});
    gsap.from("section", {
        y: 100,
        opacity: 0,
        stagger: .5,
        ease: "power2.in"
    });
});
