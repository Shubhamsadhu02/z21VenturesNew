<?php
header('Content-Type: application/json');

$requestPayload = json_decode(file_get_contents('php://input'), true);

// Getting data
$fname = $requestPayload['fullName']; 
$cmail = $requestPayload['email']; 
$subject = $requestPayload['subject'];
$description: $requestPayload['description'];,
$attachment: $requestPayload['attachment'];,
$urlLink: $requestPayload['urlLink'];,
$linkName: $requestPayload['linkName'];,


$message = "--boundary1\r\n";
$message .= "Content-Type: text/plain; charset=UTF-8\r\n";
$message .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
$message .= $description . "\r\n";

// Add URL link if provided
if (!empty($urlLink)) {
    $message .= "\r\nLink: " . $linkName . " - " . $urlLink . "\r\n";
}

// Add attachment if provided
if (!empty($attachment)) {
    // Decode base64-encoded attachment
    $decodedAttachment = base64_decode($attachment);
    $attachmentFileName = 'attachment'; // Default filename, can be changed based on your requirement

    $message .= "--boundary1\r\n";
    $message .= "Content-Type: application/octet-stream; name=\"" . $attachmentFileName . "\"\r\n";
    $message .= "Content-Transfer-Encoding: base64\r\n";
    $message .= "Content-Disposition: attachment; filename=\"" . $attachmentFileName . "\"\r\n\r\n";
    $message .= chunk_split(base64_encode($decodedAttachment)) . "\r\n";
}

$message .= "--boundary1--";


// Email headers
$headers = "From: " . "sachin@z21.ventures"; 
$headers .= "MIME-Version: z21 ventures\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$mail = "shubhamsadhu02@gmail.com"; 

$result1 = mail($cmail, $subject, $description, $urlLink, $linkName ,$headers); // This email sent to user address
$result2 = mail($mail, $subject, $description, $urlLink, $linkName ,$headers);

// Checking if mails sent successfully
if ($result1 && $result2) {
  $response = array(
    'success' => true,
    'message' => 'Email sent successfully.'            
  );
} else {
  $response = array(
    'success' => false,
    'message' => 'Failed to send the email.'
  );
}

echo json_encode($response);

?>