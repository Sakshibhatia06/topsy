(function() {
    "use strict";

    // Dropdown on mouse hover
    document.addEventListener('DOMContentLoaded', function () {
        function toggleNavbarMethod() {
            const dropdowns = document.querySelectorAll('.navbar .dropdown');
            if (window.innerWidth > 992) {
                dropdowns.forEach(dropdown => {
                    dropdown.addEventListener('mouseover', function () {
                        const toggle = dropdown.querySelector('.dropdown-toggle');
                        toggle && toggle.click();
                    });

                    dropdown.addEventListener('mouseout', function () {
                        const toggle = dropdown.querySelector('.dropdown-toggle');
                        toggle && toggle.click();
                        toggle && toggle.blur();
                    });
                });
            } else {
                dropdowns.forEach(dropdown => {
                    dropdown.replaceWith(dropdown.cloneNode(true)); // removes event listeners
                });
            }
        }
        
        toggleNavbarMethod();
        window.addEventListener('resize', toggleNavbarMethod);
    });

    // Back to top button
    window.addEventListener('scroll', function() {
        const backToTop = document.querySelector('.back-to-top');
        if (window.scrollY > 100) {
            backToTop.style.display = 'block';
            backToTop.style.opacity = 1;
        } else {
            backToTop.style.display = 'none';
            backToTop.style.opacity = 0;
        }
    });

    document.querySelector('.back-to-top').addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Product Quantity
    const quantityButtons = document.querySelectorAll('.quantity button');
    quantityButtons.forEach(button => {
        button.addEventListener('click', function () {
            const inputField = button.parentElement.parentElement.querySelector('input');
            let oldValue = parseFloat(inputField.value);
            let newValue;

            if (button.classList.contains('btn-plus')) {
                newValue = oldValue + 1;
            } else {
                newValue = oldValue > 0 ? oldValue - 1 : 0;
            }

            inputField.value = newValue;
        });
    });

})();
$(document).ready(function(){
    $(".owl-carousel1").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 4
        },
        1000: {
          items: 1
        }
      }
    });
  });
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 4
        },
        1000: {
          items: 1
        }
      }
    });
  });

window.addEventListener('scroll', function() {
    var content = document.getElementById('content');
    if (window.scrollY > 50) { // When scrolling starts
        content.classList.add('active');
    } else {
        content.classList.remove('active');
    }
});
ScrollReveal().reveal('.container-fluid', { delay: 400 },{origin:"left"});
