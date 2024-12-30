<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GlobalExploiter</title>
    <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@700&display=swap" rel="stylesheet">
    
    <!-- Favicon -->
    <link rel="icon" href="https://media.discordapp.net/attachments/1296169780155256884/1321516127662116956/best-i-can-do.jpg?ex=677179cd&is=6770284d&hm=8247194597191c24bfeb6261a996d5c909f78d60ec00383125f59a265e5b5576&=&width=602&height=602" type="image/jpg">
    
    <style>
        /* General styling */
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            color: #ffffff;
            overflow-x: hidden;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: linear-gradient(to bottom right, #2c3e50, #4a6fa5);
            transition: background-color 0.3s ease;
            opacity: 0; /* Initially set to invisible */
            animation: fadeIn 1s forwards; /* Apply fade-in animation */
        }

        @keyframes fadeIn {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }

        /* Smooth scrolling */
        html {
            scroll-behavior: smooth;
        }

        /* Header styling */
        header {
            display: flex;
            align-items: center;
            padding: 20px;
            background: rgba(0, 0, 0, 0.8);
            position: relative;
        }

        /* Hamburger menu styling */
        .menu-toggle {
            position: absolute;
            left: 20px;
            top: 50%;
            transform: translateY(-50%);
            display: flex;
            flex-direction: column;
            cursor: pointer;
            z-index: 10;
        }

        .menu-toggle div {
            width: 30px;
            height: 4px;
            background-color: #fff;
            margin: 4px 0;
            transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .menu-toggle.active div:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
        }

        .menu-toggle.active div:nth-child(2) {
            opacity: 0;
        }

        .menu-toggle.active div:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
        }

        .menu-toggle.active div {
            border-radius: 2px;
        }

        /* Search box styling */
        .search-box {
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            background-color: rgba(255, 255, 255, 0.7);
            padding: 8px 15px;
            border-radius: 20px;
            display: flex;
            align-items: center;
        }

        .search-box input {
            border: none;
            padding: 5px;
            font-size: 1em;
            border-radius: 10px;
            outline: none;
            background-color: transparent;
            color: #333;
            margin-right: 10px;
        }

        .search-box button {
            border: none;
            background: #00bcd4;
            color: white;
            padding: 8px 12px;
            border-radius: 20px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .search-box button:hover {
            background-color: #0097a7;
        }

        /* Overlay styling */
        .menu-overlay {
            position: fixed;
            top: 0;
            left: -100%;
            height: 100%;
            width: 300px;
            background-color: rgba(0, 0, 0, 0.85);
            box-shadow: 2px 0 6px rgba(0, 0, 0, 0.5);
            padding: 60px 20px 20px;
            transition: left 0.4s ease-in-out;
            z-index: 5;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .menu-overlay.active {
            left: 0;
        }

        /* Styled menu buttons */
        .menu-overlay a {
            display: block;
            color: white;
            text-decoration: none;
            font-family: 'Fredoka', sans-serif;
            font-weight: 700;
            font-size: 1.5em;
            margin: 20px 0;
            padding: 10px;
            text-align: center;
            background-color: rgba(135, 206, 235, 0.9);
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(255, 255, 255, 0.6);
            transition: transform 0.3s, background-color 0.3s, box-shadow 0.3s;
        }

        .menu-overlay a:hover {
            transform: scale(1.1);
            background-color: rgba(100, 149, 237, 0.9);
            box-shadow: 0 6px 15px rgba(255, 255, 255, 0.9);
        }

        /* Social icon container */
        .social-icons {
            display: flex;
            justify-content: center;
            position: absolute;
            top: 600px;
            left: 50%;
            transform: translateX(-50%);
            margin: 0;
        }

        .social-icons a {
            display: inline-block;
            width: 40px;
            height: 40px;
            margin: 0 10px;
            border-radius: 50%;
            overflow: hidden;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .social-icons a img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .social-icons a:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 15px rgba(255, 255, 255, 0.8);
        }

        /* New box with image, text, and button */
        .image-box {
            width: 60%;
            margin: 20px auto;
            background-color: rgba(0, 0, 0, 0.8);
            padding: 20px;
            text-align: center;
            border-radius: 15px;
            position: relative;
        }

        .image-box img {
            width: 100%;
            height: auto;
            max-height: 500px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.6);
        }

        .copy-button {
            margin-top: 20px;
            padding: 10px 20px;
            font-size: 1.2em;
            background-color: #00bcd4;
            border: none;
            color: white;
            border-radius: 10px;
            cursor: pointer;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
            transition: background-color 0.3s, transform 0.3s;
            font-family: 'Fredoka', sans-serif;
            font-weight: 700;
        }

        .copy-button:hover {
            background-color: #0097a7;
            transform: scale(1.1);
        }

        /* Heading styling inside the box - smaller size */
        .image-box h2 {
            font-family: 'Fredoka', sans-serif;
            font-weight: 700;
            font-size: 1.2em; /* Further reduced font size */
            color: #ffffff;
            margin-bottom: 15px;
            text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
        }

    </style>
</head>
<body>
    <!-- Background -->
    <div class="background-blur"></div>

    <!-- Header -->
    <header>
        <div class="menu-toggle" onclick="toggleMenu()">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div style="flex: 1; height: 50px;"></div>
        <div class="search-box">
            <input type="text" placeholder="Search...">
            <button>Search</button>
        </div>
    </header>

    <!-- Menu Overlay -->
    <nav class="menu-overlay" id="menu">
        <div>
            <a href="#home" onclick="window.location.href='https://globalexploiter.xyz';">Home</a>
            <a href="Scripts.html">Scripts</a>
            <a href="#executors">Executors</a>
            <a href="#contact">Contact</a>
        </div>
        <div class="social-icons">
            <a href="https://youtube.com/@globalexploitor?si=ULxJfeU0MbH6DNhy" target="_blank">
                <img src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png" alt="YouTube">
            </a>
            <a href="#" target="_blank">
                <img src="https://media.discordapp.net/attachments/1235374443413635115/1322719710835638313/IMG_1348.png?ex=6771e63a&is=677094ba&hm=b584940836f5bfef6e2333f84f6b1331a856eb0ef8c0852d3d412dd41ed615eb&=&width=832&height=468" alt="Discord">
            </a>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="image-box">
            <h2>Murder Mystery 2 Vertex Hub</h2>
            <img src="https://media.discordapp.net/attachments/1237163573894053888/1322659186370154607/2F2C2865-7B60-43F0-B2D6-9BC7AF38E716.jpg?ex=6771addb&is=67705c5b&hm=e4b0bc70dbca0031d964cdcb17ffcdeadadaf9c598ac6dac214c3b7149d45e7e&=&width=1071&height=602" alt="Script Image">
            <button class="copy-button" onclick="copyScript()">Copy Script</button>
        </div>
    </section>

    <!-- JavaScript -->
    <script>
        function toggleMenu() {
            const menu = document.getElementById('menu');
            const toggle = document.querySelector('.menu-toggle');
            menu.classList.toggle('active');
            toggle.classList.toggle('active');
        }

        function copyScript() {
            const scriptText = "loadstring(game:HttpGet('https://raw.githubusercontent.com/Burdenerd/VertexHub/refs/heads/main/Offical'))()";
            navigator.clipboard.writeText(scriptText).then(() => {
                const button = document.querySelector('.copy-button');
                button.textContent = "Copied!";
                setTimeout(() => {
                    button.textContent = "Copy Script";
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy:', err);
            });
        }
    </script>
</body>
</html>