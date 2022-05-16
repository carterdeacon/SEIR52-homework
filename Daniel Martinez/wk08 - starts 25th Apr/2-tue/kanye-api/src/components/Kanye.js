import React, {Component} from "react";
import axios from "axios";

class Kanye extends Component{
    constructor(){
        super();
        this.state={
            quotes:['I guess we will never know']
        };
        this._getQuote = this._getQuote.bind(this);
    }   
    _getQuote(){

        axios.get('https://api.kanye.rest').then((response)=>{
            const newQuote = [response.data.text, ...this.state.quotes];
            this.setState({quotes: newQuote}); 
        })
    }
    
    
    render(){ 
        return(
            <div>
                <h1>Click the button for some YEEZUS magic</h1>
                <button onClick={this._getQuote}>Kanye Quotes</button>
                {this.state.quotes.map((quotes)=>{
                    return(<p>{quotes}</p>)
                })}
            </div>
        )
    }
}

export default Kanye;