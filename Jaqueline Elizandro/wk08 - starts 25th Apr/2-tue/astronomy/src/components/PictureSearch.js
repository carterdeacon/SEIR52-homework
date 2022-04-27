import axios from "axios";
import React, {Component} from "react";
import SearchDate from "./SearchDate";

class PictureSearch extends Component {
    constructor() {
        super();
        this.state = {
            image: ''
        };
        this.fetchInfo = this.fetchInfo.bind(this);
    }

    fetchInfo(d) {
        const apodURL = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&date=${d}`;

        axios(apodURL).then((response) => {
            const image = response.data.url
            this.setState({image: image});
        });
    }
    
    render() {
        return(
            <div className="container">
                <div className="title-form">
                    <h1>Astronomy Picture of the Day</h1>
                    <SearchDate onSubmit={this.fetchInfo} />
                </div>
                <img src={this.state.image} className="thumb" />
            </div>
        );
    }
}

export default PictureSearch;