$(document).ready(function () {
    var topics = ["happy", "angry", "sad", "frustrated", "sneaky", "scared", "surprised", "shy", "bossy", "sleepy",
        "embarrassed", "mean", "proud", "nervous", "silly", "disappointed", "confused", "impatient", "curious", "kind",
        "annoyed", "obnoxious", "excited", "grumpy"];

    for (let i = 0; i < topics.length; i++) {
        let btn = $('<button>');
        btn.attr({ 'class': 'btn', 'data': topics[i] });
        btn.text(topics[i]);
        $('.buttons').append(btn);
    }

    $(document).on('click', 'button', function () {
        let attribute = $(this).attr('data');
        var url = `https://api.giphy.com/v1/gifs/search?api_key=VgeYY3oYCCgPBIDvALitcLV5YJDro9CD&q=${attribute}&limit=10&offset=0&rating=G&lang=en`;
        $.ajax({
            method: 'GET',
            url: url
        }).then(result => {
            console.log(result);
            let data = result.data;

            for (let i = 0; i < data.length; i++) {
                let gifDiv = $('<div>');
                let rating = $('<p>');
                let gifs = $('<img>');

                gifs.attr('src', data[i].images.fixed_height.url);
                gifs.attr('class', 'images');
                gifDiv.attr('class', 'gifBoxes');
                rating.text("Rating: " + data[i].rating);

                gifDiv.append(rating);
                gifDiv.append(gifs);
                $('#gifs').prepend(gifDiv);
            }

        });
    });

});