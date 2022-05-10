import React, { Component } from "react";

const Display = (props) => {
    if (props && props.data === null) {
        return '';
    } else {
        return (
            <div style={{textAlign: "center"}}>
                <h2>{props.data.name}'s weather</h2>
                <h3>Currently {props.data.main.temp}</h3>
                <h3>Max Temperture is {props.data.main.temp_max}</h3>
                <h3>Min Temperture is {props.data.main.temp_min}</h3>
                <h3>Humidity is {props.data.main.humidity}</h3>
                <h3>Visibility is {props.data.visibility}</h3>
            </div>
        )
    }
}

export default Display;