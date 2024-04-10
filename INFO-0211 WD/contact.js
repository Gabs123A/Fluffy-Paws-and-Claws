document.addEventListener('DOMContentLoaded', function () 
{
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) 
    {
        event.preventDefault(); // Prevent the form from submitting

        // Get form inputs
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validate inputs
        if (name === '' || email === '' || message === '') 
        {
            alert('Please fill out all required fields.');
            return;
        }

        // Submit the form
        this.submit();
    });
});