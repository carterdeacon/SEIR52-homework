import React, { Component } from "react";

const WeatherInfo = (props) => {
  if (props && props.data === null) {
    return "";
  } else {
    return (
      <div>
        <h1>{props.data.temp}°C</h1>{" "}
      </div>
    );
  }
};

export default WeatherInfo;
