document.addEventListener("DOMContentLoaded", function() 
{
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) 
    {
        event.preventDefault(); //Prevent submission 

        // Fetch any inputs
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Validate inputs
        if (username === '' || email === '' || password === '' || confirmPassword === '') {
            alert('All fields are required!');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        // If all inputs are valid, submit the form
        // Registration details
        console.log('Registration Details:');
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);

        // Can add code here to submit the form data to a server-side script for process

        // Reset form
        form.reset();
    });
});