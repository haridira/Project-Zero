
const NO_DANCEMOJIS = 350;

const rightBar = document.getElementById("ribar");

function addDancemojis() {
    for (let i = 0; i < NO_DANCEMOJIS; i++) {
        const doll = document.createElement("img");
        doll.src = "./img/icon-dance/android-chrome-192x192.png";
        //doll.classList.add = "dancemoji";
        doll.className = "dancemoji";

        const tileEmpty = document.createElement("img");
        tileEmpty.src = "./img/icon-dance/tile-transparent.png";
        tileEmpty.className = "tile-empty";

        let k = Math.random();
        if (k <0.15) {
            rightBar.appendChild(doll);
        } else {
        rightBar.appendChild(tileEmpty);
        }
    }
}

addDancemojis();
