import React, { Component } from 'react';
import axios from 'axios';

class ChuckFacts extends Component {
    constructor() {
        super();
        this.state = {
            facts: []
        };

        this._fetchFact = this._fetchFact.bind(this);
    }

    _fetchFact() {
      axios.get('https://api.chucknorris.io/jokes/random').then((response) => {
          const newFacts = [response.data.text, ...this.state.facts];
          this.setState({facts: newFacts});
      })  
    }


render() {
    return (
            <div>
                <h1>Chuck Norris Facts</h1>
                <h2>Are You Tough Enough?</h2>
                <button onClick={ this._fetchFact }>Tough Facts</button>
                { this.state.facts.map((fact) => <p>{ fact }</p>) }
            </div>
        )
    }
};

export default ChuckFacts;