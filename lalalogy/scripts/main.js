window.addEventListener('scroll', function () {
    let header = document.querySelector('nav');
    let windowPosition = window.scrollY > 28;
    header.classList.toggle('scrolling-active', windowPosition);
})

function vw(v) {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (v * w) / 100;
  }

function scrollDown() {
    window.scroll({
        top: vw(50) - 110, 
        left: 0, 
        behavior: 'smooth'
      });
}