import React from 'react'

function Result(props) {
    const book = props.book;
    return (
    <div>
        <h2 className="result-title">{ book.title }</h2>
        <img src={ book.thumbnail } alt={ book.title } />
        <h3>{ book.authors }</h3>
        <p>{ book.description }</p>
        <p>{ book.publishedDate ? 'Published Date: ' : '' } { book.publishedDate }</p>
    </div>
  )
}

export default Result