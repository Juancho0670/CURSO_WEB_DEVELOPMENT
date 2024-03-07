// PARTE I
var gamePattern = []; // This variable hold the game pattern
var buttonColours = ["red", "blue", "green", "yellow"]; // this list is to get the button color according to the random number generated 
var userClickedPattern = []; // this list hold the buttons sequence pressed 
var level = 0; // this variable indicates the game level
var started = false; // this variable is a flag to control when the game was started

/* 
   this function generates a random value between 0 and 3 
   the number is used to select a color from buttonColors list
   then, the game level is increased by adding 1 to level variable
   then H1 header text is changed according to the level 
*/
function nextSequence(){
   var randomNumber =  Math.round(Math.random() *3); // generate an integer between 0 and 3
   var randomChosenColour = buttonColours[randomNumber]; // select a color from buttonColors list based on their index (the random number generated before)
   gamePattern.push(randomChosenColour); // add to gamePattern list the selected color
   $('#level-title').text('Level '+ level); // change H1 text based on the value of the counter (level)
   level++; // incremente the counter (level) by 1
   userClickedPattern.length = 0; // clear the list 
   return randomChosenColour; // return the color selected
}

function checkAnswer(currentLevel) {
    if (gamePattern[gamePattern.length - 1] === buttonColours[currentLevel]){
        nextSequence();
    } else {
        $("body").addClass('game-over');
        setTimeout(() => {
            $("body").removeClass('game-over');
        }, 100);
        playSound("wrong");
        $('#level-title').text("Game Over, Press Any Key to Restart");
        startOver()
    }
}

// PARTE II
function flashButton(buttonColor) {
    $(document).ready(function() {
        // Function to toggle button visibility
        function toggleButton() {
            $("#"+buttonColor).animate({opacity: 0}, 100).animate({opacity: 1}, 100);
        }
        // Flash the button after a 500 millisecond delay
        setTimeout(toggleButton, 500);
    });
}

// this function plays a sound, the argument is the name os the sound file (sound files are under ./sounds folder) 
function playSound(name) {
    var audio = new Audio("sounds/"+ name + ".mp3");
    audio.play();
}

function startOver() {
    gamePattern.length = 0;
    userClickedPattern.length = 0;
    level = 0;
    started = false;
}

// PARTE III - IV 
$(document).ready(function(){
    $(document).keydown(function(event){
        if (!started) {
            nextSequence();
            started = true;
        }
        
    });

    $('.btn').click(function(){
        $(this).addClass('pressed');
        setTimeout(() => {
            $(this).removeClass('pressed');
        }, 100);
        var userChosenColour = $(this).attr('id');
        userClickedPattern.push(userChosenColour);
        playSound(userChosenColour);
        checkAnswer(buttonColours.indexOf(userChosenColour));
        //alert(userChosenColour);
        //flashButton(userChosenColour);
        console.log('Game Pattern: ' + gamePattern + ' User Pattern ' + userClickedPattern);
    });
});






 



