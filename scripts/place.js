/*W03 Assignment: Country Page by Devin Gamboa Enciso*/

// Get current year
const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

// Get last modified date
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modified: " + lastModified;


// Static weather values
const temperature = 10;
const windSpeed = 5;

// Wind Chill Formula (Metric)
function calculateWindChill(temp, speed) {
    return (13.12 + 0.6215 * temp - 11.37 * speed ** 0.16 + 0.3965 * temp * speed ** 0.16).toFixed(1);
}

// Display wind chill
const windChill = document.getElementById("windChill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChill.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
    windChill.textContent = "N/A";
}
