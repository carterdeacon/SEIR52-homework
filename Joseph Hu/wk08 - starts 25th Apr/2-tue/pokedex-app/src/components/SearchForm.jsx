import React, { Component } from 'react'
import styled from 'styled-components';

export default class SearchForm extends Component {
    constructor(){
        super();
        this.state={
            query:''
        }
        //bind our handler functions to this
        this._handleInput = this._handleInput.bind(this)
        this._handleSubmit = this._handleSubmit.bind(this)
    }

    //Event handler functions
    //function for handling search input
    _handleInput(event){
        //set the state of the query (what we're searching for) to the the value of the input box
        // console.log(event)
        //the event object contains target,which contains value which is the value of the input box
        this.setState({query: event.target.value})
    }
    //function for handling submit input
    _handleSubmit(event){
        //stops form from redirecting us to different page by default
        event.preventDefault();
        //when we submit the information we need to pass it back to the PokeSearch parent
        //we need to pass the this.state.query information back up. 
        //since we can't do this directly we need to create a function in the parent that allows us to interact with the child
        this.props.onSubmit(this.state.query)
    }


  render() {
    return (
            <form className="form" onSubmit={this._handleSubmit}>
                <input className='search' type="search" required placeholder="charmander" onChange={this._handleInput} />
                <input className="submitbutton" type="submit" />
            </form>

    )
  }
}

