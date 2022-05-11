import React, { Component } from 'react';
import axios from 'axios';

class CatFacts extends Component {
    constructor() {
        super();
        this.state = {
            facts: []
        };
        this._fetchFact = this._fetchFact.bind(this);
    }


    _fetchFact() {
        axios.get('http://cat-fact.herokuapp.com/facts/random?animal_type=cat').then((response) => {
            const newFacts = [response.data.text, ...this.state.facts]; // ... is the spread operator
            this.setState({facts: newFacts});
        });
    }

    render() {
        // arrow functions have an implicit return if you leave off the { curlies }
        return (
            <div>
                <h1>Cat Facts!</h1>
                <button onClick={ this._fetchFact }>Fetch fact</button>
                { this.state.facts.map((fact) => <p>{ fact }</p>) }
            </div>
        )
    }
};

export default CatFacts;
