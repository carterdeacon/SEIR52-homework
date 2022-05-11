import React, {Component, component} from "react";

class WeatherForm extends Component{
    constructor(){
        super();
        this.state={
            info:"",
        }
        this._handleInput = this._handleInput.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleInput(event){
        this.setState({info: event.target.value})
    }

    _handleSubmit(event){
        event.preventDefault();
        this.props.onSubmit(this.state.info)
    }

    render(){
        return(
            <div>
                <h1>Type your city to see the weather</h1>
                <form onSubmit={this._handleSubmit}>
                    <input type="search" required placeholder="Melbourne" onChange={this._handleInput} />
                    <input type="submit" value="Search" />
                </form>
            </div>
        )
    }
}

export default WeatherForm;