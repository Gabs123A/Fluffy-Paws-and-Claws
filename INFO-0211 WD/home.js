document.addEventListener("DOMContentLoaded", function() 
{
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    for (let anchor of anchorLinks) {
        anchor.addEventListener('click', function(e) 
        {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                window.scrollTo(
                    {
                    top: offsetTop,
                    behavior: "smooth"
                });
            }
        });
    }

    // Toggle mobile navigation menu
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navMenu = document.querySelector('header nav ul');

    mobileMenuButton.addEventListener('click', function() 
    {
        navMenu.classList.toggle('show');
    });
});