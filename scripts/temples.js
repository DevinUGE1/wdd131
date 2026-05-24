//W02 Assignment: Picture Album by Devin Gamboa Enciso

// Get current year
const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

// Get last modified date
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modified: " + lastModified;

const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");

    const isOpen = mainNav.classList.contains("open");

    menuToggle.setAttribute("aria-expanded", isOpen);

    if (isOpen) {
        menuToggle.innerHTML = "&times;";
    } else {
        menuToggle.innerHTML = "☰";
    }
});