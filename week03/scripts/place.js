// Get current year
const currentYear = new Date().getFullYear();

// Insert year in footer
document.getElementById("currentyear").textContent = currentYear;

// Get last modified date
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;

const temperature = 10;
const windSpeed = 5;

document.getElementById("temperature").textContent = temperature + "°C";
document.getElementById("wind").textContent = windSpeed + " km/h";
document.getElementById("conditions").textContent = "Partly Cloudy";

function calculateWindChill(temp, wind) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(wind, 0.16) +
        0.3965 * temp * Math.pow(wind, 0.16)
    ).toFixed(1);
}

let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temperature, windSpeed) + "°C";
}

document.getElementById("wind-chill").textContent = windChill;