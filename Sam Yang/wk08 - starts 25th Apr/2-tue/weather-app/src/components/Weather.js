import React, { Component } from 'react';
import axios from 'axios';

import SearchForm from './SearchForm';
import WeatherInfo from './WeatherInfo';

class Weather extends Component {
  constructor(props) {
    super();
    this.state = {
      city: '', 
      weatherData: null 
    };
    this.fetchWeather = this.fetchWeather.bind(this);
  }

  fetchWeather(city) {
    console.log('Fetching', city);
    const weatherURL = 'http://api.openweathermap.org/data/2.5/weather';
    const weatherParams = {
      q: city,
      units: 'metric',
      appid: '87f3530b034ce83f07479771285f8bdf' 
    };

    axios.get(weatherURL, {params: weatherParams}).then((result) => {
      this.setState({weatherData: result.data});
    }, () => {
      this.setState({weatherData: null})
    });
  }

  render() {
    return (
      <div>
        <h1>Whether The Weather</h1>
        <SearchForm onSubmit={ this.fetchWeather } />
        <WeatherInfo data={ this.state.weatherData } />
      </div>
    )
  }
};

export default Weather;