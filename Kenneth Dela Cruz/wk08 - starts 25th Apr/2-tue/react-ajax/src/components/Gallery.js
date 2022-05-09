import React, { Component } from 'react';

const Gallery = (props) => {
    return (
        <div>
            { props.images.map( (url) => <img src={url} key={ url } max-width="230px" height="320px" /> )}
        </div>
    );
};

export default Gallery;