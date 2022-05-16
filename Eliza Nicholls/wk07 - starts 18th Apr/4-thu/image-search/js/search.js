console.log('howdy!')

const state = {
    pageNum = 1;
    lastPageReached = false;
};

const searchFlickr = function (keywords) {
    if (state.lastPageReached) return;

    console.log('Searching for', keywords);

    const flickrURL = 'https://api.flickr.com/services/rest'; 
    $.getJSON(flickrURL, {
        method: 'flickr.photos.search', 
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords, 
        format: 'json',
        nojsoncallback: 1,
        page: state.pageNum 
    }).done(showImages).done(function (info){
        console.log(info);
        if (info.photos.page >= info.photos.pages) {
            state.lastPageReached = true;
        
        }
    });
    console.log( 'throttling is happening')
    state.pageNum++;

};


let throttleSearch = _.throttle(searchFlickr, 2000);

const showImages = function (results){
    
    
    results.photos.photo.forEach(function(photo){
        const thumbnailURL = generateURL (photo);
        const $img = $('<img>', {src: thumbnailURL});
        $img.appendTo('#images');

    });

};

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
        '_q.jpg' // change 'q' to something else for different sizes (see docs)
    ].join('');
};

$(document).ready(function (){
    $('#search').on('submit', function (event) {
        event.preventDefault();
        state.pageNum = 1;
        state.lastPageReached: //need to copy joels code
        $('#images').empty();
    const searchTerm = $('#query').val();
    searchFlickr(searchTerm);

    });

    $(window).on('scroll', function () {
        const scrollBottom =$(document).height() - $(window).height() - $(window).scrollTop();
        if (scrollBottom < 700) { //adjust number to suit my taste
            const searchTerm = $('#query').val();
            throttleSearch(searchTerm);
            
            
        }
    })



});

       


    