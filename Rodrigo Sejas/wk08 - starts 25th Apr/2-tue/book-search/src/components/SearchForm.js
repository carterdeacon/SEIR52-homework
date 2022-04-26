import React, { Component } from "react";

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
    };
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInput(event) {
    // set the state query as the text value from the input field
    this.setState({ query: event.target.value });
  }

  _handleSubmit(event) {
    event.preventDefault();
    // Send the query from the search field back up to the parent
    this.props.onSubmit(this.state.query);
  }

  render() {
    return (
      // When the form is submitted, run the handleSubmit fn. onChange will handle any text input into the field and change the state to the input.

      <form onSubmit={this._handleSubmit}>
        <input
          type="search"
          required
          placeholder="The Da Vinci Code"
          onChange={this._handleInput}
        />
        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default SearchForm;
