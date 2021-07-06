console.log("hello");

function makeSound (mediaID, containerID) {
    let container = document.querySelector(`#${containerID}`)
    container.className = "key playing";
    let mediaName = document.querySelector(`#${mediaID}`)
    mediaName.currentTime = 0;
    mediaName.play();
    setTimeout(() => {
        container.className = "key";
    }, 100)
}

//the event listener that catch every keydown

window.addEventListener("keydown", function (event) {
    const letterTouched = event.keyCode;
    switch(letterTouched) {
        case 65:
            makeSound("clap", "letter-A");
            break;
        case 83:
            makeSound("hihat", "letter-S");
            break;
        case 68:
            makeSound("kick", "letter-D");
             break;
        case 70:
            makeSound("openhat", "letter-F");
            break;
        case 71:
            makeSound("boom", "letter-G");
            break;
        case 72:
            makeSound("ride", "letter-H");
            break;
        case 74:
            makeSound("snare", "letter-J");
            break;
        case 75:
            makeSound("tom", "letter-K");
            break;
        case 76:
            makeSound("tink", "letter-L");
            break
    }
})