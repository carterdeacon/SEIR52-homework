const BookDisplay = function(props) {
    console.log(props);
    return (
        <div>
            {props.books.map( book => <img src={book.imageLinks.thumbnail} />)}
        </div>
    );
}

export default BookDisplay;