function generate(){
    var quotes = {
        "-Willie Nelson":"Once you replace negative thoughts with positive ones, you'll start having positive results.",
        "-Helen Keller":"Keep your face to the sunshine and you cannot see a shadow.",
        "-Kobe Bryant":"The most important thing is to try and inspire people so that they can be great in whatever they want to do.",
        "-Lyndon B. Johnson":"Yesterday is not ours to recover, but tomorrow is ours to win or lose.",
        "-Albert Einstein":"The gift of fantasy has meant more to me than my talent for absorbing positive knowledge."
    }

    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random()*authors.length)];
    var quote = quotes[author];
    document.getElementById("quote").innerHTML=quote;
    document.getElementById("author").innerHTML=author;
}

