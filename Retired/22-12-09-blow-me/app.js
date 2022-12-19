

// === MODEL SECTION ===

balloonSize = 250;
CHANGE_RATE = 5;
THRESH_MAX = 300;
THRESH_MIN = 0;

MSG_SHRINK = "Noooo I'm getting smaller!!";                             // was used for testing and now deactivated (22.12.19)
MSG_GROW = "muahahaha.. I'm big! and no.. that's NOT what she said";    // was used for testing and now deactivated (22.12.19)


// === CONTROLLER SECTION ===

balloonSpace = document.getElementById("balloon-space");
balloon = document.getElementById("balloon");
bomb = document.getElementById("bomb");

function sizeOnClick(event) {

    if (bomb.classList.contains("active")) {                    // if the explosion has happened then just exit the function without doing anythnig
        return;
    }

    if (event.target.id === "shrink-btn" || event.code === "KeyS") {
        sizeBelowShresh(balloonSize)                            // change or cap reached

    } else if (event.target.id === "grow-btn" || event.code === "KeyW") {
        isItBoomYet(balloonSize);                               // the boom condition

        sizeAboveShresh(balloonSize);                           // change or cap reached

    } else {
        console.log("Lalalala I'm not listening not listening...!");
        return;                                                 // ignore ctr
    }
    console.log(`Event target ID: ${event.target.id}`);
    balloonSize = balloonSize + changeRate;                     // update balloonSize before re-rendering the balloon
    rendrerBalloon();
}


// = CONDITIONS =

function isItBoomYet(balloonSize) {
    if (balloonSize >= THRESH_MAX) {
        showEmoji(bomb, balloon);
        console.log("BOOM!");
    } else {
        return;
    }
}

function sizeAboveShresh(balloonSize) {
    if (balloonSize >= THRESH_MAX) {
        changeRate = 0;
        return changeRate;
    } else {
        changeRate = CHANGE_RATE;
        return changeRate;
    }
}

function sizeBelowShresh(balloonSize) {
    if (balloonSize <= THRESH_MIN) {
        changeRate = 0;
        return changeRate;
    } else {
        changeRate = - CHANGE_RATE;
        return changeRate;
    }
}

function showEmoji(shownEmoji, hiddenEmoji) {
    shownEmoji.classList.add("active");
    shownEmoji.classList.remove("hidden");
    hiddenEmoji.classList.add("hidden");
    hiddenEmoji.classList.remove("active");
}

// add event listener on keydown
document.addEventListener('keydown', (event) => {
    let name = event.key;
    let code = event.code;
    if (name === "Control") {                                   // ignore ctr
        return;
    }
    sizeOnClick(event);
    // Alert the key name and key code on keydown
    console.log(`Key pressed ${name} \r\n Key code value: ${code}`);
    event.target.blur()
  }, false);




// === VIEW SECTION ===

rendrerBalloon();                                               // render upon opening the page

function rendrerBalloon() {
    balloonSpace.style.fontSize = `${balloonSize}%`;
    console.log(`New balloon size: ${balloon.style.fontSize}`);
}