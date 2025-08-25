// Responsive Navigation Burger
document.getElementById("burger").onclick = function() {
    document.getElementById("navLinks").classList.toggle("active");
};

// Show Feature Section
function showFeature() {
    document.getElementById("feature").classList.remove("hidden");
    window.location.hash = "feature";
}

// Random Fact Generator
const facts = [
    "Honey never spoils.",
    "A group of flamingos is called a 'flamboyance'.",
    "Bananas are berries, but strawberries aren't!",
    "There are more stars in the universe than grains of sand on Earth.",
    "Octopuses have three hearts."
];

function generateFact() {
    const fact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById("featureText").textContent = fact;
}
