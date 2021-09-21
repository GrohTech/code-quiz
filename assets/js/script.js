// Timer variables
var timerEl = document.querySelector("#countdown");
var timeLeft = 90;

// Game play variables
var beforeStart = document.querySelector("#before-start");
var startBtn = document.querySelector("#start-button");
var question1 = document.querySelector("#question-1");
var question2 = document.querySelector("#question-2");
var question3 = document.querySelector("#question-3");
var question4 = document.querySelector("#question-4");
var question5 = document.querySelector("#question-5");
var correct = document.querySelector(".quiz-response-correct");
var wrong = document.querySelector(".quiz-response-wrong");
var gameOver = document.querySelector("#game-over");

// Score variables
var finalScore = document.querySelector("#final-score");
var highScoresLink = document.querySelector(".high-scores");
var highScores = document.querySelector("#high-scores");
var runningScore = 0
var hsScore = document.querySelector("#hs-score");
var tryAgain = document.querySelector(".try-again");

//var initialsEntered = document.querySelector("#initials-entered")
var initialsSubmit = document.querySelector(".initials-submit");
var hsInitials = document.querySelector("#hs-initials");


// When user presses start, the timer starts and the first quiz question appears
startBtn.addEventListener("click", startQuiz)

function startQuiz() {
    countdown();
    document.querySelector("#before-start").style.display = "none";
    question1.style.display = "block";
    return;
};

// Question 1 appears
function startQuestion1(event) {
    // When user correctly answers a question, "Correct!" appears at the bottom of the screen
    if (event.target.id) {
        alert("Correct!");
        runningScore += 1
    }
    // When user incorrectly answers a question, "Wrong!" appears at the bottome of the screen and 10 seconds is removed from the timer countdown.
    else {
        alert("Wrong!");
        event.stopPropagation();
        timeLeft = timeLeft - 10;
    }
    question1.style.display = "none";
    question2.style.display = "block";
    return;
};
document.querySelector("#q2-answers").addEventListener("click", startQuestion2)

// Question 2 appears
function startQuestion2(event) {
    // When user correctly answers a question, "Correct!" appears at the bottom of the screen
    if (event.target.id) {
        alert("Correct!");
        event.stopPropagation();
        runningScore += 1

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

// Question 3 appears
function startQuestion3(event) {
    // When user correctly answers a question, "Correct!" appears at the bottom of the screen
    if (event.target.id) {
        alert("Correct!");
        event.stopPropagation();
        runningScore += 1
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

// Question 4 appears
function startQuestion4(event) {
    // When user correctly answers a question, "Correct!" appears at the bottom of the screen
    if (event.target.id) {
        alert("Correct!");
        event.stopPropagation();
        runningScore += 1
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

// Question 5 appears
function startQuestion5(event) {
    // When user correctly answers a question, "Correct!" appears at the bottom of the screen
    if (event.target.id) {
        alert("Correct!");
        event.stopPropagation();
        runningScore += 1
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
    endGame();
};

// Game ends and final score appears
function endGame() {
    finalScore.innerHTML = runningScore + timeLeft;
    return;
}

function renderLastRegistered(){
    // Retrieve last initials and high score from local storage
    var storedInitials = localStorage.getItem('initials');
    var storedScore = localStorage.getItem('score');

    // Set text of 
    hsInitials.textContent = storedInitials;
    hsScore.textContent = storedScore;
}

renderLastRegistered();


// User is asked to input initials
initialsSubmit.addEventListener('click', function(event) {
    event.preventDefault();

    var initialsEntered = document.querySelector("#initials-entered").value;
    var score = document.querySelector("#final-score").value;

    if (initialsEntered === '') {
        alert("Initials cannot be blank");
        endGame();
    }
    else {
    // Initials and score are saved to localStorage
    localStorage.setItem('initials', initialsEntered);
    localStorage.setItem('score', score);

    // High scores will appear
    gameOver.style.display = "none";
    highScores.style.display = "block";
    renderLastRegistered();

    tryAgain.addEventListener('click', function(event){
        highScores.style.display = "none";
        beforeStart.style.display = "block";
    });
    }
});
console.log(localStorage);

function countdown() {

    // Timer is set to count down one second at a time
    var timeInterval = setInterval(function () {


        timerEl.innerHTML =
            timeLeft--;
        if (timeLeft === 0) {
            timerEl.textContent = '0';
            clearInterval(timeInterval);
            // Run gameOver function
            endGame();
        }
    }, 1000);
};

// When timer gets to zero and/or when user answers final question (.length of question array), clearInterval
