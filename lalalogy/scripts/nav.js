window.addEventListener("scroll", function () {
    let header = document.querySelector("nav");
    let windowPosition = window.scrollY > 28;
    header.classList.toggle("scrolling-active", windowPosition);
});

