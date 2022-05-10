import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import SearchForm from './SearchForm';
import Result from './Result';

export class BookSearch extends Component {
    constructor() {
        super();
        this.state = {
                title: '',
                thumbnail: '',
                authors: '',
                description: '',
                publishedDate: ''
        };
        this.fetchBook = this.fetchBook.bind(this);

    }

    fetchBook(q) {
        const booksURL = 'https://www.googleapis.com/books/v1/volumes';
        const booksParams = {
            q: `title:${q}`
        };

        axios(booksURL, {params: booksParams }).then((response) => {
            const book = response.data.items[0].volumeInfo;
            const title = book.title;
            const thumbnail = book.imageLinks.thumbnail;
            let authors = book.authors;
            if (authors) {
                authors = authors.join(', ');
            }
            const description = book.description;
            const publishedDate = book.publishedDate;
            this.setState({
                title: title,
                thumbnail: thumbnail,
                authors: authors,
                description: description,
                publishedDate: publishedDate
            })
        })
    }

    render() {
        return (
            <div>
                <div className='top-container'>
                    <Header />
                    <SearchForm onSubmit = { this.fetchBook } />
                </div>
                
                <Result book={ this.state } />
            </div>
        );
    }

}

export default BookSearch;