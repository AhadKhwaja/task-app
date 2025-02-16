from flask import Flask, jsonify
from flask_cors import CORS
import random
import time

app = Flask(__name__)
CORS(app)  # Enable CORS for the frontend to access the backend

# Sample data: Mimicking weather data
@app.route('/api/weather', methods=['GET'])
def get_weather():
    # Simulating random weather data for testing
    weather_data = {
        'temperature': round(random.uniform(15.0, 30.0), 2),  # Random temperature between 15°C and 30°C
        'humidity': round(random.uniform(40.0, 70.0), 2),  # Random humidity between 40% and 70%
        'description': random.choice(['Clear sky', 'Cloudy', 'Rainy', 'Thunderstorms'])  # Random weather description
    }
    
    return jsonify(weather_data)

if __name__ == '__main__':
    app.run(debug=True)
