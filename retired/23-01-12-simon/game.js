// === DATA SECTION ===

const SOUNDS_PATH_01 = "./sounds/";
const SOUNDS_PATH_03 = ".mp3";

// the predefined colors
const buttonColors = ["red", "blue", "green", "yellow"];

// the two patterns
let gamePattern = [];
let userClickedPattern = [];

let started = false;
let gameOver = false;

let level = 0;

let STARTING_TEXT = "Press A Key to Start";
let GAMEOVER_TEXT = "Game Over!";

function resetLevel() {
    level = 0;
}

function resetGamePattern() {
    gamePattern = [];
}

function resetUserClickedPattern() {
    userClickedPattern = [];
}

// === CONTROLLER SECTION ===

// ## trigger game start
$(document).keydown((e) => {
    if (e.key === "Control") {
        return;
    }
    if (!started) {
        started = true;
        nextSequence();
    }
});

// ## onStart

function onStart() {
    resetGamePattern();
    resetUserClickedPattern();
    resetLevel();
    started = false;
    gameOver = false;
    renderState();
    console.log("game restarted!");
}

// ## the game pattern sequence, add to

function nextSequence() {
    // add a new random color to the pattern
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);

    // increase the level count
    level++;
    renderState();
    //renderLevel(level);
    // above: based on a retired function and can be deleted
    // note date: 06.03.2023

    // play visual and sound effects
    $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100);
    //animatePress(randomChosenColour);                                                     // to conform to the tutorial, using the different animation method here
    playSound(randomChosenColour);
}

// ## the user sequence, add to
$(".btn").click( (e) => {
    let userChosenColour = e.target.id;
    console.log(`New color added: ${userChosenColour}`);                                    // a testing line - SAFE to remove
    userClickedPattern.push(userChosenColour);
    console.log(`New Player pattern: ${userClickedPattern}`);                               // a testing line - SAFE to remove

    // play visual and sound effects
    animatePress(userChosenColour);
    playSound(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);

    if (gameOver === true) {
        playSound("wrong");
        renderState();                                                                    // intentionally placed here twice: this first time to render "Game Over!""
        setTimeout(onStart, 1000);
    } else if (userClickedPattern.length === gamePattern.length) {
        userClickedPattern = [];
        setTimeout(nextSequence, 250)
    }
});

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("Success!");                                                            // a testing line - SAFE to remove
    } else {
        console.log("Game Over!");                                                          // a testing line - SAFE to remove
        gameOver = true;
    }
}

// === VIEW SECTION ===

// ## SFX
function playSound(name) {
    let audio = new Audio(SOUNDS_PATH_01 + name + SOUNDS_PATH_03);
    audio.play();
}

// ## visual effects
function animatePress(currentColor) {                                                       // visual effect through adding and removing classes
    $(`#${currentColor}`).addClass("pressed");
    setTimeout(() => {
        $(`#${currentColor}`).removeClass("pressed");
    }, 100);
}

/*
// renderLevel has been retired when I converted the field into a state field
// now the new function renderState() is all encompassing
// and based on the current states it's going to know what to display
// note date: 06.03.2023
function renderLevel(level) {
    $("#level-title").text(`Level ${level}`);
}
*/

function renderState() {
    if (gameOver) {
        $("#level-title").text(GAMEOVER_TEXT);
    } else if (!started) {
        $("#level-title").text(STARTING_TEXT);
    } else if (!gameOver && started) {
        $("#level-title").text(`Level ${level}`);
    } else {
        $("#level-title").text("UNEXPECTED!");
    }
}

// === REMOVED ===

// blow is code that didn't work properly
// the "this" method

/*
$(".btn").click( () => {
    let userChosenColour = this.attr("id");
    //let userChosenColour = $(this).attr("id");
    console.log(`New color added: ${userChosenColour}`);
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
});


$(".btn").click( () => {
    console.log(this);
});
*/
