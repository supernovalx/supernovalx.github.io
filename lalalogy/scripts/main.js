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

function scrollDown() {
    window.scroll({
        top: vh(100) - 114,
        left: 0,
        behavior: "smooth",
    });
}

// Animate the properties individually
gsap.utils.toArray(".bgelement").forEach((star) => {
    tweenProperty(star, "x", -50, 50);
    tweenProperty(star, "y", -50, 50);
});

function tweenProperty(target, prop, min, max) {
    let randomDur = gsap.utils.random(2, 3, 0.2, true);
    let randomDelay = 0;

    gsap.to(target, {
        [prop]: gsap.utils.random(min, max),
        duration: randomDur(),
        delay: 0,
        ease: "none",
        onComplete: tweenProperty,
        onCompleteParams: [target, prop, min, max],
    });
}

let lineDuration = 0.15;
let lineEase = "back";
let cardChatbotAnimation = gsap
    .timeline({ repeat: -1, paused: true })
    .from("#chatbotcard-line1", {
        opacity: 0,
        scaleX: 0,
        duration: lineDuration,
        ease: lineEase,
    })
    .from("#chatbotcard-line2", {
        opacity: 0,
        scaleX: 0,
        duration: lineDuration,
        ease: lineEase,
    })
    .from("#chatbotcard-line3", {
        opacity: 0,
        scaleX: 0,
        duration: lineDuration,
        ease: lineEase,
    })
    .from(
        "#chatbotcard-line4",
        {
            opacity: 0,
            scaleX: 0,
            x: 0,
            duration: lineDuration,
            ease: lineEase,
        },
        "+=.2"
    )
    .from("#chatbotcard-line5", {
        opacity: 0,
        scaleX: 0,
        x: 0,
        duration: lineDuration,
        ease: lineEase,
    })
    .from("#chatbotcard-line6", {
        opacity: 0,
        scaleX: 0,
        x: 0,
        duration: lineDuration,
        ease: lineEase,
    });

function cardChatbotMouseEnter() {
    cardChatbotAnimation.play();
}

function cardChatbotMouseLeave() {
    cardChatbotAnimation.seek(0);
    cardChatbotAnimation.pause();
}

let popupDuration = 0.5;
let popupEase = "power1.in";
let popupEaseOut = "power1.out";
let cardMobileAnimation = gsap
    .timeline({ repeat: -1, paused: true })
    .from("#mobilecard-popup1", {
        opacity: 0.2,
        scale: 0,
        x: 159,
        y: 80,
        duration: popupDuration,
        ease: popupEase,
    })
    .from(
        "#mobilecard-popup2",
        {
            opacity: 0.2,
            scale: 0,
            x: 60,
            y: 120,
            duration: popupDuration,
            ease: popupEase,
        },
        "-=.2"
    )
    .from(
        "#mobilecard-popup3",
        {
            opacity: 0.2,
            scale: 0,
            duration: popupDuration,
            ease: popupEase,
        },
        "-=.2"
    )
    .from(
        "#mobilecard-popup4",
        {
            opacity: 0.2,
            scale: 0,
            x: 60,
            y: 30,
            duration: popupDuration,
            ease: popupEase,
        },
        "-=.2"
    )
    .to("#mobilecard-popup1", {
        opacity: 0,
        scale: 0,
        duration: popupDuration,
        ease: popupEaseOut,
    })
    .to(
        "#mobilecard-popup2",
        {
            opacity: 0,
            scale: 0,
            duration: popupDuration,
            ease: popupEaseOut,
        },
        "-=.2"
    )
    .to(
        "#mobilecard-popup3",
        {
            opacity: 0,
            scale: 0,
            duration: popupDuration,
            ease: popupEaseOut,
        },
        "-=.2"
    )
    .to(
        "#mobilecard-popup4",
        {
            opacity: 0,
            scale: 0,
            duration: popupDuration,
            ease: popupEaseOut,
        },
        "-=.3"
    );

function cardMobileMouseEnter() {
    cardMobileAnimation.play();
}

function cardMobileMouseLeave() {
    cardMobileAnimation.seek(0);
    cardMobileAnimation.pause();
}

let gameDuration = 0.4;
let gameEase = "none";
let gameEaseOut = "bounce";
let cardGameAnimation = gsap
    .timeline({ repeat: -1, paused: true })
    .to("#gamecard-gameboy", {
        y: 0,
        duration: gameDuration,
        ease: gameEase,
    })
    .to("#gamecard-controller", {
        y: 30,
        duration: gameDuration,
        ease: gameEase,
    })
    .to(
        "#gamecard-gameboy",
        { y: 24, duration: gameDuration, ease: gameEaseOut },
        "-=.3"
    )
    .to("#gamecard-controller", {
        y: 75,
        duration: gameDuration,
        ease: gameEaseOut,
    });

function cardGameMouseEnter() {
    cardGameAnimation.play();
}

function cardGameMouseLeave() {
    cardGameAnimation.seek(0);
    cardGameAnimation.pause();
}
