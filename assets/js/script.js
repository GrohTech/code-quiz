var startTime = 75;

var timerEl = document.querySelector("#countdown");

function countdown() {
    var startTime = 75;

        // Timer is set to count down one second at a time
        var timeInterval = setInterval(fuction(){
        
            
        timerEl.innerHTML = 
        startTime--;

        }, 1000);
};

// When timer gets to zero and/or when user answers final question (.length of question array), clearInterval

// When user presses start, the timer starts and the first quiz question appears

// When user corretly answers a question, "Correct!" appears at the bottom of the screen

// When user incorrectly answers a question, "Wrong!" appears at the bottome of the screen and 10 seconds is removed from the timer countdown.

//When uswer answers final question "All done!" appears, as well as the final score and an option to enter initials.