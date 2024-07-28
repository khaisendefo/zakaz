function toggle() {
  document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.header__burger');
    const nav = document.querySelector('.header__nav');
    const navLinks = document.querySelectorAll('.header__link');

    function closeNav() {
      toggleButton.classList.remove('active');
      nav.classList.remove('active');
    }

    toggleButton.addEventListener('click', function () {
      toggleButton.classList.toggle('active');
      nav.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
      if (!nav.contains(event.target) && !toggleButton.contains(event.target)) {
        closeNav();
      }
    });

    nav.addEventListener('click', function(event) {
      if (event.target === nav) {
        closeNav();
      }
    });

    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && nav.classList.contains('active')) {
        closeNav();
      }
    });

    navLinks.forEach(function(navLink) {
      navLink.addEventListener('click', function() {
        closeNav();
      });
    });
  });
}

toggle();

