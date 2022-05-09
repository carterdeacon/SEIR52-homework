import React, { Component } from "react";
import axios from "axios";

import SearchForm from "./SearchForm"
import Gallery from "./Gallery";

class BookSearch extends Component {
    constructor() {
        super();
        this.state = {
            image: '',
            book_name: ''
        };
        this.fetchImage = this.fetchImage.bind(this)
    }

    fetchImage(q) {   
    
    const book_URL = `https://www.googleapis.com/books/v1/volumes?q=title:${q}`;
        
    axios(book_URL).then((response) => { 
    const image = response.data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"];    
    this.setState({image: image, book_name: q});

    });
    }
    

    render() {
        return(
            <div>
                <SearchForm onSubmit={this.fetchImage} />
                <Gallery image={this.state.image} book_name={this.state.book_name}/> 
            </div>
            
        );
    }

}

export default BookSearch;