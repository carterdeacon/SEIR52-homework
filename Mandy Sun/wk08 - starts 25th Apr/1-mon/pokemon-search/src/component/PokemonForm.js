import React, {Component} from "react";

class PokemonForm extends Component {
    constructor(){
        super();
        this.state={
            pokemon: "",
        }
        this._handleInput = this._handleInput.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleInput(event){
        this.setState({pokemon: event.target.value.toLowerCase()}); 
        console.log(event.target.value)    
    }

    _handleSubmit(event){
        event.preventDefault();
        this.props.onSubmit(this.state.pokemon) ; 
    }

    render(){
        return(
            <form onSubmit={this._handleSubmit} >
              <input type="search" required placeholder="pikachu" onChange={this._handleInput} />
              <input type="submit" value={`Search for ${this.state.pokemon}`} />
            </form>
        )
    }
}

export default PokemonForm;