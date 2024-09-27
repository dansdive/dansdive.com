<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $first_name = htmlspecialchars($_POST['first_name']);
    $last_name = htmlspecialchars($_POST['last_name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    // Here you can add code to send an email or save the data to a database
    // For example, using the mail() function to send an email:
    $to = "maryjoy.padiz1@gmail.com";
    $subject = "New Inquiry from $first_name $last_name";
    $body = "Name: $first_name $last_name\nEmail: $email\nPhone: $phone\nMessage: $message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
}
?>