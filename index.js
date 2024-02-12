let jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Parallel lines have so much in common. It’s a shame they’ll never meet.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "I'm on a whiskey diet. I've lost three days already!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "I'm reading a book about mazes. I got lost in it.",
    "Why couldn't the bicycle stand up by itself? It was two-tired.",
    "I used to play piano by ear, but now I use my hands."
];

function generateJoke() {
    let randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
}

function displayJoke() {
    let jokeContainer = document.getElementById("joke-container");
    jokeContainer.textContent = generateJoke();
}

let jokeButton = document.getElementById("joke-generator-button");
jokeButton.addEventListener("click", displayJoke);
