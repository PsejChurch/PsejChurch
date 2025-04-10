<?php
session_start();
include('config/dbcon.php');

// Ensure the user is logged in
if (!isset($_SESSION['username'])) {
    header('Location: index.php');
    exit;
}

// Get the username from session
$username = $_SESSION['username'];

// Fetch user details from the database based on the session username
$query = "SELECT role FROM users WHERE username = '$username'";
$result = mysqli_query($conn, $query);

// If user exists
if ($result && mysqli_num_rows($result) > 0) {
    $user = mysqli_fetch_assoc($result);
    $role = $user['role'];

    // Redirect based on the user's role
    if ($role == 'admin') {
        header('Location: maindash.html'); // Admin page
        exit;
    } elseif ($role == 'chapter') {
        header('Location: pages/AuthorizeUsers/chapter-dashboard.html'); // Chapter page
        exit;
    } elseif ($role == 'secret') {
        header('Location: pages/AuthorizeUsers/secretariat-dashboard.html'); // Secret page
        exit;
    } elseif ($role == 'account') {
        header('Location: pages/AuthorizeUsers/accounting-dashboard.html'); // Account page
        exit;
    } elseif ($role == 'member') {
        header('Location: pages/AuthorizeUsers/member-dashboard.html'); // Member page
        exit;
    } elseif ($role == 'tithes') {
        header('Location: pages/AuthorizeUsers/tithes-dashboard.html'); // Tithes page
        exit;
    } else {
        // Redirect if role is not recognized
        $_SESSION['error'] = "Role not recognized!";
        header('Location: index.php');
        exit;
    }
} else {
    // User does not exist in the database
    $_SESSION['error'] = "User not found!";
    header('Location: index.php');
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- =====BOX ICONS===== -->
    <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'>

    <!-- Font Awesome CDN -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">

    <!-- ===== CSS ===== -->
    <link rel="stylesheet" href="landingpage/assets/css/styles.css">
    <link rel="shortcut icon" href="images/logo.png" />

    <title>PSEJ Church</title>
</head>

<body>
    <!--===== HEADER =====-->
    <header class="l-header">
        <nav class="nav bd-grid">
            <div>
                <a href="#home" class="nav__logo">
                    <img src="images/LOGO PSEJ.png" alt="PSEJ LOGO">
                </a>
            </div>

            <div class="nav__toggle" id="nav-toggle">
                <i class='bx bx-menu'></i>
            </div>

            <div class="nav__menu" id="nav-menu">
                <div class="nav__close" id="nav-close">
                    <i class='bx bx-x'></i>
                </div>

                <ul class="nav__list">
                    <li class="nav__item"><a href="#home" class="nav__link active">Home</a></li>
                    <li class="nav__item"><a href="landingpage/pages/about.html" class="nav__link">About</a></li>
                    <li class="nav__item">
                        <a href="#" id="login-icon" class="nav__link">
                            <i class='bx bx-user'></i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>

    <!-- Login Modal (Hidden by Default) -->
    <div id="login-modal" class="modal" style="display: none;">
        <div class="modal-content">
            <span class="close">&times;</span> <!-- Close Button -->
            <img src="images/LOGO PSEJ.png" alt="PSEJ CHURCH" class="logo">

            <!-- Default Login Form -->
            <div id="login-form">
                <h2>Sign in to Your Account</h2>
                <p>Enter your credentials to access your dashboard.</p>
                <form action="" method="POST">
                    <div class="input-container">
                        <i class="fa-solid fa-user"></i>
                        <input type="text" id="username" placeholder="Username" required>
                    </div>

                    <div class="input-container">
                        <i class="fa-solid fa-lock"></i>
                        <input type="password" id="password" placeholder="Password" required>
                    </div>

                    <button type="submit">Login</button>
                    <div class="options">
                        <a href="#" id="forgot-password-link">Forgot password?</a>
                    </div>
                </form>
            </div>

            <!-- Forgot Password Form (Hidden by Default) -->
            <div id="forgot-password-form" style="display: none;">
                <h2>Reset Your Password</h2>
                <p>Enter your email to receive a verification code.</p>
                <form>
                    <div class="input-container">
                        <i class="fas fa-envelope"></i>
                        <input type="email" id="reset-email" placeholder="Enter your email" required>
                    </div>
                    <button type="button" id="send-code">Send Code</button>
                </form>
            </div>

            <!-- Verification Form (Hidden by Default) -->
            <div id="verification-form" style="display: none;">
                <h2>Verify Your Email</h2>
                <p>Enter the verification code sent to your email.</p>
                <form>
                    <input type="text" id="verification-code" placeholder="Enter code" required>
                    <button type="button" id="verify-code">Verify</button>
                </form>
            </div>
        </div>
    </div>


    <main class="l-main">
        <!--===== HOME =====-->
        <section class="home" id="home">
            <div class="home__container bd-grid">
                <div class="home__img">
                    <img src="landingpage/assets/img/cross.png" alt="Cross" data-speed="2" class="move cross">
                    <img src="landingpage/assets/img/bible.png" alt="Bible" data-speed="-2" class="move bible">
                </div>

                <div class="home__data">
                    <h3 class="home__title">Welcome to<br> PSEJ Church</h3>
                    <p class="home__description">Join us in faith, worship, and community <br> as we grow spiritually
                        together.</p>
                </div>
            </div>
        </section>

        <!--===== ABOUT =====-->
        <section class="about section" id="about">
            <div class="bd-grid about__container">
                <img src="landingpage/assets/img/about.png" alt="Church Image" class="about__img nav__item">
                <div class="about__content nav__item">
                    <h2 class="section-title">About Us</h2>
                    <p class="section-description">
                        PSEJ Church is dedicated to bringing people together in faith, love, and service. Our mission is
                        to spread the word of God and create a strong spiritual community.
                    </p>
                    <div class="about__btn-container">
                        <a href="landingpage/pages/about.html" class="btn">Learn More</a>
                    </div>
                </div>
            </div>
        </section>

        <!--===== LOCATION =====-->
        <section class="location section" id="location">
            <div class="bd-grid">
                <h2 class="section-title nav__item">Our Locations</h2>
                <p class="section-description nav__item">Visit any of our PSEJ Church chapters near you.</p>

                <!-- Card container for the table -->
                <div class="location-card nav__item">
                    <div class="table-container">
                        <table class="location-table">
                            <thead>
                                <tr>
                                    <th>Chapter</th>
                                    <th>Address</th>
                                    <th>Contact</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Poblacion Plaridel</td>
                                    <td>123 Poblacion St., Plaridel, Philippines</td>
                                    <td>+63 912 345 6789</td>
                                </tr>
                                <tr>
                                    <td>Sipat Plaridel</td>
                                    <td>456 Sipat St., Plaridel, Philippines</td>
                                    <td>+63 912 234 5678</td>
                                </tr>
                                <tr>
                                    <td>Banga 1st</td>
                                    <td>789 Banga St., Philippines</td>
                                    <td>+63 912 345 6789</td>
                                </tr>
                                <tr>
                                    <td>San Antonio NE</td>
                                    <td>321 San Antonio Ave., NE, Philippines</td>
                                    <td>+63 912 456 7890</td>
                                </tr>
                                <tr>
                                    <td>San Leonardo NE</td>
                                    <td>654 San Leonardo Ave., NE, Philippines</td>
                                    <td>+63 912 567 8901</td>
                                </tr>
                                <tr>
                                    <td>R10 Tondo</td>
                                    <td>987 R10 St., Tondo, Philippines</td>
                                    <td>+63 912 678 9012</td>
                                </tr>
                                <tr>
                                    <td>Cavite</td>
                                    <td>123 Cavite Rd., Cavite, Philippines</td>
                                    <td>+63 912 789 0123</td>
                                </tr>
                                <tr>
                                    <td>Galas Balagtas</td>
                                    <td>4321 Galas Rd., Balagtas, Philippines</td>
                                    <td>+63 912 890 1234</td>
                                </tr>
                                <tr>
                                    <td>Malolos</td>
                                    <td>567 Malolos Ave., Malolos, Philippines</td>
                                    <td>+63 912 901 2345</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="location__btn-container nav__item">
                    <a href="landingpage/pages/about.html#location" class="btn">Get Directions</a>
                </div>
            </div>
        </section>

        <!--===== SUPPLICATION =====-->
        <section class="supplication section nav__item" id="supplication">
            <div class="bd-grid">
                <div class="card">
                    <div class="card-content">
                        <div class="image-column">
                            <img src="landingpage/assets/img/pray.jpg" alt="Bible Image" class="bible-image">
                        </div>
                        <div class="form-column">
                            <h2 class="section-title">Supplication & Prayers</h2>
                            <p class="section-description">Send us your prayer requests, and our church community will
                                lift them up in prayer.</p>

                            <form action="#" method="POST" class="supplication-form">
                                <div class="input-group">
                                    <i class="fas fa-user"></i>
                                    <input type="text" id="name" name="name" placeholder="Your Name" required
                                        class="input-field">
                                </div>

                                <div class="input-group">
                                    <i class="fas fa-envelope"></i>
                                    <input type="email" id="email" name="email" placeholder="Your Email" required
                                        class="input-field">
                                </div>

                                <div class="input-group">
                                    <i class="fas fa-praying-hands"></i>
                                    <select id="prayer-type" name="prayer-type" required class="input-field">
                                        <option value="" disabled selected>Type of Prayer Request</option>
                                        <option value="healing">Healing</option>
                                        <option value="family">Family</option>
                                        <option value="guidance">Guidance</option>
                                        <option value="thanksgiving">Thanksgiving</option>
                                        <option value="protection">Protection</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div class="input-group">
                                    <i class="fas fa-comment"></i>
                                    <textarea id="prayer" name="prayer" rows="4" placeholder="Your Prayer Request"
                                        required class="input-field"></textarea>
                                </div>

                                <button type="submit" class="submit-button">Send Prayer Request</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!--===== FOOTER =====-->
        <footer class="footer">
            <div class="footer__container bd-grid">
                <div class="footer__about">
                    <h3 class="footer__title">PSEJ Church</h3>
                    <p class="footer__description">
                        Spreading faith, love, and service to build a strong spiritual community.
                    </p>
                </div>

                <div class="footer__links">
                    <h3 class="footer__title">Quick Links</h3>
                    <ul>
                        <li><a href="#home" class="footer__link">Home</a></li>
                        <li><a href="#about" class="footer__link">About</a></li>
                        <li><a href="#event" class="footer__link">Events</a></li>
                        <li><a href="#supplication" class="footer__link">Supplication</a></li>
                    </ul>
                </div>

                <div class="footer__contact">
                    <h3 class="footer__title">Contact Us</h3>
                    <p><i class='bx bx-map'></i> [Insert Address Here]</p>
                    <p><i class='bx bx-phone'></i> +123 456 7890</p>
                    <p><i class='bx bx-envelope'></i> contact@psejchurch.org</p>
                </div>

                <div class="footer__social">
                    <h3 class="footer__title">Follow Us</h3>
                    <div class="footer__social-links">
                        <a href="#" class="footer__social-icon"><i class='bx bxl-facebook'></i></a>
                        <a href="#" class="footer__social-icon"><i class='bx bxl-twitter'></i></a>
                        <a href="#" class="footer__social-icon"><i class='bx bxl-instagram'></i></a>
                        <a href="#" class="footer__social-icon"><i class='bx bxl-youtube'></i></a>
                    </div>
                </div>

                <div class="footer__qr">
                    <h3 class="footer__title">Scan QR</h3>
                    <img src="images/QRFB.png" alt="QR Code" class="footer__qr-img">
                </div>

            </div>

            <div class="footer__bottom">
                <p>&copy; 2025 PSEJ Church. All rights reserved.</p>
            </div>
        </footer>


    </main>

    <!--===== GSAP =====-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>

    <!-- Font Awesome for Icons -->
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>

    <!--===== MAIN JS =====-->
    <script src="landingpage/assets/js/main.js"></script>
</body>

</html>