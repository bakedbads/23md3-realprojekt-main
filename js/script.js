'use strict';

function toggleMenu() {
    var nav = document.getElementById("nav");
    var header = document.querySelector("header");

    // Check if the screen width is less than 768 pixels (adjust this value as needed)
    if (window.innerWidth < 768) {
        if (nav.style.display === "flex") {
            // If the navigation is currently visible, hide it
            nav.style.display = "none";
            header.style.height = "0";
            header.style.width = "0";
        } else {
            // If the navigation is currently hidden, show it
            nav.style.display = "flex";
            header.style.height = "100vh";
            header.style.width = "100wh";
        }
    }
}

