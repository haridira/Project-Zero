


// === DATA ===

const gamePattern = [];
const playerPattern = [];

const CLICK_FLICKER_TIME_OUT = 120;

const PATTERN_PALLET = ["red", "blue", "green", "yellow"];


// == Status Text ==

const STATUS_DEF = "Press any key to start";
const STATUS_LEVEL = "Press any key to start";
const STATUS_LOST = "Press any key to start";

// == Data Section - Functions ==

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

// push that randomly picked color to the pattern array
function addColorPattern() {
    let randomColor = generateRandomColor();
    gamePattern.push(randomColor);
}

// TESTING ONLY
let randomColor = generateRandomColor();
console.log(`and today's random color isssss ${generateRandomColor}!!`);
// END OF TESTING SPACE

// === CONTROLLER ===

// set values on start
function onStart() {
    $(".item").addClass("opacity-def");
}

// player clicks on one the color buttons
$(".button").on("click", function() {
    let color = $( this ).attr('id');                           // define the color variable to use it in coming functions
    logSuccess(color);                                          // TEST LOG
    activateButton(color);
});

// function of pattern addition
function patternAdd() {
    let randomColor = generateRandomColor();
    gamePattern.push(randomColor);
    activateButton(randomColor);                                // the flicker effect
}

// === VIEW ===

onStart();

// flicker effect
function activateButton(color) {
    $(`#${color}`).removeClass("opacity-def");
    $(`#${color}`).addClass("opacity-active");
    setTimeout( () => {
        $(`#${color}`).removeClass("opacity-active");
        $(`#${color}`).addClass("opacity-def");
    }, CLICK_FLICKER_TIME_OUT);
    }
    
    
   


// TEST LOG: confirm that the correct button has been clicked
function logSuccess(color) {
    console.log(`Button with the ${color} color just clicked!`);
}





// deprecated: code below is unneeded and kept only for reference on how to use the (e) => function with .on("click")

// $(".blue").on("click", (e) => {
//     let color = e.target.id;
//     logSuccess(color);
//     // e.target.innerHTML = "6"
// });

