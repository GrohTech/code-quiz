var timerEl = document.querySelector("#countdown");
var timeLeft = 90;
var startBtn = document.querySelector("#start-button");
var question1 = document.querySelector("#question-1");
var question2 = document.querySelector("#question-2");
var question3 = document.querySelector("#question-3");
var question4 = document.querySelector("#question-4");
var question5 = document.querySelector("#question-5");
var correct = document.querySelector(".quiz-response-correct");
var wrong = document.querySelector(".quiz-response-wrong");
var gameOver = document.querySelector("#game-over");
var timeLeft = 90;
var finalScore = document.querySelector("#final-score");
var highScoresLink = document.querySelector(".high-scores");
var highScores = document.querySelector("#high-scores");

// When user presses start, the timer starts and the first quiz question appears
startBtn.addEventListener("click", startQuiz)

function startQuiz() {
    countdown();
    document.querySelector("#before-start").style.display = "none";
    question1.style.display = "block";
    return;
};

// var answerButton = document.querySelectorAll("button");

// // answerButton.onclick = startQuestion1;

// answerButton.addEventListener("click", startQuestion1)

function startQuestion1(event) {
    // When user correctly answers a question, "Correct!" appears at the bottom of the screen
    console.log(event);
    if (event.target.id) {
        alert("Correct!");
    }
    // When user incorrectly answers a question, "Wrong!" appears at the bottome of the screen and 10 seconds is removed from the timer countdown.
    else {
        alert("Wrong!");
        event.stopPropagation();
        timeLeft = timeLeft - 10;
        //timerEl.innerHTML = timeLeft - 10;
        //wrong.style.display = "block";
        //subtract 10 seconds
    }
    question1.style.display = "none";
    question2.style.display = "block";
    return;
};
document.querySelector("#q2-answers").addEventListener("click", startQuestion2)

function startQuestion2(event) {
    // When user correctly answers a question, "Correct!" appears at the bottom of the screen
    if (event.target.id) {
        alert("Correct!");
        event.stopPropagation();
        //correct.style.display = "block";
        
    }
    // When user incorrectly answers a question, "Wrong!" appears at the bottome of the screen and 10 seconds is removed from the timer countdown.
    else {
        alert("Wrong!");
        event.stopPropagation();
        timeLeft = timeLeft - 10;
    }
    question2.style.display = "none";
    question3.style.display = "block";
    return;
};
document.querySelector("#q3-answers").addEventListener("click", startQuestion3)

function startQuestion3(event) {
    // When user correctly answers a question, "Correct!" appears at the bottom of the screen
    if (event.target.id) {
        alert("Correct!");
        event.stopPropagation();
    }
    // When user incorrectly answers a question, "Wrong!" appears at the bottome of the screen and 10 seconds is removed from the timer countdown.
    else {
        alert("Wrong!");
        event.stopPropagation();
        timeLeft = timeLeft - 10;
    }
    question3.style.display = "none";
    question4.style.display = "block";
    return;
};
document.querySelector("#q4-answers").addEventListener("click", startQuestion4)

function startQuestion4(event) {
    // When user correctly answers a question, "Correct!" appears at the bottom of the screen
    if (event.target.id) {
        alert("Correct!");
        event.stopPropagation();
    }
    // When user incorrectly answers a question, "Wrong!" appears at the bottome of the screen and 10 seconds is removed from the timer countdown.
    else {
        alert("Wrong!");
        event.stopPropagation();
        timeLeft = timeLeft - 10;
    }
    question4.style.display = "none";
    question5.style.display = "block";
    return;
};
document.querySelector("#q5-answers").addEventListener("click", startQuestion5)

function startQuestion5(event) {
    // When user correctly answers a question, "Correct!" appears at the bottom of the screen
    if (event.target.id) {
        alert("Correct!");
        event.stopPropagation();
    }
    // When user incorrectly answers a question, "Wrong!" appears at the bottome of the screen and 10 seconds is removed from the timer countdown.
    else {
        alert("Wrong!");
        event.stopPropagation();
        timeLeft = timeLeft - 10;
    }
    //After user answers final question "All done!" appears, as well as the final score and an option to enter initials.
    question5.style.display = "none";
    gameOver.style.display = "block";
    return;
};

function endGame() {
    finalScore.innterHTML = timeLeft;
}

highScoresLink.addEventListener("click", clickHighScores())
function clickHighScores(event) {
    if (event.target.highScoresLink){
    highScores.style.display = "block";
    }
}

function countdown() {

    // Timer is set to count down one second at a time
    var timeInterval = setInterval(function(){


        timerEl.innerHTML =
            timeLeft--;
        if (timeLeft === 0) {
            timerEl.textContent = '0';
            clearInterval(timeInterval);
            // Run gameOver function
        } 
    }, 1000);
};

// When timer gets to zero and/or when user answers final question (.length of question array), clearInterval
