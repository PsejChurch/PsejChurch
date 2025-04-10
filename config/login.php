<?php
// Handle POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = strtolower(trim($_POST["username"]));
    $password = md5(trim($_POST["password"])); // Note: use bcrypt in real systems

    $stmt = $conn->prepare("SELECT role FROM users WHERE username=? AND password=?");
    $stmt->bind_param("ss", $username, $password);
    $stmt->execute();
    $stmt->bind_result($role);

    if ($stmt->fetch()) {
        // Redirect based on role
        switch ($role) {
            case 'admin':    $redirect = "maindash.html"; break;
            case 'chapter':  $redirect = "pages/AuthorizeUsers/chapter-dashboard.html"; break;
            case 'secret':   $redirect = "pages/AuthorizeUsers/secretariat-dashboard.html"; break;
            case 'account':  $redirect = "pages/AuthorizeUsers/accounting-dashboard.html"; break;
            case 'member':   $redirect = "pages/AuthorizeUsers/member-dashboard.html"; break;
            case 'tithes':   $redirect = "pages/AuthorizeUsers/tithes-dashboard.html"; break;
            default:         $redirect = "index.html"; break;
        }
        header("Location: $redirect");
        exit();
    } else {
        echo "<script>alert('Invalid username or password!'); window.history.back();</script>";
    }
    $stmt->close();
}
$conn->close();
?>