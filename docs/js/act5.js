// Add functionality to navigation links
document.getElementById("aboutLink").addEventListener("click", () => {
    alert("About section coming soon!");
});

document.getElementById("skillsLink").addEventListener("click", () => {
    alert("Skills section coming soon!");
});

document.getElementById("contactLink").addEventListener("click", () => {
    alert("Contact section coming soon!");
});

// Toggle between light and dark themes
const themeToggleButton = document.getElementById("themeToggle");
themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    const isDark = document.body.classList.contains("dark-theme");
    themeToggleButton.textContent = isDark ? "Switch to Light Mode" : "Switch to Dark Mode";
});

// Add a class for the dark theme in your CSS
// Example dark theme styles:
const darkThemeStyles = document.createElement("style");
darkThemeStyles.textContent = `
    .dark-theme {
        background-color: #121212;
        color: white;
    }
    .dark-theme header {
        background-color: #333;
        color: white;
    }
    .dark-theme a {
        color: #fdd835;
    }
`;
document.head.appendChild(darkThemeStyles);

// Dynamically update content
const description = document.getElementById("description");
description.addEventListener("click", () => {
    description.textContent = "Thank you for viewing my portfolio!";
});

// Add more content dynamically
const container = document.querySelector(".container");
const newSection = document.createElement("div");
newSection.innerHTML = `
    <h3>Dynamic Section</h3>
    <p>This section was added dynamically with JavaScript!</p>
`;
container.appendChild(newSection);
