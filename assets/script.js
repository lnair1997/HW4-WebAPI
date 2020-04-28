var mainContainer= document.querySelectorAll(".container-md");
var content= document.getElementById("content");
var startBtn= document.getElementById("start");

var score;
var time;
var quizTime;
var highScores=[];
var quiz = [
    {
        question: "Which of the following is correct about JavaScript?",
        1: "JavaScript is a lightweight, interpreted programming language",
        2: "JavaScript has object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages",
        3: "The general-purpose core of the language has been embedded in Netscape, Internet Explorer, and other web browsers",
        4: "All of the above",
        correct: 4
    },
    {
        question:
            "Which of the following type of variable is visible everywhere in your JavaScript code?",
        1: "global variable",
        2: "local variable",
        3: "Both of the above",
        4: "None of the above",
        correct: 1
    },
    {
        question:
            "Which built-in method combines the text of two strings and returns a new string?",
        1: "append",
        2: "concat",
        3: "attach",
        4: "None of the above",
        correct: 2
    },
    {
        question:
            "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
        1: "last",
        2: "put",
        3: "push",
        4: "None of the above",
        correct: 3
    },
    {
        question:
            "Which built-in method returns the calling string value converted to lower case?",
        1: "toLowerCase",
        2: "toLower",
        3: "changeCase(case)",
        4: "None of the above",
        correct: 1
    },
    {
        question:
            "Which of the following function of Array object extracts a section of an array and returns a new array?",
        1: "reverse()",
        2: "shift()",
        3: "slice()",
        4: "some()",
        correct: 3
    }
];

startBtn.addEventListener("click", function() {
    // score at zero
    score= 0;
    // timer to 60 sec
    time= 60;

    var timer= document.createElement("h2");
    timer.setAttribute("id", "timer");
    timer.textContent = "Time remaining: ";
    document.getElementById("content").appendChild(timer);
    
    var span= document.createElement("span");
    span.setAttribute("id", "countdown");
    span.textContent = time;
    document.getElementById("timer").appendChild(span);

    quizTime = setInterval(function() {
        time--;
        if (time <= 0) {
            clearInterval(quizTime);
            endQuiz();
        }
    })

    
});