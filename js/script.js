const hamburg = document.getElementById("hamburger");
const navContent = document.querySelector(".nav");

// Hamburger Content
hamburg.addEventListener("click", display);
function display() {
    navContent.classList.toggle("hidden");
}