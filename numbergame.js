function generate(number) {
   var number =  Math.floor((Math.random() * 500) + 1);
   return number;
}

function userGuess() {
    var guess;
    var number = generate();
    var numGuess = 0;
    var maxGuess = 20;
        while (guess != number && numGuess < maxGuess) {
            var remaining = maxGuess - numGuess;
        guess = window.prompt("What is the number? You have "+ remaining +" guesses remaining.");
        if (guess < number) {
            alert("higher");
        }
        if (guess > number) {
            alert("lower");
        }
        numGuess ++;    
    }
    if (guess == number) {
        alert("Congratulations! You have successfully guessed the number in "+numGuess+"guesses!");
    }
    else {
        alert("You suck");
    }  
}
window.addEventListener("load",function(){
    document.getElementById("start").addEventListener("click", userGuess);
