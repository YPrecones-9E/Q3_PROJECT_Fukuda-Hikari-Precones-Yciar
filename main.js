// Page 1 
const fareMatrix = {
    "north": { "quezon": 13, "gma_kamuning": 13, "araneta_cubao": 16, "santolan_annapolis": 16, "ortigas": 20, "shaw": 20, "boni": 20, "guadalupe": 24, "buendia": 24, "ayala": 24, "magallanes": 28, "taft": 28 },
    "quezon": { "gma_kamuning": 13, "araneta_cubao": 13, "santolan_annapolis": 16, "ortigas": 20, "shaw": 20, "boni": 20, "guadalupe": 24, "buendia": 24, "ayala": 24, "magallanes": 28, "taft": 28 },
    "gma_kamuning": { "araneta_cubao": 13, "santolan_annapolis": 13, "ortigas": 16, "shaw": 16, "boni": 20, "guadalupe": 20, "buendia": 24, "ayala": 24, "magallanes": 24, "taft": 24 },
    "araneta_cubao": { "santolan_annapolis": 13, "ortigas": 13, "shaw": 16, "boni": 16, "guadalupe": 20, "buendia": 20, "ayala": 24, "magallanes": 24, "taft": 24 },
    "santolan_annapolis": { "ortigas": 13, "shaw": 13, "boni": 16, "guadalupe": 16, "buendia": 20, "ayala": 20, "magallanes": 24, "taft": 24 },
    "ortigas": { "shaw": 13, "boni": 13, "guadalupe": 16, "buendia": 16, "ayala": 20, "magallanes": 20, "taft": 20 },
    "shaw": { "boni": 13, "guadalupe": 13, "buendia": 16, "ayala": 16, "magallanes": 20, "taft": 20 },
    "boni": { "guadalupe": 13, "buendia": 13, "ayala": 16, "magallanes": 16, "taft": 20 },
    "guadalupe": { "buendia": 13, "ayala": 13, "magallanes": 16, "taft": 16 },
    "buendia": { "ayala": 13, "magallanes": 13, "taft": 16 },
    "ayala": { "magallanes": 13, "taft": 13 },
    "magallanes": { "taft": 13 }
};

function calculateFare(type) {
    let from = document.getElementById("leaving").value;
    let to = document.getElementById("going").value;

    if (from === to) {
        document.getElementById("fare").innerText = "₱0.00";
        return;
    }

    let fare = fareMatrix[from]?.[to] || fareMatrix[to]?.[from] || 0;
    if (type === "discounted") fare *= 0.8;

    document.getElementById("fare").innerText = `₱${fare.toFixed(2)}`;
}

// Buttons

function hoverButton(buttonId) {
    var btn = document.getElementById(buttonId);
    btn.style.backgroundColor = "#fec107";
}

function resetButton(buttonId) {
    var btn = document.getElementById(buttonId);
    btn.style.backgroundColor = "white";
}

window.onload = function() {
    resetButton('regularF');
    resetButton('discountedF');
    resetButton('submitB');
    resetButton('navbt');
};

// Submit Button
function submitinfo() {
  var name = document.getElementById("name").value;
  alert("Thanks for your feedback, " + name + ". We'll get in touch with you soon.");
}