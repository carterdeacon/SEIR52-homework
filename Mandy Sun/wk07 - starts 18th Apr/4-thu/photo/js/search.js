const searchFlicker = function(keywords, setPage){
    console.log("searching for", keywords);

    const flickURL = "https://api.flickr.com/services/rest";
    // .getJSON do the samething as .ajax
    $.getJSON(flickURL,{
        // list all the things you want your api to do and know
        method: "flickr.photos.search",
        api_key: "2f5ac274ecfac5a455f38745704ad084",
        text: keywords,
        format: "json",
        page: setPage,
        nojsoncallback: 1 
    }).done(showImages);
};


const showImages = function(results){
    results.photos.photo.forEach(function(photo){
        const thumbnailURL = generateURL(photo);
        const $img = $('<img>',{src: thumbnailURL, id: "search-img"});
        const html = `<a href="https://www.flickr.com/photos/${ photo.owner }/${ photo.id }"><img src="${ thumbnailURL }"></a>`
        $('#images').append(html)
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

// when the document fully loaded, then run the function
$(document).ready(function(){
    let setPage =1;
    $('#search').on("submit", function(event){
        // $('#id_name') only select the first one
        // $("[id='id_name']") select all elements with same id
         $("[id='search-img']").remove();
         event.preventDefault(); // don't submit anything to server via your form
         
         const searchTerm = $('#query').val();
         searchFlicker(searchTerm, setPage)
    });
    // _.throttle very similar to setTimeout? not a fixed time, but a max time
    $(window).on("scroll", _.throttle(function(){
        const scrollBottom = $(document).height()-$(window).height()-$(window).scrollTop();
        if(scrollBottom <700){ //TODO : adjust the number to suit your taste.
           setPage ++; 
           const searchTerm = $('#query').val(); 
           searchFlicker(searchTerm, setPage)
        }
    },700));
});