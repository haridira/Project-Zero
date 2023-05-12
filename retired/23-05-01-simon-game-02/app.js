


// === DATA ===

const gamePattern = [];
const playerPattern = [];

CLICK_FLICKER_TIME_OUT = 100;


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

