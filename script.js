const images = document.querySelectorAll('.banner_img');
  let current = 0;

  setInterval(() => {
    images[current].classList.remove('active');
    current = (current + 1) % images.length;
    images[current].classList.add('active');
  }, 7000);

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.nav_cont');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});