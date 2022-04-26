import React, { Component } from "react";
import axios from "axios";

import SearchForm from "./SearchForm";
import Content from "./Content";

class BookSearch extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      author: "",
      description: "",
      thumbnailURL: "",
    };
    this.fetchBook = this.fetchBook.bind(this);
  }

  fetchBook(query) {
    console.log("From parent BookSearch", query);

    const googleBooksURL = `https://www.googleapis.com/books/v1/volumes?q=title:${query}`;

    axios(googleBooksURL).then((response) => {
      const volumeInfo = response.data.items[0].volumeInfo;
      const title = volumeInfo.title;
      const author = volumeInfo.authors[0];
      const description = volumeInfo.description;
      const thumbnailURL = volumeInfo.imageLinks.thumbnail;

      this.setState({
        title: title,
        author: author,
        description: description,
        thumbnailURL: thumbnailURL,
      });
    });
  }

  render() {
    return (
      <div>
        <SearchForm onSubmit={this.fetchBook} />
        <Content
          title={this.state.title}
          author={this.state.author}
          description={this.state.description}
          thumbnailURL={this.state.thumbnailURL}
        />
      </div>
    );
  }
}

export default BookSearch;
