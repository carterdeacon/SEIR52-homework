import React, {Component} from "react";
import axios from 'axios';
import SearchForm from "./SearchForm";

class ApodSearch extends Component {
    constructor() {
        super();
        this.state = {
            photos: []
        }
    };

    

    // const marsURL = 'https://mars-photos.herokuapp.com/';
    // const marsParams = {
    //     api_key: 'pfLKuhmxk4q05W3LiSt6JykWJvgu3h9Px9fO33CQ',
    //     photos: [],
    //     format: 'json',
    //     nojsoncallback: 1
    // };   

    // axios(marsURL, {params: marsParams}) .then((response) => {
    //     const photos = response.data.photos.0.img_src.earth_date.map(generateURL);
    //     this.setState({photos: photos});
    // });
    
   
    //generate the URLS
    //save urls as a state
  

    render () {
        return (
            <div> 
            <SearchForm />
            </div>
        );
    }
}

export default ApodSearch;

//npm install axios@0.24.0
// BROWSER=firefox npm run start