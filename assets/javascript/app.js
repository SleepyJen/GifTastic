$(document).ready(function () {
    var topics = ["happy", "angry", "sad", "frustrated", "sneaky", "scared", "surprised", "shy", "bossy", "sleepy",
        "embarrassed", "mean", "proud", "nervous", "silly", "disappointed", "confused", "impatient", "curious", "kind",
        "annoyed", "love", "excited", "grumpy"];

    mkbtns();

    function mkbtns() {
        $('.buttons').empty();
        for (let i = 0; i < topics.length; i++) {
            let btn = $('<button>');
            btn.attr({ 'class': 'btn', 'data': topics[i] });
            btn.text(topics[i]);
            $('.buttons').append(btn);
        }
    }

    $(document).on('click', 'button', function () {
        let attribute = $(this).attr('data');
        var url = `https://api.giphy.com/v1/gifs/search?api_key=VgeYY3oYCCgPBIDvALitcLV5YJDro9CD&q=${attribute}&limit=10&offset=0&lang=en`;
        $.ajax({
            method: 'GET',
            url: url
        }).then(result => {
            console.log(result);
            let data = result.data;

            for (let i = 0; i < data.length; i++) {
                const still = data[i].images.fixed_height_still.url;
                const animate = data[i].images.fixed_height.url

                let gifDiv = $('<div>');
                let rating = $('<p>');
                let gifs = $('<img>');

                gifs.attr('src', still);
                gifs.attr('status', 'still');
                gifs.attr('data-still', still);
                gifs.attr('data-animate', animate);
                gifs.attr('data', i);

                gifDiv.attr('class', 'boxes');

                rating.text("Rating: " + data[i].rating);

                gifDiv.append(gifs);
                gifDiv.append(rating);

                $('#gifs').prepend(gifDiv);
            }

        });
    });

    $(document).on('click', 'img', function () {
        let status = $(this).attr('status');
        let still = $(this).attr('data-still');
        let animate = $(this).attr('data-animate');

        if (status === "still") {
            $(this).attr('src', animate);
            $(this).attr('status', 'animate');
        } else {
            $(this).attr('src', still);
            $(this).attr('status', 'still');
        }
    });

    $('.submitBtn').on('click', function () {
        clicking();
    });

    $('#textInput').keypress(e => {
        if (e.keyCode == '13') {
            clicking();
        }
    });

    function clicking() {
        let text = $('#textInput').val();
        $('#textInput').val('');
        topics.push(text);
        mkbtns();
    }
});