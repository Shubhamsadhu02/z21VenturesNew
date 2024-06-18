<?php
header('Content-Type: application/json');

// Collect form data
$fullName = $_POST['fullName'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$description = $_POST['description'];
$urlLink = isset($_POST['urlLink']) ? $_POST['urlLink'] : null;
$linkName = isset($_POST['linkName']) ? $_POST['linkName'] : null;
$attachment = isset($_FILES['attachment']) ? $_FILES['attachment'] : null;

$to = 'support@z21.ventures'; // Replace with your email address
$from = $email;

// Create email headers
$headers = "From: $from\r\n";
$headers .= "Reply-To: $from\r\n";
$headers .= "MIME-Version: z21 ventures\r\n";

// Generate a boundary string
$boundary = md5(time());

$headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

// Create the email body
$message = "--$boundary\r\n";
$message .= "Content-Type: text/plain; charset=UTF-8\r\n";
$message .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
$message .= "Full Name: $fullName\r\n";
$message .= "Email: $email\r\n";
$message .= "Subject: $subject\r\n";
$message .= "Description: $description\r\n";

if ($urlLink) {
    $message .= "URL Link: $urlLink\r\n";
    $message .= "Link Name: $linkName\r\n";
}

$message .= "\r\n";

// Add attachment if present
if ($attachment && $attachment['error'] == UPLOAD_ERR_OK) {
    $filePath = $attachment['tmp_name'];
    $fileName = $attachment['name'];
    $fileSize = $attachment['size'];
    $fileType = $attachment['type'];

    // Read the file content
    $fileContent = file_get_contents($filePath);
    $fileContent = chunk_split(base64_encode($fileContent));

    // Append attachment to the email body
    $message .= "--$boundary\r\n";
    $message .= "Content-Type: $fileType; name=\"$fileName\"\r\n";
    $message .= "Content-Disposition: attachment; filename=\"$fileName\"\r\n";
    $message .= "Content-Transfer-Encoding: base64\r\n\r\n";
    $message .= $fileContent . "\r\n";
}

$message .= "--$boundary--";

// Send the email
$success = mail($to, $subject, $message, $headers);

// Return response
if ($success) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false]);
}
?>