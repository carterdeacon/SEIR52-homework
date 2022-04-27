import axios from "axios";
import React, {Component, component} from "react";
import WeatherForm from "./WeatherForm";
import WeatherResult from "./WeatherResult";

class FlickrWeather extends Component{
    constructor(){
        super();
        this.state={
            temp: null,
            temp_min: null,
            temp_max: null,
            name: null,
        }
        this.fetchWeather=this.fetchWeather.bind(this);
    }

    fetchWeather(city){
        this.setState({name: city})
        // use geocoding to get lat and lon!
        const geoURL ="https://api.openweathermap.org/data/2.5/weather"
        const geoParams={
            q: city,
            appid: "139bed5c62f74f6b8e81ece06df9d255",
            units: 'metric',
            format: 'json',
            nojsoncallback: 1
        }

        axios(geoURL, {params: geoParams}).then((response) =>{
            console.log(response.data.main.temp_min)
            this.setState({temp: response.data.main.temp});
            this.setState({temp_min: response.data.main.temp_min});
            this.setState({temp_max: response.data.main.temp_max});
        })
    }

    render(){
        return(
            <div>
                <WeatherForm onSubmit={this.fetchWeather}/>
                <WeatherResult name={this.state.name} temp={this.state.temp} temp_min = {this.state.temp_min} temp_max = {this.state.temp_max}/>
            </div>
            
        )
    }
}

export default FlickrWeather;