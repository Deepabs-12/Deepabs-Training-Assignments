const express = require('express');
const request = require('request');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const apiKey = process.env.API_KEY;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <form action="/" method="post">
      <label for="location">Enter a location:</label>
      <input type="text" id="location" name="location">
      <button type="submit">Get weather</button>
    </form>
  `);
});

app.post('/', (req, res) => {
  const location = req.body.location;
  const apiKey = '90df0dc7a4856b855944cfe5ce94a2bd';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
  
  request(url, (error, response, body) => {
    if (error) {
      res.send('Error:', error);
    } else {
      const data = JSON.parse(body);
      res.send(`
        <h2>${data.name} Weather</h2>
        <p><strong>Temperature:</strong> ${data.main.temp} &deg;C</p>
        <p><strong>Weather:</strong> ${data.weather[0].main}</p>
      `);
    }
  });
});

app.listen(3009, () => {
  console.log('Server is running on port 5000');
});
