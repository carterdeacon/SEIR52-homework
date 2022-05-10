import React, { Component } from 'react';
import axios from 'axios';

class AstrosInSpace extends Component {
    constructor() {
        super();
        this.state = {
            astros: []
        };

        this.fetchAstros = this.fetchAstros.bind(this);
    }

    fetchAstros() {

        const notifyURL = 'http://api.open-notify.org/astros.json';
        
        axios(notifyURL).then((response) => {
            const astros = response
            console.log(response);
            this.setState({astros: astros});
        });
    }
    
    render() {
        return (
            <div>
                {/* <p>There are currently { this.fetchAstros } in space</p> */}
            </div>
        );
    }
}

export default AstrosInSpace;