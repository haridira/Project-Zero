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

function resetLevel() {
    level = 0;
}

function resetGamePattern() {
    gamePattern = [];
}

function resetUserClickedPattern() {
    userClickedPattern = [];
}

// ## onStart

function onStart() {
    resetGamePattern();
    resetUserClickedPattern();
    resetLevel();
    started = false;
    gameOver = false;
    renderOnStart();
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
    renderLevel(level);

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
    console.log(`New Player pattern: ${userClickedPattern}`);                                                        // a testing line - SAFE to remove

    // play visual and sound effects
    animatePress(userChosenColour);
    playSound(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);

    if (userClickedPattern.length === gamePattern.length && gameOver === false) {
        userClickedPattern = [];
        setTimeout(nextSequence, 250)
        //nextSequence();
    }   else if (gameOver === true) {
        renderOnStart();
        playSound("wrong");
        renderWrong();
        setTimeout(onStart, 1000);
    }
});

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("Success!");
    } else {
        console.log("Game Over!");
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
function animatePress(currentColor) {
    // below (the animation effect): removed and replaced with using classes, instead
    // my guess is that the classes method is cleaner
    // because it better adheres to the concept of separation of concerns
    //$(`#${currentColor}`).fadeIn(100).fadeOut(100).fadeIn(100);
    $(`#${currentColor}`).addClass("pressed");
    console.log(`${currentColor} added`);                                                   // a testing line - SAFE to remove
    setTimeout(() => {
        $(`#${currentColor}`).removeClass("pressed");
    }, 100);
}

function renderLevel(level) {
    $("#level-title").text(`Level ${level}`);
}

function renderOnStart() {
    if (!gameOver) {
        $("#level-title").text(STARTING_TEXT);
    } else if (gameOver) {
        $("#level-title").text(GAMEOVER_TEXT);
    } else {
        $("#level-title").text("UNEXPECTED!");
    }
}

function renderWrong() {
    $("body").addClass("game-over");
    setTimeout(() => $("body").removeClass("game-over"), 200);
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
