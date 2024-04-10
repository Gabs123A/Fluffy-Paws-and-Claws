document.addEventListener('DOMContentLoaded', function() 
{
    var currentPage = window.location.pathname.split('/').pop();
    var links = document.querySelectorAll('nav ul li a');

    links.forEach(function(link) {
        if (link.getAttribute('href') === currentPage) 
        {
            link.parentElement.classList.add('active');
        }
    });
});