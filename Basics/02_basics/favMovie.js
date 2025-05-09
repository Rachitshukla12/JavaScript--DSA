const favMovie = "Inception";

let Guess = prompt("Guess the movie title:");

while (favMovie !== Guess) {
    console.log("Sorry, that's not the movie you're thinking of. Try again!");
    Guess = prompt("Guess again:");
}if (favMovie === Guess) {
    console.log("Congratulations, you guessed the movie!");
}
