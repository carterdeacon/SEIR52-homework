import React, { Component } from "react";

class WeatherForm extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
    };

    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
  }

  _handleInput(event) {
    this.setState({
      query: event.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <input
          type="text"
          required
          placeholder="Madrid"
          onChange={this._handleInput}
        />
        <input type="submit" value={`Weather info for ${this.state.query}`} />
      </form>
    );
  }
}

export default WeatherForm;
