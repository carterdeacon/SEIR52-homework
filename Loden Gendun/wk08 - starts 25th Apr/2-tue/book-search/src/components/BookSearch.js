const BookSearch = function(props) {
    return (
        <div>
            <form onSubmit={ event => {
                event.preventDefault();
                props.onSubmit(event) }
            }>
                <input type="text" required placeholder="Moby Dick" />
                <input type="submit"/>
            </form>
        </div>
    );
}

export default BookSearch