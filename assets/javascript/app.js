$(document).ready(function () {
    var topics = ["happy", "angry", "sad", "frustrated", "sneaky", "scared", "surprised", "shy", "bossy", "sleepy",
        "embarrassed", "mean", "proud", "nervous", "silly", "disappointed", "confused", "impatient", "curious", "kind",
        "annoyed", "obnoxious", "excited", "grumpy"];
    var url = "https://api.giphy.com/v1/gifs/search?api_key=VgeYY3oYCCgPBIDvALitcLV5YJDro9CD&q=disney&limit=10&offset=0&rating=G&lang=en";

    for (let i = 0; i < topics.length; i++) {
        let btn = $('<button>');
        btn.attr({ 'class': 'btn', 'data': topics[i] });
        btn.text(topics[i]);
        $('.buttons').append(btn);
    }
});