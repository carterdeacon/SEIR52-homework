import React, { useState } from "react";
import axios from "axios";

const Book = () => {
    const [book, setBook] = useState('loding...')

    const _handleSubmit = () => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=title:${book}').then((response) => {
            setBook(response.data)
            console.log(response.data)
        })
    }



    return (
        <div>
            <form onSubmit={_handleSubmit}>
                <input type="search" onChange={(e) => setBook(e.target.value)}/>
                <button type="submit">Seach</button>
            </form>
        </div>
    )

    return (
        <div>
            <p>{book}</p>
        </div>
    )

}

export default Book;