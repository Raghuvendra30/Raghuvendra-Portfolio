<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "your-email@example.com"; // Replace with your email address
    $subject = "Contact Form Submission";
    // Initialize error message variable
    $error_message = '';
    // Sanitize and retrieve form data
    $name = htmlspecialchars(strip_tags(trim($_POST['name'])));
    $email = htmlspecialchars(strip_tags(trim($_POST['email'])));
    $message = htmlspecialchars(strip_tags(trim($_POST['message'])));
    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error_message = "Invalid email format";
    }
    // Create email content if there's no error
    if (empty($error_message)) {
        // Create email content
        $body = "Name: $name\nEmail: $email\nMessage:\n$message";
        // Set headers
        $headers = "From: $email\r\n"; // Using \r\n for headers
        $headers .= "Reply-To: $email\r\n"; // Optional: allows the reply to go directly to the sender
        // Send the email
        if (mail($to, $subject, $body, $headers)) {
            echo "Email sent successfully!";
        } else {
            echo "Email sending failed.";
        }
    } else {
        echo $error_message; // Display error message
    }
}
?>