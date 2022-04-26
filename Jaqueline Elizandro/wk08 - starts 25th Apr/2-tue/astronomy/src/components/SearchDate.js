import React, {Component} from "react";

class SearchDate extends Component {
    constructor() {
        super();
        this.state = {
            date: ''
        };
        this._handleInput = this._handleInput.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleInput(event) {
        this.setState({date: event.target.value});
    }

    _handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.date);
    }
    
    render() {
        return(
            <form onSubmit={this._handleSubmit} className="form">
                <label>
                    Choose a date:
                </label>
                <input type="search" required autofocus placeholder="2022-04-26" onChange={this._handleInput} />
                <button type="submit">Search</button>
            </form>
        );
    }
}

export default SearchDate;