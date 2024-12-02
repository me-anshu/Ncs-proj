// script.js

// Scroll effect for navigation links
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", event => {
        const target = document.querySelector(event.target.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});
