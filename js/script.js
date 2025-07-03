const hamburgerMenu = document.querySelector('.hamburger');
const navigationMenu = document.querySelector('.navbar');


hamburgerMenu.addEventListener('click', function() {
    navigationMenu.classList.toggle('open');
});


const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        navigationMenu.classList.remove('open');
    });
});

var typed = new Typed('.typing-text', {
  strings: ['Web Developer.', 'Tech Enthusiast.'],
  typeSpeed: 70,
  backSpeed: 50,
  loop: true
});