var sims = [ "Homer", "Bart", "Maggie", "Lisa", "March" ];
var point = [];
var missed = [];
var left = 10;
var underScore = [];
var currentWord = sims [ Math.floor(Math.random() * sims.length) ];
var lettersGuessed = '';

console.log(currentWord);
var docUnderscore = document.getElementsByClassName("underScore");

var generateUnderScore = () => {
    for (var i = 0; i < currentWord.length; i++) {
        underScore.push("_");
    }
    console.log(underScore);
    document.querySelector(".underScore").textContent = underScore.join('');
}

generateUnderScore();

document.addEventListener("keypress", function(event) {
    var key = '';

    if (window.event) {
        key = event.keyCode;
    } else if (event.which) {
        key = event.which;
    }

    var keyword = String.fromCharCode(key);
    // Check if the keyword was already guessed (in lettersGuessed variable).
    if (currentWord.indexOf(keyword)> -1){
        // Find out if keyword is in the currentWord.
        point.push(keyword);
        // Replace it in the underscore.
        underScore[Word.indexOf(keyword)] = keyword;
        if (underScore.join("") == sims){
            alert("uujjuu");
        }
        
        // Take one away from left.
        missed.push(keyword);
    }
console.log(underScore);

        // If not guessed, continue with logic.
                // If keyword is not in currentWord
                    // Check to see if left equals 0
                        // If left equals 0, end the game with lost action.
                // If keyword is in the currentWord.
                    // Display the new underScore.
                    // Check if underScore equals currentWord
                        // Then they win, end game with win action.
         // Else, return;
});