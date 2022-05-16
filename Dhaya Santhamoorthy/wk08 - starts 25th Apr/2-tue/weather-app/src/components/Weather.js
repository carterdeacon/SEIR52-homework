import React, { Component } from "react";
import axios from "axios";
import WeatherForm from "./WeatherForm";
import WeatherInfo from "./WeatherInfo";

class Weather extends Component {
  constructor() {
    super();
    this.state = {
      weather: {
        temp: "",
      },
    };

    this.fetchWeather = this.fetchWeather.bind(this);
  }

  fetchWeather(q) {
    const weatherURl = `https://api.openweathermap.org/data/2.5/weather`;
    const weatherParams = {
      q: q,
      units: "metric",
      appid: "87f3530b034ce83f07479771285f8bdf",
    };

    axios.get(weatherURl, { params: weatherParams }).then((res) => {
      this.setState({
        weather: {
          temp: res.data.main.temp,
        },
      });
    });
  }

  render() {
    return (
      <div>
        <WeatherForm onSubmit={this.fetchWeather} />
        <WeatherInfo data={this.state.weather} />
      </div>
    );
  }
}

export default Weather;
