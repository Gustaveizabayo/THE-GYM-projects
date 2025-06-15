const buttons = document.querySelectorAll(".drum");
 buttons.forEach(button =>{
    button.addEventListener("click", function (){
        const buttonInner =  this.inneHTML.toLowerCase ();
        playSound(buttonInner);
        buttonAnimation(buttonInner);
    });
 });
 document.addEventListener("keydown", function (event) {
    playSound(event.key.toLowerCase());
    buttonAnimation(event.key.toLowerCase());

 });

 function playSound(key) {
    switch (key) {
        case "w" :
            new Audio("sounds/crash.mp3").play();
            break;
            case "a" :
                new Audio("sounds/kick-bass.mp3").play();
                break;
                case "s" :
                    new Audio("sounds/snare.mp3").play();
                    break;
                    case "d" :
                        new Audio("sounds/tom-1.mp3").play();
                        break;
                        case "j" :
                            new Audio("sounds/tom-2.mp3").play();
                            break;
                            case "k" :
                                new Audio("sounds/tom-3.mp3").play();
                                break;
                                case "l" :
                                    new Audio("sounds/tom-4.mp3").play();
                                    break;
    }
 }
  
 function buttonAnimation(key) {
    const activeButton = document.querySelector(`.${key}`);
        if (activeButton) {
            activeButton.classList.add("pressed");
            setTimeout(() => {
                activeButton.classList.remove("pressed");
            }, 100);
        }

 }