import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";
import SearchCity from "./components/SearchCity";

const App = () => {
	const [weatherData, setWeatherData] = useState(null);
	const [city, setCity] = useState("Toronto");
	const [error, setError] = useState('');
	const API_KEY = "def450937f6c9c7fe5fe3f220dfa3013";

	const fetchWeather = async (city) => {
		try {
		const response = await axios.get(
			`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
		);
		setError('');
		setWeatherData(response.data);
		} catch (error) {
            setError("City not found. Please enter a valid city.");
		}
	};

	useEffect(() => {
		fetchWeather(city);
	}, [city]);  

	return (
		<div className="container">
			<h1 className="title">Weather Forecast</h1>
			<div className="card">
				<SearchCity setCity={setCity} fetchWeather={fetchWeather} />
				{weatherData && <WeatherCard data={weatherData} />}
				{error && <p className="error-message">{error}</p>}
			</div>
		</div>
		);
};

export default App;