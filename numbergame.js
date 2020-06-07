function generate(number) {
   var number =  Math.floor((Math.random() * 500) + 1);
   return number;
}

function userGuess() {
    var guess;
    var number = generate();
    var numGuess = 0;
        while (guess != number && numGuess < 3) {
        guess = window.prompt("What is the number?: ");
        if (guess < number) {
            alert("higher");
        }
        if (guess > number) {
            alert("lower");
        }
        numGuess ++;
    }
    alert ("Congratulations! You have successfully guessed the number");
}
window.addEventListener("load",function(){
    document.getElementById("start").addEventListener("click", userGuess);
});

