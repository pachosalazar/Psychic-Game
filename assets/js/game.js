//  what i nee in variables
// pc choices so i need a array
var pcChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guesses = 10;
var left = 10;
var NewGuess= null;
var typedLetters= [];
// now i have to create a random choise for the pc 
var pcGuess = pcChoices[Math.floor(Math.random() * pcChoices.length)];
// Guess what the pc is gonna chose as new guess
var updateNewGuess = function() {
this.NewGuess = this.pcChoices[Math.floor(Math.random() * this.pcChoices.length)];
};

// what letters have been chosen
var updateGuesses = function() {
document.querySelector("#let").innerHTML = "Your Guesses so far: " + typedLetters.join(", ");
};
// Wins: (# of times the user has guessed the letter correctly)

// Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)

// Guesses Left: (# of guesses left. This will update)
var updateLeft = function() {
document.querySelector("#left").innerHTML = "You Have left: " + left;
};


// Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)
document.onkeyup = function(event) {
left--;
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
console.log(event);
typedLetters.push(userGuess);
updateLeft();
updateGuesses();

    if (left > 0){
        // When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
    if (userGuess == NewGuess){
    wins++;
    document.querySelector('#wins').innerHTML = "Wins: " + wins;
    alert("WoooW Your on fire!!!");
    reset();
    }
    // When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).
    }else if(left == 0){
    losses++;
    document.querySelector('#losses').innerHTML = "Losses: " + losses;
    alert("OHHHH Bad luck try again!!!");
    reset();
    }
    };
   
var reset = function() {
guesses = 10;
left = 10;
typedLetters = [];

updateNewGuess();
updateLeft();
updateGuesses();
}

updateNewGuess();
updateLeft();
