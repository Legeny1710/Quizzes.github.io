const quizData = [
    {
        question: "When YouTube is launched?",
        a: "2006",
        b: "2007",
        c: "2005",
        d: "2008",
        correct: "c",
    },
    {
        question: "Who played the role of Spider-man in 2012?",
        a: "Andrew Garfield",
        b: "Toby Magiure",
        c: "Tom Holland",
        d: "Tom Hiddleston",
        correct: "a",
    },
    {
        question: "What does NATO stand for?",
        a: "North Atlantic Through Ocean",
        b: "Non Acceptable Tolerance Organisation ",
        c: "It means Nato",
        d: "North Atlantic Treaty Organisation",
        correct: "d",
    },
    {
        question: "Which game was selected as best game of the year in 2017?",
        a: "God of War",
        b: "The Legend of Zelda: Breath of the wild",
        c: "Uncharted",
        d: "The Last of Us",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function backToQuestion() {
    location.reload()
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}



function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">ReTake</button>
                <a href = "index.html"><button class="HomeBtn">Go Home</button> </a>
            `;
        }
    }
});