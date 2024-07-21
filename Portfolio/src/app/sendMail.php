<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): // Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;

    case("POST"): // Send the email.
        header("Access-Control-Allow-Origin: *");

        // Payload is not sent to $_POST Variable, it's sent to php:input as text
        $json = file_get_contents('php://input');

        // Parse the Payload from text format to Object
        $params = json_decode($json);

        $email = $params->email;
        $name = $params->name;
        $message = $params->message;

        $recipient = 'contact@david-velickovic.at';  
        $subject = "Contact From <$email>";
        
        // Construct the message properly
        $body = "From: $name <$email><br><br>$message";

        $headers   = array();
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=utf-8';

        // Additional headers
        $headers[] = "From: noreply@david-velickovic.at";

        // Log the email details for debugging
        error_log("Recipient: $recipient");
        error_log("Subject: $subject");
        error_log("Body: $body");
        error_log("Headers: " . implode("\r\n", $headers));

        // Send the email
        mail($recipient, $subject, $body, implode("\r\n", $headers));
        break;

    default: // Reject any non-POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}