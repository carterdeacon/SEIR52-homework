import React from 'react';

const Cover = (props) => {
    if (props && props.data === null) {
        return '';
    } else {
        return (
            <div>
                <h2>Title</h2>
                {/* <img src={`https://www.googleapis.com/books/v1/volumes?q=title:${ props.data.data.items[0].volumeInfo.imageLinks.thumbnail }`} /> */}
            </div>
        );
    }
};

export default Cover;