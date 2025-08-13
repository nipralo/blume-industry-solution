<?php
$server = "localhost";
$user = "root";
$password = "";
$db = "blume_form_db";

$mysqli = new mysqli($server, $user, $password, $db);

// Optional: you can handle connection errors here if not handling in main file
if ($mysqli->connect_error) {
    die("Database connection failed: " . $mysqli->connect_error);
}

return $mysqli;
