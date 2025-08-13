
<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

require 'conn.php';
require 'function.php';

date_default_timezone_set('Asia/Kolkata');
$currentDateTime = date('Y-m-d H:i:s');

$allowed_origins = [
    "https://blis.com",
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
// include "admin/_includes/function.php";  // Include reusable mail function

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $inputData = json_decode(file_get_contents('php://input'), true);

    // Check if email is provided
    $email = isset($inputData['email']) ? $inputData['email'] : '';
    $name = isset($inputData['name']) ? $inputData['name'] : '';
    $phone = isset($inputData['phone']) ? $inputData['phone'] : '';

    if (empty($email)) {
        echo json_encode(['status' => 'error', 'message' => 'Email is required']);
        exit;
    }

    // Generate OTP
    $otp = rand(100000, 999999);

    // Insert OTP into the database
    $sqlTable = "INSERT INTO otp (otp_num, email) VALUES ('$otp', '$email')";
    if ($conn->query($sqlTable) === TRUE) {
        $subject = "Your OTP for Company Form";
        $body = "Dear $name,<br><br>Your OTP is <b>$otp</b>. Please enter this to verify your submission.<br><br>Best regards,<br>Blume Industry Solutions";

        // Use the reusable mail function
        $emailStatus = SentMail($email, $name, $subject, $body);

        if ($emailStatus === true) {
            echo json_encode(['status' => 'success', 'message' => 'OTP sent to email']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Failed to send OTP: ' . $emailStatus]);
        }
    } else {
        error_log('Database Insertion Error: ' . $conn->error);
        echo json_encode(['status' => 'error', 'message' => 'Failed to insert OTP into the database']);
    }
}
?>