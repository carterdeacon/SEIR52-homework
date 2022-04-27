import React, { Component } from "react";

class BookForm extends Component {
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
          placeholder="Jaws"
          onChange={this._handleInput}
        />
        <input type="submit" value={`Fetching the book ${this.state.query}`} />
      </form>
    );
  }
}

export default BookForm;
