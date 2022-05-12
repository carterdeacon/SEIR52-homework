// document.querySelectorAll('a')

const links = document.querySelectorAll('a');
for (let i= 0; i < links.length; i++){
    const link = links[i];
    console.log(link);

    const href = link.getAttribute('href');

    const thumbnailUrl = youtube.generateThumbnailUrl(href);
    console.log(thumbnailUrl);
    const image = document.createElement('img');
    image.setAttribute('src', thumbnailUrl);
    console.log(image)

    link.appendChild(image);
// or const href = link.(href);
// console.log(href);


} 