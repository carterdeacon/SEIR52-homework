import React, {Component} from "react";

class SearchForm extends Component {
    constructor(){
        super();
        console.log('searching');
        this.state = {
            query: ''
        };

        this._handleInput = this._handleInput.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

        _handleInput(event){
            event.preventDefault();
            this.setState ({query: event.value}) ;
        }

        _handleSubmit(event){
            event.preventDefault();
            this.props.onSubmit(this.state.query);
        }

        render () {
            return (
                <form> 
                    <input type="seach" required placeholder="YYYY-MM-DD" onChange= { this._handleInput }/>
                    <input type="submit" value={`search for  ${ this.state.query }` }/>
                </form>
            );
        }
    
}

export default SearchForm;