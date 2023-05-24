
// === DATA ===

let gamePattern = [];
let playerPattern = [];

let level = 0;
let playerCounter = 0;

const CLICK_FLICKER_TIME_OUT = 130;
const fadeTime = 110;
let isPatternFlicker = false;

const PATTERN_PALLET = ["red", "blue", "green", "yellow"];

let gameOver = false;
let gameStarted = false;

// == Status Text ==

const STATUS_START = "Press any key to start";
const STATUS_LOST = "Game Over! (Press any key to start over)";
const STATUS_LEVEL = "Level: ";

// == Data Section - Functions ==

// refresh player status for a new round/ level
function refreshPlayerRound() {
    playerCounter = 0;
    playerPattern = [];
}

// random index to randomly pick from the predefined pallet
function generateRandomIndex() {
    let palletLength = PATTERN_PALLET.length;
    let randomIndex = Math.floor(Math.random()*palletLength);
    return randomIndex;
}

// randomly pick the color from the predefined pallet
function generateRandomColor() {
    let randomColor = "";
    let randomIndex = generateRandomIndex();
    randomColor = PATTERN_PALLET[randomIndex];
    return randomColor;
}

// === CONTROLLER ===

// ## trigger game start

function startGame() {
    gameStarted = true;
    gameOver = false;
    patternAdd();
}

$(document).keydown((e) => {
    if (e.key === "Control") {
        return;
    }
    if (!gameStarted) {
        startGame();
    }
});

// the cell-phone start button
$("#start-button").on("click", function() {
    if (gameStarted) {
        return;
    } else {
        flickerOnClick("start-button");
        startGame();
        $( this ).addClass("no-hover");
    }
});

// set values on start
function onStart() {
    $(".item").addClass("opacity-def");
    level = 0;
    playerCounter = 0;
    gamePattern = [];
    playerPattern = [];
    gameStarted = false;
    $("#start-button").removeClass("no-hover");
    renderState();
}

// player clicks on one the color buttons
$(".button").on("click", function() {
    if (!gameStarted) {
        return;
    }
    let color = $( this ).attr('id');                           // define the color variable to use it in coming functions
    flickerOnClick(color);                                      // visual effect
    playerPattern.push(color);                                  // add the clicked color to the player pattern

    // update status
    gameOver = isGameOver(playerCounter);

    if (!gameStarted) {
        return;
    } else if (gameOver) {
        console.log("Game over!");                              // TEST LOG
        renderState();
        onStart();
    } else if (!gameOver && playerCounter + 1 === level) {
        refreshPlayerRound();
        patternAdd();
    } else if (!gameOver) {
        playerCounter++;
    } else {
        console.log("UNEXPECTED at player click");
    }

    renderState();
});

// function of pattern addition
function patternAdd() {
    let randomColor = generateRandomColor();                    // generate a random color and add it to the game pattern
    gamePattern.push(randomColor);

    setTimeout( () => {
        flashButton(randomColor, CLICK_FLICKER_TIME_OUT * 2)
    }, 230);

    // increment level
    level++;

    console.log(`random color is: ${randomColor}`);             // TEST LOG
    renderState(level);
}

// update game status - is it fail yet?
function isGameOver(playerCounter) {
    let gameOver = false;
    if (gamePattern[playerCounter] === playerPattern[playerCounter]) {
        gameOver = false;
    } else {
        gameOver = true;
    }
    return gameOver;
}

// === VIEW ===

onStart();

// flicker effect
function flashButton(color, waitTime) {
    $(`#${color}`).removeClass("opacity-def");
    $(`#${color}`).addClass("opacity-active");
    $(`#${color}`).addClass("border-click");
    setTimeout( () => {
        $(`#${color}`).removeClass("opacity-active");
        $(`#${color}`).addClass("opacity-def");
        $(`#${color}`).removeClass("border-click");
    }, waitTime);
}
    
function flashMultiple(flickerFunction, color, waitTime, noFlashes) {

    for (i = 0; i < noFlashes * waitTime; i = i + waitTime) {
        setTimeout( () => {
            flickerFunction(color, waitTime / 2)
        } , i);
    }
}
    
function flickerOnClick(color) {
    $(`#${color}`).fadeIn(fadeTime).fadeOut(fadeTime).fadeIn(fadeTime)
}

function renderState() {
    if (gameOver) {
        $("#status").text(STATUS_LOST);
    } else if (!gameOver && gameStarted) {
        $("#status").text(STATUS_LEVEL + level);
    } else if (!gameStarted) {
        $("#status").text(STATUS_START);
    } else {
        $("#status").text("UNEXPECTED");
    }
}


/*
deprecated: code below is unneeded and kept only for reference on how to use the (e) => function with .on("click")

// onClick but using the event as input to target button id
$(".blue").on("click", (e) => {
    let color = e.target.id;
    logSuccess(color);
    // e.target.innerHTML = "6"
});


// TEST LOG: confirm that the correct button has been clicked
function logSuccess(color) {
    console.log(`Button with the ${color} color just clicked!`);
}

*/
