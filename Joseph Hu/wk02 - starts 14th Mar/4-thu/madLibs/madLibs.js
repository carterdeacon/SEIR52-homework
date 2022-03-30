// const button = document.getElementById("lib-button");
// const onClick = function(event){
//     const noun = document.getElementById("noun").value;
//     const adjective = document.getElementById("adjective").value;
//     const person = document.getElementById("person").value;
//     let div = document.getElementById("story");
//     div.innerHTML = `${person} really likes ${adjective} ${noun}!`;
// }
// button.addEventListener('click', onClick);
$(document).ready(function(){
    $('#lib-button').click(function(){
        let noun = $('#noun').val();
        let adjective = $('#adjective').val();
        let person = $('#person').val();
        $('#story').html(`${person} really likes ${adjective} ${noun}!`);
    })
});

