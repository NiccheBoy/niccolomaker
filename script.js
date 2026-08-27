// =========================
// MENU MOBILE
// =========================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// Chiudi il menu quando clicchi un link

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

});


// =========================
// ANNO AUTOMATICO
// =========================

const currentYear = new Date().getFullYear();

const copyright = document.querySelector(".copyright");

if (copyright) {
    copyright.innerHTML =
        `© ${currentYear} Niccolò Maker. Tutti i diritti riservati.`;
}
