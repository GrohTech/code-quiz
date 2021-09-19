var timerEl = document.querySelector("#countdown");
var startBtn = document.querySelector("#start-button");
var question1 = document.querySelector("#question-1");
var question2 = document.querySelector("#question-2");
var question3 = document.querySelector("#question-3");
var question4 = document.querySelector("#question-4");
var question5 = document.querySelector("#question-5");
var correct = document.querySelector("#correct");
var wrong = document.querySelector("#wrong");

// When user presses start, the timer starts and the first quiz question appears
startBtn.addEventListener("click", startQuiz)

function startQuiz() {
    document.querySelector("#before-start").style.display = "none";
    question1.style.display = "block";
    return;
};
document.querySelector("#q1-answers").addEventListener("click", startQuestion1)

function startQuestion1(){
    // When user correctly answers a question, "Correct!" appears at the bottom of the screen
    if (event.target = document.querySelector("#q1-correct")){
        correct.style.display = "block";
    }
    // When user incorrectly answers a question, "Wrong!" appears at the bottome of the screen and 10 seconds is removed from the timer countdown.
    else {
        wrong.style.display = "block";
        //subtract 10 seconds
    }
    question1.style.display = "none";
    question2.style.display = "block";
    return;
};
document.querySelector("#q2-answers").addEventListener("click", startQuestion2)

function startQuestion2(){
    // When user correctly answers a question, "Correct!" appears at the bottom of the screen
    if (event.target = document.querySelector("#q2-correct")){
        correct.style.display = "block";
    }
    // When user incorrectly answers a question, "Wrong!" appears at the bottome of the screen and 10 seconds is removed from the timer countdown.
    else {
        wrong.style.display = "block";
        //subtract 10 seconds
    }
    question2.style.display = "none";
    question3.style.display = "block";
    return;
};
document.querySelector("#q3-answers").addEventListener("click", startQuestion3)

function startQuestion3(){
    // When user correctly answers a question, "Correct!" appears at the bottom of the screen
    if (event.target = document.querySelector("#q3-correct")){
        correct.style.display = "block";
    }
    // When user incorrectly answers a question, "Wrong!" appears at the bottome of the screen and 10 seconds is removed from the timer countdown.
    else {
        wrong.style.display = "block";
        //subtract 10 seconds
    }
    question3.style.display = "none";
    question4.style.display = "block";
    return;
};
document.querySelector("#q4-answers").addEventListener("click", startQuestion4)

function startQuestion4(){
    // When user correctly answers a question, "Correct!" appears at the bottom of the screen
    if (event.target = document.querySelector("#q4-correct")){
        correct.style.display = "block";
    }
    // When user incorrectly answers a question, "Wrong!" appears at the bottome of the screen and 10 seconds is removed from the timer countdown.
    else {
        wrong.style.display = "block";
        //subtract 10 seconds
    }
    question4.style.display = "none";
    question5.style.display = "block";
    return;
};
document.querySelector("#q5-answers").addEventListener("click", startQuestion5)

function startQuestion5(){
    // When user correctly answers a question, "Correct!" appears at the bottom of the screen
    if (event.target = document.querySelector("#q5-correct")){
        correct.style.display = "block";
    }
    // When user incorrectly answers a question, "Wrong!" appears at the bottome of the screen and 10 seconds is removed from the timer countdown.
    else {
        wrong.style.display = "block";
        //subtract 10 seconds
    }
    //After user answers final question "All done!" appears, as well as the final score and an option to enter initials.
    return;
};




// function countdown() {
//     var timeLeft = 90;

//         // Timer is set to count down one second at a time
//         var timeInterval = setInterval(fuction(){
        
            
//         timerEl.innerHTML = 
//         timeLeft--;
//         if (timeLeft = 0 || ){
//             clearInterval();
//         }

//         }, 1000);
// };

// When timer gets to zero and/or when user answers final question (.length of question array), clearInterval
