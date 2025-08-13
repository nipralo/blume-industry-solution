<?php

require 'conn.php';
require 'function.php';

date_default_timezone_set('Asia/Kolkata');
$currentDateTime = date('Y-m-d H:i:s');

$allowed_origins = [
    "https://devislodge.com",
    "https://devis.nipralo.in",
];

if (isset($_SERVER['HTTP_ORIGIN'])) {
    $origin = $_SERVER['HTTP_ORIGIN'];
    if (preg_match('/^http:\/\/localhost:\d+$/', $origin) || preg_match('/^http:\/\/127\.0\.0\.1:\d+$/', $origin)) {
        header("Access-Control-Allow-Origin: " . $origin);
    } elseif (in_array($origin, $allowed_origins)) {
        header("Access-Control-Allow-Origin: " . $origin);
    }
}
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");


// include "admin/_includes/conn.php";
require 'vendor/autoload.php'; // Include PHPMailer autoload
// include "admin/_includes/function.php";  // Include reusable mail function

error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $inputData = json_decode(file_get_contents('php://input'), true);
    // if (isset($inputData['action']) && $inputData['action'] === 'verify_otp') {

    // $otp = trim(mysqli_real_escape_string($conn, $inputData['otp']));
    // $email = mysqli_real_escape_string($conn, $inputData['email']);

    // Check if email is provided
    $email = isset($inputData['email']) ? $inputData['email'] : '';
    $otp = isset($inputData['otp']) ? $inputData['otp'] : '';

    // Fetch the latest OTP for the email
    $sql = "SELECT * FROM otp WHERE email = '$email' ORDER BY created_at DESC LIMIT 1";
    $result = mysqli_query($conn, $sql);

    if (!$result) {
        echo json_encode([
            'status' => 'error',
            'message' => 'Database error: ' . mysqli_error($conn)
        ]);
        exit;
    }

    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        // Debugging: Log the stored OTP
        error_log("Stored OTP: " . $row['otp_num']);

        if (strval($row['otp_num']) === strval($otp)) {
            // OTP verification successful
            $response = [
                'status' => 'success',
                'message' => 'OTP verified successfully!'
            ];

            // Execute the email functionality (mail.php logic)
            // Escape input data

            // var_dump($inputData);
            $name = mysqli_real_escape_string($conn, $inputData['name']);
            $message = mysqli_real_escape_string($conn, $inputData['message']);
            $message = str_replace('\n', "<br>", $message);
            $phone = isset($inputData['phone']) ? mysqli_real_escape_string($conn, $inputData['phone']) : null;
            $selectedService = mysqli_real_escape_string($conn, $inputData['selectedService']);
            $currentDateTime = date('Y-m-d H:i:s');

            // Insert data into the contact_form table
            $insertSQL = "INSERT INTO pentamain_contact(name, service, phone, email, message, created_at, updated_at) 
                VALUES ('$name', '$selectedService', '$phone', '$email', '$message', '$currentDateTime', '$currentDateTime')";

            if (mysqli_query($conn, $insertSQL)) {
                // Prepare email content for the company
                // $companyEmail = 'atlantainfra.2023@gmail.com';
                $companyEmail = $companyEmailInFunction;
                $subjectToCompany = "Enquiry From: $name";
                $bodyToCompany = getMailBody($name, $email, $phone, $message, $selectedService);

                // Send email to the company
                SentMail($companyEmail, 'Team Penta Freight', $subjectToCompany, $bodyToCompany);

                // Prepare thank-you email content for the client
                $subjectToClient = "Thank You for Your Enquiry";
                $bodyToClient = "<html>
                                        <body>
                                            <p>Dear $name,</p>
                                            <p>Thank you for your enquiry! We will get back to you shortly.</p>
                                            <p>Regards,<br>Team Penta Freight</p>
                                        </body>
                                        </html>";

                // Send thank-you email to the client
                SentMail($email, $name, $subjectToClient, $bodyToClient);

                $response['message'] .= ' Mail sent successfully!';
            } else {
                $response['status'] = 'error';
                $response['message'] = 'Failed to save enquiry in the database.';
            }
        } else {
            // Invalid OTP
            $response = [
                'status' => 'error',
                'message' => 'Invalid OTP. Please try again.'
            ];
        }
    } else {
        // No OTP found
        $response = [
            'status' => 'error',
            'message' => 'No OTP found for this email. Please request again.'
        ];
    }

    // Set content type to JSON
    header('Content-Type: application/json');
    echo json_encode($response);
    exit;
    // }
}

// Function to generate the HTML email body for the company
function getMailBody($name, $email, $phone, $message, $selectedService)
{
    return "<html>
                <head>
                    <style>
                        body { background: #f6f9fc; font-family: 'Arial', sans-serif; }
                        table { width: 50%; border-collapse: collapse; }
                        th, td { padding: 10px 15px; text-align: left; border-bottom: 3px solid #ddd; }
                        th { background-color: #6acdfb; color: white; }
                    </style>
                </head>
                <body>
                    <p>Dear Team,</p>
                    <p>Please check the below enquiry we received from the client.</p>
                    <table>
                        <tr><th>Name</th><td>$name</td></tr>
                        <tr><th>Email</th><td>$email</td></tr>
                        <tr><th>Number</th><td>$phone</td></tr>
                        <tr><th>Message</th><td>$message</td></tr>
                        <tr><th>Service</th><td>$selectedService</td></tr>
                    </table>
                    <p>Regards,<br>Team Penta Freight</p>
                </body>
            </html>";
}
