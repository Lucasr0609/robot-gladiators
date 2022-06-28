var playerName = window.prompt("What is your robot's name");
var playerHealth = 100;
// check to see if the value of the playerHealth variable is greater than 0
if (playerHealth > 0) {
    console.log("Your player is still alive!");
}
var playerAttack = 10;
if (playerHealth === 0) {
    console.log("This will not run.");
  } 
  else {
    console.log("This will run instead.");
  }
// you can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyActtack = 12;

var fight = function() {
    // Alert players that they are starting the round
    window.alert("Wellcome to Robot Gladiators!");

    // Substarct the value of 'playerAttack' from the value of enemyHealth' use that result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. "
    );
    // Substract the value of enemyAttack' from the value of playerHealth' and use that result t o update the value in the 'playerHealth' variable.
    playerHealth = playerHealth - enemyActtack
    // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " atacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
    // Check player's health
    if (playerHealth <= 0) {
        window.alert(playerHealth + " has died!");
    }
    else {
        window.alert(playerHealth + " still has " + playerHealth + " health left.");
    }
}
// execute the function
fight();