<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") 
{
    // Make sure required fields are filled
    if (isset($_POST["username"]) && isset($_POST["email"]) && isset($_POST["password"]) && isset($_POST["confirm-password"])) {
        // Retrieve data from form
        $username = $_POST["username"];
        $email = $_POST["email"];
        $password = $_POST["password"];
        $confirmPassword = $_POST["confirm-password"];

        // Validate email format
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) 
        {
            echo "Invalid email format";
        } else {
            // Check if passwords match
            if ($password !== $confirmPassword) 
            {
                echo "Passwords do not match";
            } else
            {
                echo "Username: " . $username . "<br>";
                echo "Email: " . $email . "<br>";
                echo "Password: " . $password . "<br>";
                // header("Location: registration_success.html");
            }
        }
    } else 
    {
        echo "All fields are required";
    }
}
?>