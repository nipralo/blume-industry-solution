<?php

// Allowed origins
$allowed_origins = [
    "http://localhost:8080",
    "http://localhost",
    "https://blis.com"
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowed_origins)) {
    // header("Access-Control-Allow-Origin: $origin");
    header("Access-Control-Allow-Origin: http://localhost:8080"); // exact match to your React a
    header("Vary: Origin");
}
// header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

// Handle Preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit();
}

// Require PHPMailer
require __DIR__ . '/vendor/autoload.php';
$config = require __DIR__ . '/mailer_config.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// POST only
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
    exit();
}

// Decode JSON input
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!$data) {
    echo json_encode(['success' => false, 'message' => 'Invalid JSON input.']);
    exit();
}

$name    = htmlspecialchars(trim($data['name'] ?? ''));
$email   = filter_var(trim($data['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$message = htmlspecialchars(trim($data['message'] ?? ''));

// Basic Validation
if (empty($name) || empty($email) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Please fill all required fields with valid data.']);
    exit();
}

// Database
$db_config = require __DIR__ . '/conn.php';
// $mysqli = new mysqli(
//     $db_config['server'],
//     $db_config['user'],
//     $db_config['password'],
//     $db_config['db']
// );

if ($mysqli->connect_error) {
    echo json_encode(['success' => false, 'message' => 'DB Connection failed: ' . $mysqli->connect_error]);
    exit();
}

// Prepare Insert
$stmt = $mysqli->prepare("INSERT INTO client_inquiries (name, email, message) VALUES (?, ?, ?)");
if (!$stmt) {
    echo json_encode(['success' => false, 'message' => 'Prepare failed: ' . $mysqli->error]);
    exit();
}

$stmt->bind_param("sss", $name, $email, $message);
if (!$stmt->execute()) {
    echo json_encode(['success' => false, 'message' => 'Execute failed: ' . $stmt->error]);
    exit();
}

// Send Emails
$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host       = $config['host'];
    $mail->SMTPAuth   = true;
    $mail->Username   = $config['username'];
    $mail->Password   = $config['password'];
    $mail->SMTPSecure = $config['encryption'];
    $mail->Port       = $config['port'];

    // User confirmation
    $mail->setFrom($config['username'], $config['from_name']);
    $mail->addAddress($email, $name);
    $mail->Subject = "Thank You for Your Inquiry - Blume Industry Solutions Team";
    $mail->Body    = "Dear $name,\n\nThank you for contacting Blume Industry Solutions Team.\n\nHere is what you submitted:\n\nName: $name\nEmail: $email\nMessage: $message\n\nWe will get back to you shortly.\nThanks & Regards;\nTeam Blume Industry Solutions.";
    $mail->send();

    // Notify Admin
    $mail->clearAddresses();
    $mail->addAddress($config['admin_email'], 'Admin');
    $mail->Subject = "New Inquiry from $name - Blume Industry Solutions Website";
    $mail->Body    = "New client inquiry:\n\nName: $name\nEmail: $email\nMessage: $message";
    $mail->send();

    echo json_encode(['success' => true, 'message' => 'Inquiry sent successfully.']);
} catch (Exception $e) {
    error_log("Mailer error: " . $mail->ErrorInfo);
    echo json_encode(['success' => false, 'message' => 'Mailer error: ' . $mail->ErrorInfo]);
}

$stmt->close();
$mysqli->close();
