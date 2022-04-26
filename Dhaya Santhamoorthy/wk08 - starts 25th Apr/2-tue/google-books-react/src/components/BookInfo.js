import React, { Component } from "react";

const BookInfo = (props) => {
  return (
    <div>
      <h1>{props.book.title}</h1>
      <img src={props.book.cover} />
      <h2>{props.book.author}</h2>
    </div>
  );
};

export default BookInfo;
