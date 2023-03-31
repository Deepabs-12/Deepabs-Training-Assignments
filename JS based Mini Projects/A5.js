//const apiKey = '450a9d622a56bff861d328ffbea10a4b';

function getWeather(location) {
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=450a9d622a56bff861d328ffbea10a4b`;
	fetch(url)
		.then(response => response.json())
		.then(data => {
			const weather = {
				description: data.weather[0].description,
				temp: data.main.temp,
				feelsLike: data.main.feels_like,
				humidity: data.main.humidity,
				windSpeed: data.wind.speed
			};
			displayWeather(weather);
		})
		.catch(error => {
			console.log(error);
			alert('Unable to get weather. Please try again.');
		});
}

function displayWeather(weather) {
	const container = document.getElementById('weather-container');
	container.innerHTML = `
		<h2>Current Weather</h2>
		<p>Description: ${weather.description}</p>
		<p>Temperature: ${weather.temp} &#8457;</p>
		<p>Feels Like: ${weather.feelsLike} &#8457;</p>
		<p>Humidity: ${weather.humidity}%</p>
		<p>Wind Speed: ${weather.windSpeed} mph</p>
	`;
}

const form = document.querySelector('form');
form.addEventListener('submit', event => {
	event.preventDefault();
	const location = document.getElementById('location').value;
	getWeather(location);
});
