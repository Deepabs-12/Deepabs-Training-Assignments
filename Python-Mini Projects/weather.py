#weather
import requests

# API key for OpenWeatherMap
API_KEY = '450a9d622a56bff861d328ffbea10a4b'

def get_weather(city):
    # Make a GET request to OpenWeatherMap API
    url = f'https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric'
    response = requests.get(url)

    # Parse the JSON response
    data = response.json()

    # Check if the response was successful
    if data['cod'] != 200:
        print(f"Error: {data['message']}")
        return

    # Extract the relevant data from the response
    description = data['weather'][0]['description'].capitalize()
    temperature = data['main']['temp']
    humidity = data['main']['humidity']
    wind_speed = data['wind']['speed']

    # Print the weather report
    print(f"Current weather in {city}:")
    print(f"Description: {description}")
    print(f"Temperature: {temperature}°C")
    print(f"Humidity: {humidity}%")
    print(f"Wind speed: {wind_speed} m/s")

# Get the city name from the user
city = input("Enter a city name: ")

# Get the weather report for the city
get_weather(city)
