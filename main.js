// const menuBtn = document.getElementById("menu-btn");
// const navLinks = document.getElementById("nav-links");
// const menuBtnIcon = menuBtn.querySelector("i");

// menuBtn.addEventListener("click", (e) => {
//   navLinks.classList.toggle("open");

//   const isOpen = navLinks.classList.contains("open");
//   menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
// });

// navLinks.addEventListener("click", (e) => {
//   navLinks.classList.remove("open");
//   menuBtnIcon.setAttribute("class", "ri-menu-line");
// });

// const scrollRevealOption = {
//   origin: "bottom",
//   distance: "50px",
//   duration: 1000,
// };

// ScrollReveal().reveal(".header__image img", {
//   ...scrollRevealOption,
//   origin: "right",
// });
// ScrollReveal().reveal(".header__content h5", {
//   ...scrollRevealOption,
//   delay: 500,
// });
// ScrollReveal().reveal(".header__content h1", {
//   ...scrollRevealOption,
//   delay: 1000,
// });
// ScrollReveal().reveal(".header__content p", {
//   ...scrollRevealOption,
//   delay: 1500,
// });
// ScrollReveal().reveal(".header__content .links", {
//   ...scrollRevealOption,
//   delay: 2000,
// });


window.onscroll = function () {
    let navbar = document.getElementById("navbar");
    let logoNav = document.querySelector(".logo-nav"); // Select the logo-nav class
    let logo_text = document.querySelector(".logo-text"); // Select the logo-text class

    if (window.pageYOffset > 50) { // Adjust the 50px as needed
        navbar.classList.add("scrolled");
        logoNav.classList.add("scrolled");
        logo_text.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
        logoNav.classList.remove("scrolled"); // Remove the class here
        logo_text.classList.remove("scrolled"); // Remove the class here
    }
};

let toggleButton = document.querySelector(".toggle_button");
let navbar = document.getElementById("navbar"); // Select the navbar
let navLinks = document.querySelector(".nav-links"); // Select the nav-links

toggleButton.addEventListener("click", function () {
    navbar.classList.toggle("active");
    navLinks.classList.toggle("active");
    toggleButton.classList.toggle("active"); // Toggle the rotation class
});

window.onload = function () {
    let currentUrl = window.location.href; // Get the full current URL
    let navLinks = document.querySelectorAll('.nav-links a'); // Select all navigation links

    navLinks.forEach(link => {
        // Get the link's href
        let linkHref = link.getAttribute('href');

        // Check if the current URL exactly matches the link's href
        if (currentUrl === linkHref) {
            link.classList.add('active'); // Add active class if it matches exactly
        } else if (currentUrl.includes('index.html')) { // Check for index.html with hash
            if (linkHref.includes('#')) { // Only for links with anchors
                // Remove active class from Home when on index.html with hash
                if (linkHref === 'index.html' && currentUrl.includes('')) {
                    link.classList.add('active');
                } else if (linkHref === '#about' && currentUrl.includes('#about')) {
                    link.classList.add('active');
                } else if (linkHref === '#resume' && currentUrl.includes('#resume')) {
                    link.classList.add('active');
                }
            }
        }
    });

    // Check if we are on index.html without hash
    if (currentUrl.includes('index.html') && !currentUrl.includes('#')) {
        // Activate the Home link
        navLinks[0].classList.add('active'); // Home link
    }
};





