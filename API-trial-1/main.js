


import './style.css'

async function checkWeather () {
  const API_key = '74d4965049c25ba5da803a8a61b72ad9';
  const city_name = document.getElementById('city').value.trim();

  if (!city_name) {
    alert('Please enter a city name');
    return;
  }

  // Use template literals here:
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&limit=1&appid=${API_key}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // You can add more logic here to fetch weather details or update UI
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      alert('Failed to fetch data');
    });
}

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('checkWeather');
  button.addEventListener('click', checkWeather);
});
