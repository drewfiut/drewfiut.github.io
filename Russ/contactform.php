<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $contact = $_POST['contact'];
    $message = $_POST['message'];

    $mailTo = "contact@russandsonslandscaping.com";
    $headers = "From: The Website";
    $txt = "A customer filled out your contact form.\n\nName: ".$name."\nContact Information: ".$contact."\n\nMessage:\n".$message;

    mail($mailTo, "Website Contact Form", $txt, $headers);
    header("Location: contact.html?mailsend");
}