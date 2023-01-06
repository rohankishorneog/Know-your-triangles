const quizForm = document.querySelector("#quiz-form");
const submitAnswerBtn = document.querySelector("#btn-divZ");
const outputHere = document.querySelector("#output-div");
const correctAnswers = ["90", "right angle", "one right angle" , "isoscales", "40°"];

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for (let value of formResults.values()) {
        if (value === correctAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;

    }
    
    outputHere.innerText = "Your score is " + score;
    console.log( outputHere.innerText);
    event.preventDefault();
}

submitAnswerBtn.addEventListener("click", calculateScore);