<?php 
$conn = new mysqli('localhost', 'u481869759_psej', 'pseJChurch25', 'u481869759_psejchurch');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>