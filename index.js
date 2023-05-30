// document.querySelector("button").addEventListener("click",handleClick);
// function handleClick(){
//     alert("i got click");
// }

// alternative way to write code that is written in line 1-4
// document.querySelector("button").addEventListener("click",function(){alert("clicked");})

function mapToSound(key) {
    var audio;
    switch (key) {
        case 'w':
            audio = new Audio('sounds/tom-1.mp3')
            break;
        case 'a':
            audio = new Audio('sounds/tom-2.mp3')
            break;
        case 's':
            audio = new Audio('sounds/tom-3.mp3')
            break;
        case 'd':
            audio = new Audio('sounds/tom-4.mp3')
            break;
        case 'j':
            audio = new Audio('sounds/snare.mp3')
            break;
        case 'k':
            audio = new Audio('sounds/crash.mp3')
            break;
        case 'l':
            audio = new Audio('sounds/kick-bass.mp3')
            break;
        default:
            console.log(key)
    }
    audio.play();
}

function addAnimation(buttonTriggerd) {
    var obj = document.querySelector("." + buttonTriggerd);
    obj.classList.add("pressed");

    setTimeout(function () {
       obj.classList.remove("pressed");
    },100)
}

var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        mapToSound(this.innerHTML);
        addAnimation(this.innerHTML);
    })
}

document.addEventListener("keydown", function (ee) {
    mapToSound(ee.key);
    addAnimation(ee.key);
})

// ee is the event passed to the callback function that triggered this function, its like identifier means we can put any string instead of ee
// it is so because this callback function is not called by us it's called by the object so it maintains the information about the object like which key is pressed actually etc