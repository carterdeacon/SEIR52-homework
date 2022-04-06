var books = [
    {title: 'The Design of EveryDay Things',
     author: 'Don Norman',
     alreadyRead: false
    },
    {title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
    }];

// let pageNode = document.body;

// for (let i = 0; i < books.length; i++){
//     let newP = document.createElement('p');
//     let newul = document.createElement('ul')
//     let object = books[i];
//     for (key in object){
//         let newLi = document.createElement("li")
//         newul.appendChild(newLi)
//         newLi.innerHTML = `${key}: ${object[key]}`
//     }
//     newP.appendChild(newul)
//     pageNode.appendChild(newP);
// }

for (let i = 0; i < books.length; i++){
    let object = books[i]
    let newP = $('<p>');
    let newUl = $('<ul>');
    for (key in object){
        newUl.append($('<li>').html(`${key}: ${object[key]}`))
    }
    $('body').append(newP.append(newUl))
}