const quizData = [
  {
    question: "How old are you?",
    a: "23",
    b: "30",
    c: "26",
    d: "100",
    correct: "c",
  },
  {
    question: "What is the most popupar programming language?",
    a: "java",
    b: "javaScript",
    c: "Python",
    d: "C",
    correct: "b",
  },
  {
    question: "Who is the most influencial people in social media?",
    a: "Elon Musk",
    b: "Andrew Tate",
    c: "Mr. Beast",
    d: "Mark Rober",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hyperlink Markup Language",
    c: "Hypertext Markingup Language",
    d: "Text Markup Language",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1994",
    c: "2010",
    d: "none of them",
    correct: "d",
  },
];

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const atext = document.getElementById("a_text");
const btext = document.getElementById("b_text");
const ctext = document.getElementById("c_text");
const dtext = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselctAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  atext.innerText = currentQuizData.a;
  btext.innerText = currentQuizData.b;
  ctext.innerText = currentQuizData.c;
  dtext.innerText = currentQuizData.d;
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

function deselctAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  console.log(answer);
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> 
       <button onClick="location.reload()">Reload</button>`;
    }
  }
});
