function generate(number) {
   var number =  Math.floor((Math.random() * 500) + 1);
   return number;
}

function userGuess() {
    var guess;
    var number = generate();
        while (guess != number) {
        guess = window.prompt("What is the number?: ");
        if (guess < number) {
            alert("higher");
        }
        if (guess > number) {
            alert("lower");
        }
    }
    alert ("Congratulations! You have successfully guessed the number");
}
