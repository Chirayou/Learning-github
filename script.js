document.addEventListener("DOMContentLoaded", () => {
    // We'll create a fancy JS button to append below the grid
    const jsContainer = document.createElement("div");
    jsContainer.style.marginTop = "4rem";
    jsContainer.style.display = "flex";
    jsContainer.style.justifyContent = "center";
    
    const jsButton = document.createElement("button");
    jsButton.textContent = "Initialize Sequence";
    jsButton.className = "btn btn-secondary";
    
    // Add cool hover and click effects
    jsButton.addEventListener("mouseenter", () => {
        jsButton.style.boxShadow = "0 0 15px var(--accent-1)";
    });
    jsButton.addEventListener("mouseleave", () => {
        jsButton.style.boxShadow = "none";
    });
    
    jsButton.addEventListener("click", () => {
        jsButton.innerHTML = "Sequence Initiated... 🚀";
        jsButton.style.background = "var(--accent-1)";
        jsButton.style.color = "white";
        jsButton.style.border = "none";
        
        // Create a ripple/burst effect on the body
        const burst = document.createElement("div");
        burst.style.position = "fixed";
        burst.style.top = "50%";
        burst.style.left = "50%";
        burst.style.transform = "translate(-50%, -50%)";
        burst.style.width = "10px";
        burst.style.height = "10px";
        burst.style.background = "rgba(139, 92, 246, 0.5)";
        burst.style.borderRadius = "50%";
        burst.style.zIndex = "9999";
        burst.style.transition = "all 1s cubic-bezier(0.075, 0.82, 0.165, 1)";
        document.body.appendChild(burst);
        
        setTimeout(() => {
            burst.style.width = "300vw";
            burst.style.height = "300vw";
            burst.style.opacity = "0";
        }, 50);
        
        setTimeout(() => {
            burst.remove();
            jsButton.innerHTML = "Initialize Sequence";
            jsButton.style = ""; // reset
        }, 1500);
    });
    
    jsContainer.appendChild(jsButton);
    
    // Find the hero section and append the button to it
    const bentoGrid = document.querySelector(".bento-grid");
    if(bentoGrid && bentoGrid.parentNode) {
        bentoGrid.parentNode.insertBefore(jsContainer, bentoGrid.nextSibling);
    }
});
