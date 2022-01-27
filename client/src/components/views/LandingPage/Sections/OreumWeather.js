import React, { useState } from "react";
import axios from "axios";

const api = {
  key: "5e149f81494e14c36eddba8aa6a240cc",
  base: "https://api.openweathermap.org/data/2.5/",
};

function OreumWeather() {
  // 날짜 가져오기
  const dateBuilder = (d) => {
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    // sunday 먼저..!!
    let days = ["Sun", "Mon", "Tue", "Wed", "Tur", "Fri", "Sat"];

    let day = days[d.getDay()];
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    let date = d.getDate();

    return `${day} ${date} ${month} ${year}`;
  };

  const city = "jeju";
  const url = `${api.base}weather?q=${city}&appid=${api.key}`;
  const [weather, setWeather] = useState("");

  // 날씨 가져오기
  axios.get(url).then((responseData) => {
    const data = responseData.data;

    setWeather({
      id: data.weather[0].id,
      temperature: data.main.temp,
      main: data.weather[0].main,
      loading: false,
    });
  });

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 16
            ? "weatheroreum warm"
            : "weatheroreum"
          : "weatheroreum "
      }
    >
      <main>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">제주도</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.temperature - 273.15)}°c
              </div>
              <div className="weather">{weather.main}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default OreumWeather;
