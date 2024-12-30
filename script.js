// check the connection file
console.log('Js ok!');

const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            { text: "&lt;scripting&gt;", correct: false },
            { text: "&lt;javascript&gt;", correct: false },
            { text: "&lt;js&gt;", correct: false },
            { text: "&lt;script&gt;", correct: true },
        ]
    },
    {
        question: "What is the correct syntax for referring to an external script called 'script.js'?",
        answers: [
            { text: "&lt;script href='script.js'&gt;", correct: false },
            { text: "&lt;script name='script.js'&gt;", correct: false },
            { text: "&lt;script src='script.js'&gt;", correct: true },
            { text: "&lt;script file='script.js'&gt;", correct: false },
        ]
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        answers: [
            { text: "&lt;style&gt;", correct: true },
            { text: "&lt;css&gt;", correct: false },
            { text: "&lt;script&gt;", correct: false },
            { text: "&lt;link&gt;", correct: false },
        ]
    },
    {
        question: "Which CSS property is used to change the background color?",
        answers: [
            { text: "background-color", correct: true },
            { text: "color", correct: false },
            { text: "bgcolor", correct: false },
            { text: "background", correct: false },
        ]
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: [
            { text: "function = myFunction()", correct: false },
            { text: "function myFunction()", correct: true },
            { text: "function:myFunction()", correct: false },
            { text: "create function myFunction()", correct: false },
        ]
    },
    {
        question: "How do you call a function named 'myFunction'?",
        answers: [
            { text: "call myFunction()", correct: false },
            { text: "myFunction()", correct: true },
            { text: "call function myFunction()", correct: false },
            { text: "Call.myFunction()", correct: false },
        ]
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        answers: [
            { text: "fgcolor", correct: false },
            { text: "text-color", correct: false },
            { text: "color", correct: true },
            { text: "font-color", correct: false },
        ]
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        answers: [
            { text: "styles", correct: false },
            { text: "class", correct: false },
            { text: "style", correct: true },
            { text: "font", correct: false },
        ]
    },
    {
        question: "How do you add a comment in JavaScript?",
        answers: [
            { text: "&lt;!-- This is a comment --&gt;", correct: false },
            { text: "// This is a comment", correct: true },
            { text: "' This is a comment", correct: false },
            { text: "/* This is a comment */", correct: false },
        ]
    },
    {
        question: "Which property is used to change the font of an element in CSS?",
        answers: [
            { text: "font-family", correct: true },
            { text: "font-style", correct: false },
            { text: "font-weight", correct: false },
            { text: "font", correct: false },
        ]
    },
    {
        question: "How do you insert a comment in a CSS file?",
        answers: [
            { text: "// This is a comment", correct: false },
            { text: "/* This is a comment */", correct: true },
            { text: "&lt;!-- This is a comment --&gt;", correct: false },
            { text: "' This is a comment", correct: false },
        ]
    },
    {
        question: "What is the default value of the position property in CSS?",
        answers: [
            { text: "relative", correct: false },
            { text: "absolute", correct: false },
            { text: "fixed", correct: false },
            { text: "static", correct: true },
        ]
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        answers: [
            { text: "onchange", correct: false },
            { text: "onmouseover", correct: false },
            { text: "onclick", correct: true },
            { text: "onmouseclick", correct: false },
        ]
    },
    {
        question: "What does CSS stand for?",
        answers: [
            { text: "Creative Style Sheets", correct: false },
            { text: "Cascading Style Sheets", correct: true },
            { text: "Computer Style Sheets", correct: false },
            { text: "Colorful Style Sheets", correct: false },
        ]
    },
    {
        question: "What is the correct HTML for creating a hyperlink?",
        answers: [
            { text: "&lt;a url='url'&gt;link&lt;/a&gt;", correct: false },
            { text: "&lt;a href='url'&gt;link&lt;/a&gt;", correct: true },
            { text: "&lt;a&gt;url&lt;/a&gt;", correct: false },
            { text: "&lt;link href='url'&gt;link&lt;/link&gt;", correct: false },
        ]
    },
    {
        question: "How can you make a numbered list in HTML?",
        answers: [
            { text: "&lt;ol&gt;", correct: true },
            { text: "&lt;ul&gt;", correct: false },
            { text: "&lt;dl&gt;", correct: false },
            { text: "&lt;list&gt;", correct: false },
        ]
    },
    {
        question: "How do you declare a JavaScript variable?",
        answers: [
            { text: "variable carName;", correct: false },
            { text: "v carName;", correct: false },
            { text: "var carName;", correct: true },
            { text: "declare carName;", correct: false },
        ]
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        answers: [
            { text: "x", correct: false },
            { text: "=", correct: true },
            { text: "-", correct: false },
            { text: "*", correct: false },
        ]
    },
    {
        question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        answers: [
            { text: "title", correct: false },
            { text: "src", correct: false },
            { text: "alt", correct: true },
            { text: "longdesc", correct: false },
        ]
    },
    {
        question: "What is the correct CSS syntax to make all the &lt;p&gt; elements bold?",
        answers: [
            { text: "p {font-weight:bold;}", correct: true },
            { text: "&lt;p style='font-size:bold;'&gt;", correct: false },
            { text: "&lt;p style='text-size:bold;'&gt;", correct: false },
            { text: "p {text-weight:bold;}", correct: false },
        ]
    },
    {
        question: "How do you start a for loop in JavaScript?",
        answers: [
            { text: "for (i = 0; i &lt;= 5; i++)", correct: true },
            { text: "for i = 1 to 5", correct: false },
            { text: "for (i &lt;= 5; i++)", correct: false },
            { text: "for (i = 0; i &lt;= 5)", correct: false },
        ]
    },
    {
        question: "How do you write an IF statement in JavaScript?",
        answers: [
            { text: "if i = 5 then", correct: false },
            { text: "if (i == 5)", correct: true },
            { text: "if i == 5 then", correct: false },
            { text: "if i = 5", correct: false },
        ]
    },
    {
        question: "How can you add a comment in HTML?",
        answers: [
            { text: "// This is a comment", correct: false },
            { text: "&lt;!-- This is a comment --&gt;", correct: true },
            { text: "' This is a comment", correct: false },
            { text: "/* This is a comment */", correct: false },
        ]
    },
    {
        question: "Which property is used to control the spacing between lines of text in CSS?",
        answers: [
            { text: "letter-spacing", correct: false },
            { text: "line-height", correct: true },
            { text: "spacing", correct: false },
            { text: "text-spacing", correct: false },
        ]
    },
    {
        question: "What is the correct way to add a background color in CSS?",
        answers: [
            { text: "background: yellow;", correct: true },
            { text: "color: yellow;", correct: false },
            { text: "bgcolor: yellow;", correct: false },
            { text: "background-color: yellow;", correct: true },
        ]
    },
    {
        question: "Which of the following is the correct syntax to display an alert box in JavaScript?",
        answers: [
            { text: "msg('Hello')", correct: false },
            { text: "alertBox('Hello')", correct: false },
            { text: "alert('Hello')", correct: true },
            { text: "msgBox('Hello')", correct: false },
        ]
    },
    {
        question: "How do you make a text italic in CSS?",
        answers: [
            { text: "font-style: italic;", correct: true },
            { text: "font-weight: italic;", correct: false },
            { text: "text-style: italic;", correct: false },
            { text: "font-italic: true;", correct: false },
        ]
    },
    {
        question: "What does the 'href' attribute in HTML specify?",
        answers: [
            { text: "The text of a hyperlink", correct: false },
            { text: "The URL of the page the link goes to", correct: true },
            { text: "The title of a hyperlink", correct: false },
            { text: "The style of a hyperlink", correct: false },
        ]
    },
    {
        question: "Which JavaScript method is used to write into the browser console?",
        answers: [
            { text: "console.log()", correct: true },
            { text: "console.write()", correct: false },
            { text: "print()", correct: false },
            { text: "log.console()", correct: false },
        ]
    },
    {
        question: "How do you select an element with id 'demo' in CSS?",
        answers: [
            { text: "#demo", correct: true },
            { text: ".demo", correct: false },
            { text: "demo", correct: false },
            { text: "*demo", correct: false },
        ]
    },
    {
        question: "Which HTML element is used to specify a footer for a document or section?",
        answers: [
            { text: "&lt;footer&gt;", correct: true },
            { text: "&lt;bottom&gt;", correct: false },
            { text: "&lt;section-footer&gt;", correct: false },
            { text: "&lt;foot&gt;", correct: false },
        ]
    }
];

// take the elements from DOM
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    // display question
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    // display answers
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    })
}

startQuiz();