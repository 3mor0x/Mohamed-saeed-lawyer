// Ensure the DOM is fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', () => {
    
    // Feature 1: Dynamic Year Update for Footer
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = currentYear;
    }

    // Feature 2: Interactive Hover Effect for Bento Cards
    // Adds a smooth tactile scaling effect when interacting with modules
    const bentoCards = document.querySelectorAll('.msLaw_bentoModule_card');

    bentoCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Slight scale down to simulate a tactile press
            card.style.transform = 'scale(0.98)';
        });

        card.addEventListener('mouseleave', () => {
            // Return to normal state
            card.style.transform = 'scale(1)';
        });
    });

    // Output status for debugging
    console.log("msLaw Bento Grid UI Initialized Successfully.");
});