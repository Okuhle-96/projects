<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $subject = "Services required";
    $requirement = $_POST['service'];
    $message = $_POST['message'];

    $mailTo = "flexcre1@flexcreations.co.za";
    $headers = "From: ".$mailFrom;
    $txt = "Good day \n\nYou have recieved an email from: " . $name."\n\nRequires help with: " . $requirement . " and their message is: " . $message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: https://flexcreations.co.za/"); 
}