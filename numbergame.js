function generate(number) {
   var number =  Math.floor((Math.random() * 500) + 1);
}

var userGuess = window.prompt("What is the number?: ");

function userGuess() {
    while (userGuess != number) {
        if (userGuess < number) alert ("higher");
        userGuess = window.prompt("What is your next guess?: ");
        if (userGuess > number) return ("lower");
        userGuess = window.prompt("Can you get any hotter?: ");
        break;
    if (userGuess === number) alert ("Congratulations! You have successfully guessed the number");
    }
}
