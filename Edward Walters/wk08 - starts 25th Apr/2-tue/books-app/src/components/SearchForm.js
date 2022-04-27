import React, { Component } from 'react'

export class SearchForm extends Component {
  constructor() {
      super();
      this.state = {
          query: '',
      }
      this._handleSubmit = this._handleSubmit.bind(this);
      this._handleInput = this._handleInput.bind(this);
  }

  _handleSubmit(event) {
      event.preventDefault();
      this.props.onSubmit( this.state.query )
  }

  _handleInput(event) {
      this.setState({
          query: event.target.value
      })
  }
    render() {
        return (
            <div>
                <form onSubmit = { this._handleSubmit }>
                    <label>
                        Book Title:
                            <input type="search" placeholder="Jaws" required onChange = { this._handleInput } />
                    </label>
                    <input className="button" type="submit" value={ `Search for: ${ this.state.query }`} />
                </form>
            </div>
        )
    }
}

export default SearchForm