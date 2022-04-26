import React from "react";

const WeatherResult = (props) =>{
        return(
            <div>
                <h1>{props.name}</h1>
                <p>Genenral temp: {props.temp}</p>
                <p>Lowest temp of the day: {props.temp_min}</p>
                <p>Highest temp of the day: {props.temp_max}</p>
            </div>
        )
}

export default WeatherResult;