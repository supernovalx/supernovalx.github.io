var chatbotAnim = null;
document
    .querySelector("#robo-head")
    .addEventListener("mouseenter", function () {
        
        chatbotAnim = setInterval(function () {
            
            var tspan = document.querySelector("#robo-head-text").textContent;
            if (tspan === "...")
                document.querySelector("#robo-head-text").textContent = ".";
            else
                document.querySelector("#robo-head-text").textContent = document.querySelector("#robo-head-text").textContent + ".";
        }, 300);
    });

document
    .querySelector("#robo-head")
    .addEventListener("mouseleave", function () {
        clearInterval(chatbotAnim);
        document.querySelector("#robo-head-text").textContent = "...";
    });

function vw(v) {
    var w = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
    );
    return (v * w) / 100;
}

function vh(v) {
    var h = Math.max(
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
gsap.utils.toArray(".bgelement").forEach(star => {
    tweenProperty(star, "x", -50, 50);
    tweenProperty(star, "y", -50, 50);
  });
  
  
  function tweenProperty(target, prop, min, max) {
    
    var randomDur = gsap.utils.random(2, 3, 0.2, true);
    var randomDelay = 0;
  
    gsap.to(target,  {
      [prop]: gsap.utils.random(min, max),
      duration: randomDur(), 
      delay: 0, 
      ease: 'none',
      onComplete: tweenProperty,
      onCompleteParams: [target, prop, min, max]
    });
  
  }
  
  