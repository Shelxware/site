document.addEventListener("DOMContentLoaded", () => {
    // 1. Toggle Navigation Menu
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (navToggle) {
        navToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // 2. Alert Message on Button Click
    const button = document.querySelector("#myButton");

    if (button) {
        button.addEventListener("click", () => {
            alert("Hello, welcome to my website!");
        });
    }

    // 3. Dynamic Year in Footer
    const yearElement = document.querySelector("#year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // 4. Smooth Scrolling for Links
    const links = document.querySelectorAll("a[href^='#']");

    links.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});

