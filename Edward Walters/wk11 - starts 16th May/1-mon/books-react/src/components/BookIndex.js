import React from 'react'
import {
    useQuery,
    gql
  } from "@apollo/client";

  const GET_BOOKS = gql`
        query getBooks { books {
            id
            title
            description
            authors
            image
            publishYear
            }
        }
    `;

function BookIndex() {
    
    const { loading, error, data } = useQuery(GET_BOOKS);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    return (
        <ul>
        {data.books.map((book) => {
            return (
                <li className="book" key={book.id}>
                    <h2>Title: {book.title}</h2>
                    <h2>Description: {book.description}</h2>
                    <h2>Authors: {book.authors.join(' & ')}</h2>
                    <h2>Published: {book.publishYear}</h2>
                    <img className="index-img" src={book.image}></img>
                </li>
            )
        })}
        </ul>
    )

}

export default BookIndex