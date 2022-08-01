var playerName = prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;




var fight = function() {
    // Alert players that they are starting the round
    alert("Welcome to Robot Gladiators!");
    var promptFight = prompt("Would you like to Fight or Skip this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    // if player choses to fight, then fight
    if (promptFight === "FIGHT" || promptFight === "fight"){
            // remove enemy's health by substracting the amount set in the playerAttack variable
            enemyHealth = enemyHealth - playerAttack;
            console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

            // check enemy's health
            if (enemyHealth <= 0) {
            alert(enemyName + " has died!");
        } else {
        alert(enemyName + " now has " + enemyHealth + " health left!");
        };

        // remove play's health by substracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
        // check player's health
        if (playerHealth <= 0) {
        alert(playerName + " has died!");
        } else {
        alert(playerName + " still has " + playerHealth + " health left.");
        };

        // if player choose to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm play wants to skip
        var confirmSkip = confirm("Are you sure you'd like to quit?");

        // if yes (ture), leave fight
        if (confirmSkip) {
            alert(playerName + " has decided to skip this fight. Goodbye!")
            // substract money from playerMoney for skipping
            playerMoney = playerMoney - 2
            alert("Do to " + playerName + " choosing skip. " + playerName + " now has " + "$" + playerMoney + " remaining!");
        } // if no (false), ask question again by running fight() again
        else {
            fight();
        }
        
    } else {
        alert("You need to choose a valid option. Try again!");
    };
};

// Execute Function

fight();