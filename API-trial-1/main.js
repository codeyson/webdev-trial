


import './style.css'

async function checkWeather () {
  const API_key = '74d4965049c25ba5da803a8a61b72ad9';
  const city_name = document.getElementById('city').value.trim();
  
  if (!city_name) {
    alert('Please enter a city name');
    return;
  }

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();


      const name = data.name;
      const temp = data.main.temp;
      const humidity = data.main.humidity;

      document.getElementById('name').innerHTML = `Name: ${name}`;
      document.getElementById('temp').innerHTML = `Temperature: ${temp}`;
      document.getElementById('humidity').innerHTML = `Humidity: ${humidity}`;
  }
  catch (error) {
    console.error('Error fetching data:', error);
    alert('Failed to fetch data');
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('checkWeather');
  button.addEventListener('click', checkWeather);
});

