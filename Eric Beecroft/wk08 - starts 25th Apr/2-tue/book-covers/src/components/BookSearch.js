import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import Cover from './Cover';

class BookSearch extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            bookData: null
        };

        this.fetchCover = this.fetchCover.bind(this);
    }

    fetchCover(title) {
        console.log('Fetching ', title);
        const bookURL = 'https://www.googleapis.com/books/v1/volumes?q=title:';
        const bookParams = {
            title: title
        };

        axios.get(bookURL, {params: bookParams}).then((result) => {
            console.log(result)
            this.setState({bookData: result.data})
        });
    }

    render() {
        return (
            <div>
                <SearchForm onSubmit={ this.fetchCover }/>
                <Cover data={ this.state.bookData }/>
            </div>
        );
    }
}

export default BookSearch;