// Variables from HTML
var quizContainer = document.querySelector("#quizContainer");
var startBtn = document.querySelector("#startBtn");
var questionsDis = document.querySelector("#questionsDis");
var countDown = document.querySelector("#countDown");
var currentQ = document.querySelector("#currentQ");
var options = document.querySelector("#options");
var results = document.querySelector("#results");
var scoreScreen = document.querySelector("#scoreScreen");
var finalScore = document.querySelector("#finalScore");
var highScores = document.querySelector("#highScores");
var initial = document.querySelector("#initial");
var submitInitial = document.querySelector("#submitInitial");
var highScoreList = document.querySelector("#highScoreList");

var quiz = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: ["strings", "booleans", "alerts", "numbers"],
        correct: "alerts"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: ["<js></js>", "<javascript></javascript>",
            "<script></script>", "<scripting></scripting>"],
        correct: "<script></script>"
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        answers: ['alert("Hello World");', 'alertBox("Hello World");',
            'msg("Hello World");', 'msgBox("Hello World");'],
        correct: 'alert("Hello World");'
    },
    {
        question: "The external JavaScript file must contain the <script> tag.",
        answers: ["True", "False",],
        correct: "True"
    },
    {
        question: "What is the HTML tag under which one can write the JavaScript code?",
        answers: ["javascript", "scripted", "script", "js"],
        correct: "script"
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: ["function = myFunction()", "function:myFunction()",
            "function myFunction()"],
        correct: "function myFunction()"
    },
    {
        question: "How do you write an IF statement in JavaScript?",
        answers: ["if i = 5 then", "if i == 5 then", "if i = 5", "if (i == 5)"],
        correct: "if (i == 5)"
    },
    {
        question: "How does a FOR loop start?",
        answers: ["for (i = 0; i <= 5; i++)", "for i = 1 to 5",
            "for (i <= 5; i++)", "for (i = 0; i <= 5)"],
        correct: "for (i = 0; i <= 5; i++)"
    },
];

var secondsRemaining = 120;
var scores = 0;
var timerInterval = "";

// 1)
startBtn.addEventListener("click", function () {
    startBtn.style.display = "none";
    quizContainer.style.display = "none";
    renderQuestion();
    questionsDis.style.display = "block";

    timerInterval = setInterval(function () {
        secondsRemaining--;

        if (secondsRemaining <= 0) {
            clearInterval(timerInterval);
            alert("Oops! Time out");
            timeOver();
        }
        countDown.textContent = secondsRemaining + "sec";
    }, 1000);
})

var lastQuestion = quiz.length - 1;
var currentQuestion = 0;
var allowSelection = false;

// 2)
function renderQuestion() {
    allowSelection = true;
    // Clear the list element
    options.innerHTML = "";
    results.innerHTML = "";
    currentQ.textContent = quiz[currentQuestion].question;

    for (var i = 0; i < quiz[currentQuestion].answers.length; i++) {
        var answer = quiz[currentQuestion].answers[i]

        var li = document.createElement("li");
        var button = document.createElement("button");
        button.classList.add("btn");
        button.style.border = "solid #072050";
        button.textContent = answer;
        li.appendChild(button);
        options.appendChild(li);
    }
};

// 3)
options.addEventListener("click", function (event) {
    if (allowSelection === true) {
        var userChoice = event.target.textContent;

        if (userChoice === quiz[currentQuestion].correct) {
            scores++;
            results.textContent = "Correct! Good Job!";
            results.style.color = "#3eda8c";
        } else {
            results.textContent = "Wrong!!";
            secondsRemaining = secondsRemaining - 5;
            countDown.textContent = secondsRemaining + "s";
            results.style.color = "#da3e3e";
        } if (currentQuestion < lastQuestion) {
            currentQuestion++;
            setTimeout(renderQuestion, 1000);
        } else {
            clearInterval(timerInterval);
            timeOver();
        }
    }
    allowSelection = false;
});

// 4)
function timeOver() {
    questionsDis.style.display = "none";
    scoreScreen.style.display = "block";
    finalScore.textContent = scores;
    finalScore.style.color = "#ec1515";
};



var highscores = [];
var storedHighscores = JSON.parse(localStorage.getItem("highscores"));

// 5)
submitInitial.addEventListener("click", function () {
    highScores.style.display = "block";
    scoreScreen.style.display = "none";
    localStorage.setItem("scores", finalScore);
    localStorage.setItem("initials", initial.value);
});

