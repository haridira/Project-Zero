
// link JS script to the HTML document buttons and get the array's length
let drumButtons = document.querySelectorAll(".drum");
let drumButtonsLength = drumButtons.length;

for (let i = 0; i < drumButtonsLength; i++) {
    drumButtons[i].addEventListener("click", function () {

        let buttonInnerHtml = this.innerHTML;

        makeSound(buttonInnerHtml);

        buttonAnimation(buttonInnerHtml);
    })
}



document.addEventListener("keydown", function(e) {
    makeSound(e.key);

    buttonAnimation(e.key);
});




function makeSound(key) {
    let buttonKey = key.key;

        switch (key) {
            case "w":
                let drum01 = new Audio("./sounds/tom-1.mp3");
                drum01.play();
                break;
            case "a":
                let drum02 = new Audio("./sounds/tom-2.mp3");
                drum02.play();
                break;
            
            case "s":
                let drum03 = new Audio("./sounds/tom-3.mp3");
                drum03.play();
                break;

            case "d":
                let drum04 = new Audio("./sounds/tom-4.mp3");
                drum04.play();
                break;

            case "j":
                let snare = new Audio("./sounds/snare.mp3");
                snare.play();
                break;
            case "k":
                let crash = new Audio("./sounds/crash.mp3");
                crash.play();
                break;
            case "l":
                let kick = new Audio("./sounds/kick-bass.mp3");
                kick.play();
                break;

            default: if (key === "Alt" || key === "Control") {
                return;
            } else {
                console.log(`${key} was pressed!`);
                break;}
        }
}

function buttonAnimation(currentKey) {

    let activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(() => {
        activeButton.classList.remove("pressed")   
    }, 100)
}