// weather.js

const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API Key
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Function to get weather data
async function getWeather(city) {
    try {
        const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        processWeatherData(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Function to process and display weather data
function processWeatherData(data) {
    const weatherContainer = document.getElementById('weather');
    weatherContainer.innerHTML = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
    `;
}

// Example usage: get weather for New York
getWeather('New York');
