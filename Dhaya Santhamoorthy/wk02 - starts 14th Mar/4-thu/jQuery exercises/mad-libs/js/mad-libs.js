const createStory = function () {       
    let madStory = ``;
    const $noun = $(`#noun`).val();
    const $adj = $(`#adjective`).val();
    const $person = $(`#person`).val();
    madStory = $person + " " + $adj + " " + $noun;

    $(`#story`).html(madStory);

    $(`#noun`).val("");                                  // Clearing the input values in the form once the result is displayed
    $(`#adjective`).val("");
    $(`#person`).val("");
};

$(`#lib-button`).on(`click`, createStory);