// Select the ID "menu-button"
const button = document.querySelector("#menu-button");
//Select the ID "menu"
const menu = document.querySelector("#menu");

// Add an Event to the button when it's clicked
button.addEventListener("click", function(){
    menu.classList.toggle("open");
    
    if (menu.classList.contains("open")) {
        button.textContent = "✖";
    } else {
        button.textContent = "☰";
    }
})

// Get current year
const currentYear = new Date().getFullYear();

// Insert year in footer
document.getElementById("currentyear").textContent = currentYear;

// Get last modified date
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;