let numberOfButtons = document.querySelectorAll(".button").length;

for (let i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".button")[i].addEventListener("click", function() {
        let buttonInnerHTML = this.innerHTML;
        switch(buttonInnerHTML){
            case "Szukaj fachowca":
            let muzyka = new Audio("sound/song_1.mp3");
            muzyka.play();
            break;
        }
    });
}
