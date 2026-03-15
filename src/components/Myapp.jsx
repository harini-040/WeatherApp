import React, { useState } from "react";
import axios from "axios";

const Myapp = () => {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const apiKey = "e45aaf9809058d0aeaa678c50c325d90";

  const getWeather = async () => {

    if(city === ""){
      alert("Please enter city name");
      return;
    }

    try{

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      const response = await axios.get(url);

      setWeather(response.data);

    }catch(error){
      alert("City not found or API error");
    }

  };

  return (
    <div className="container">

      <div className="weather-card">

        <h1>Weather App</h1>

        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e)=>setCity(e.target.value)}
        />

        <button onClick={getWeather}>Search</button>

        {weather && (
          <div className="result">

            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="weather icon"
            />

            <h2>{weather.name}</h2>
            <h3>{weather.main.temp} °C</h3>
            <p>{weather.weather[0].description}</p>

            <p>Humidity: {weather.main.humidity}</p>
            <p>Wind: {weather.wind.speed}</p>

          </div>
        )}

      </div>

    </div>
  );
};

export default Myapp;