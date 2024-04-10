function setActiveLink() {
    const currentPage = window.location.pathname.split('/').pop();
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.parentElement.classList.add('active');
        }
    });
}

// Execute the function when the page is fully loaded
window.onload = function() {
    setActiveLink();
};