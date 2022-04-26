let pageNum = 1;

const searchFlickr = function (keywords) {

    const flickrURL = 'https://api.flickr.com/services/rest';
    $.getJSON(flickrURL, {
        method: 'flickr.photos.search', // not to be confused with HTTP methods like post
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords, 
        format: 'json',
        nojsoncallback: 1,
        page: pageNum,
        sort: 'date-posted-asc'  
    }).done(showImages);
    pageNum++;
};

let throttleSearch = _.throttle(searchFlickr, 2000)

const showImages = function (results) {
    if (pageNum > results.photos.pages) {
        return;
    }

    results.photos.photo.forEach(function (photo) {
        //build a URL
        const thumbnailURL = generateURL(photo);

        // create an image & set source to url
        const $img = $('<img>', {src: thumbnailURL});

        //display image by attaching img to DOM
        $img.appendTo('#images');
        // const image = imgURL(photo);
    });

};

// const imgURL = function(p) {
//     console.log( [
//         'https://www.flickr.com/photos/',
//         p.server,
//         '/',
//         p.id,
//         '_',
//         p.secret,
//         '_n.jpg'
//     ].join(''));
// }


const generateURL = function (p) {
    return [
        'http://farm', 
        p.farm,
        '.static.flickr.com/',
        p.server, 
        '/',
        p.id,
        '_',
        p.secret,
        '_n.jpg' // you can get diff sizes of the image - o is the original size, q is some size... need to ready docs
    ].join('');
}

$(document).ready(function () {
    $('#search').on('submit', function (event) {
        event.preventDefault(); //disable the form from being submitted to a server.
        pageNum = 1;
        $('#images').empty();
        // get the query
        const searchTerm = $('#query').val();
        
        // search flickr for that query
        searchFlickr(searchTerm);
    });

    $(window).on('scroll', function () {
        const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if (scrollBottom < 300) { // to do: adjust the number to suit your taste
            const searchTerm = $('#query').val();
            throttleSearch(searchTerm);
        }
    });
});