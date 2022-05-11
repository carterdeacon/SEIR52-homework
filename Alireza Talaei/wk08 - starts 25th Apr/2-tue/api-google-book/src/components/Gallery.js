import React from "react";

const Gallery = (props) => {
    return(
        <div>
            <p>The cover image for { props.book_name} :</p>
            { <img src={props.image} /> }
        </div>
    );
};

export default Gallery;