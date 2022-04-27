import React, { Component } from "react";
import axios from "axios";
import BookForm from "./BookForm";
import BookInfo from "./BookInfo";

class BookSearch extends Component {
  constructor() {
    super();
    this.state = {
      book: {
        title: "",
        cover: "",
        author: "",
      },
    };

    this.fetchBook = this.fetchBook.bind(this);
  }

  fetchBook(q) {
    const bookURL = `https://www.googleapis.com/books/v1/volumes?q=${q}`;
    axios(bookURL).then((res) => {
      const title = res.data.items[0].volumeInfo.title;
      const cover = res.data.items[0].volumeInfo.imageLinks.thumbnail;
      const author = res.data.items[0].volumeInfo.authors[0];

      this.setState({
        book: {
          title: title,
          cover: cover,
          author: author,
        },
      });
    });
  }

  render() {
    return (
      <div>
        <BookForm onSubmit={this.fetchBook} />
        <BookInfo book={this.state.book} />
      </div>
    );
  }
}

export default BookSearch;
