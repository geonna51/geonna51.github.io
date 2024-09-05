const navEl = document.querySelector(".navbar");

window.addEventListener('scroll', function() {
  if (window.scrollY >= 100) {
    navEl.classList.add('navbar-scrolled');
  } else if (this.window.scrollY < 100){
    navEl.classList.remove('navbar-scrolled');
  }
});