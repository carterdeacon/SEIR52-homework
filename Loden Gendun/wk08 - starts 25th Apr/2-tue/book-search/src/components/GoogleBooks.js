import React, {Component} from 'react';
import axios from 'axios';

import BookSearch from './BookSearch';
import BookDisplay from './BookDisplay';

class GoogleBooks extends Component {
    constructor() {
        super();
        this.state = {
            books: [],
        };
    };

    fetchBook = (query) => {
        const booksURL = "https://www.googleapis.com/books/v1/volumes?q=" + query
        axios(booksURL).then(response => {
            this.setState({books: [response.data.items[0].volumeInfo, ...this.state.book]});
        });
    }


    render() {
        return(
            <div>
                <BookSearch onSubmit={(event)=>this.fetchBook( event.target[0].value )}/>
                <BookDisplay book={this.state.books}/>
            </div>
        );
    };
}

export default GoogleBooks;