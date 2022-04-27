import React, { Component } from 'react';
import axios from 'axios';

import SearchForm from './SearchForm';
import Gallery from './Gallery';

class ItemSearch extends Component {
    constructor() {
        super();
        this.state = {
            images: []
        };
        
        this.fetchImages = this.fetchImages.bind(this);
    }

    fetchImages(q) {
        const getImage = function (p) {
            return p.image_url;
        }

        const itemURL = 'https://api.jikan.moe/v3/search/anime'
        const itemParams = {
            q: q,
            page: 1
        }
        
        axios(itemURL, { params: itemParams }).then((response) => {
            const images = response.data.results.map(getImage);
            this.setState( {images: images} );
        });
    }

    
    render() {
        return (
            <div>
                <SearchForm onSubmit={ this.fetchImages } />
                <Gallery images={ this.state.images } />
            </div>
        );
    }
}

export default ItemSearch;