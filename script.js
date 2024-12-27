document.addEventListener("DOMContentLoaded", function() {
        const navbar = document.querySelector('.navbar');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', function() {
            let scrollPosition = window.scrollY;
            if (scrollPosition > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        navLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);

                window.scrollTo({
                    top: targetSection.offsetTop - navbar.offsetHeight,
                    behavior: 'smooth'
                });
            });
        });
    });