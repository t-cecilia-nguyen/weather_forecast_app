import React from 'react';
import '../App.css';

const WeatherCard = ({ data }) => {
    const tempInCelsius = (data.main.temp).toFixed(0);
    const tempMax = (data.main.temp_max).toFixed(0);
    const tempMin = (data.main.temp_min).toFixed(0);
    const windSpeedInKmH = (data.wind.speed * 3.6).toFixed(0);
    const date = new Date(data.dt * 1000);
    const dayOfWeek = date.toLocaleString("en-us", { weekday: "long" });


    return (
        <div className="weather-card"> 
            <div className="weather-left">
                <div className='day-of-week-info'>
                <p className="day-of-week">{dayOfWeek}</p>
                <img
                        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                        alt={data.weather[0].description}
                        className="weather-icon"
                    />
                </div>
                <div className="city-info">
                    <h2>{data.name}</h2>
                </div>
                <p className="temperature">{tempInCelsius}°C</p>
                <p className="weather-description">{data.weather[0].description}</p>
            </div>
            <div className="weather-right">
                <p>Humidity: {data.main.humidity}%</p>
                <p>Wind Speed: {windSpeedInKmH} km/h</p>
                <p>Air Pressure: {data.main.pressure} mb</p>
                <p>Max Temp: {tempMax}°C</p>
                <p>Min Temp: {tempMin}°C</p>
            </div>
        </div>
    );
};
export default WeatherCard;
