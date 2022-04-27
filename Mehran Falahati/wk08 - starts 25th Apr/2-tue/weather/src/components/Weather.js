import React, { Component } from "react";
import axios from "axios";

import SearchCity from "./SearchCity";
import Display from "./Display";

class Weather extends Component {
    constructor(props) {
        super();
        this.state = {
            city: '',
            data: null
        }
        this.fetchWeather = this.fetchWeather.bind(this)
    }

    fetchWeather(city) {
        const weatherURL = 'http://api.openweathermap.org/data/2.5/weather';
        const weatherParams = {
            q: city,
            units: 'metric',
            appid: '87f3530b034ce83f07479771285f8bdf'
        }
        axios.get(weatherURL, {params: weatherParams}).then((result) => {
            console.log(result)
            this.setState({data: result.data})
        }, () => {
            this.setState({data: null})
        })
    }


    render() {
        return(
            <div>
                <SearchCity onSubmit={this.fetchWeather} class="search"/>
                <Display data={this.state.data} />
            </div>
        )
    }
}

export default Weather;