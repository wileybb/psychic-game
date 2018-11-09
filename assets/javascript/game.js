
        var wins = 0;
        var losses = 0;
        var computerChoiceText = document.getElementById("computerchoice-text");
        var userChoiceText = document.getElementById("userchoice-text");
        var winsText = document.getElementById("wins-text");
        var lossesText = document.getElementById("losses-text");
        var resetText = document.getElementById("reset-text");
    document.onkeyup = function(event) {
        
        
       
        var userGuess = event.key;
        var computerGuess = Math.floor(Math.random()*10);
        if (isNaN(userGuess) === false || userGuess === "r"){
        
        resetText.textContent = " Press R to reset"

        userChoiceText.textContent = "You chose: " + userGuess;
        computerChoiceText.textContent = "The computer chose: " + computerGuess;
        
        if (userGuess === "r"){
            wins = 0;
            losses = 0;
            winsText.textContent = "wins: " + wins;
            lossesText.textContent = "losses:" + losses;
            userChoiceText.textContent = " ";
            computerChoiceText.textContent = "Pick a number...";
            resetText.textContent = " ";
        }
        if (userGuess ==  computerGuess) {
         
            wins++;
        }
        if (userGuess === "r"){
            return;
        }
        else {
            losses++;
        }
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses:" + losses;
       
        } 
       

        

    }
   