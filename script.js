document.addEventListener("DOMContentLoaded", () => {
    // Create a new button element
    const jsButton = document.createElement("button");
    
    // Set the button's text and class (reusing the cta-button style)
    jsButton.textContent = "Added via JS";
    jsButton.className = "cta-button";
    jsButton.style.marginTop = "1rem";
    jsButton.style.marginLeft = "1rem";
    
    // Add click functionality
    jsButton.addEventListener("click", () => {
        alert("Hello from JavaScript!");
    });
    
    // Find the hero section and append the button to it
    const heroSection = document.querySelector(".hero");
    heroSection.appendChild(jsButton);
});
