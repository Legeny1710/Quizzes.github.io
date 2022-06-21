const quizData = [
    {
        question: "What programming language is used for machine learning?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "c",
    },
    {
        question: "What is 2 x 2 / 2 x 6 / 2?",
        a: "12",
        b: "4",
        c: "2",
        d: "6",
        correct: "d",
    },
    {
        question: "What is 37th president of US?",
        a: "Richard Nixon",
        b: "Joe Biden",
        c: "Donald Trump",
        d: "John F. Kennedy",
        correct: "a",
    },
    {
        question: "What does NFT stand for?",
        a: "Non futuristic fantasy",
        b: "Not Fun Toast",
        c: "Non-fungible Token",
        d: "none of the above",
        correct: "c",
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