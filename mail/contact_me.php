<?php
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

//Create the email and send the messag
$to = 'wesleywyane@gmail.com';
$email_subject = "Hello from Becky";
$email_body = "You have received a message from becky's website form.\n\n"."Here are the details:\n\nName: $firstName\n $lastName\n\nEmail: $email\n\nPhone Number: $phone\n\nMessage:\n $message";
$headers = "From: noreply@herwebsite.com\n";
$headers .= "Reply-To: $email";
mail($to,$email_subject, $email_body, $headers);
header("Location: ../index.html");

?>