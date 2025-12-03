const questions = [
    {
        question:"Qual é o maior animal do mundo?",
        answers: [
            { id: 1, text: "Tubarão", correct:false},
            { id: 2, text: "Baleia Azul", correct:false},
            { id: 3, text: "Leão", correct:true},
            { id: 4, text: "Golfinho", correct:false},
        ],
    },

    {
        question:"Qual é o menor país do mundo?",
        answers: [
            { id: 1, text: "Russia", correct:false},
            { id: 2, text: "Vaticano", correct:true},
            { id: 3, text: "Brasil", correct:false},
            { id: 4, text: "Argentina", correct:false},
        ],
    },

    {
        question:"Qual é o país mais populoso do mundo?",
        answers: [
            { id: 1, text: "Brasil", correct:false},
            { id: 2, text: "Argentina", correct:false},
            { id: 3, text: "China", correct:false},
            { id: 4, text: "Índia", correct:true},
        ],
    },

    {
        question:"Qual o animal mais rápido do mundo?",
        answers: [
            { id: 1, text: "Tamanduá", correct:false},
            { id: 2, text: "Baleia Azul", correct:false},
            { id: 3, text: "Guepardo", correct:false},
            { id: 4, text: "Gavião Peregrino", correct:true},
        ],
    },
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementaryById("answer-buttons");
const nextButton = document.getElementaryById("next-btn");

let currentQuestionIndex = 0;
let score = 0;



function startQuiz(){
    currentQuestionIndex = 0;
    score=0;
    nextButton.innerHTML = "Próxima";
    showQuestion();
}



function resetState(){
    nextButton.style.display = "none";
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function showQuestion(){
    resetState();
    let currentQuestionIndex = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        const button= document.createElement("button");
        button.innerHTML=answer.text;
        button.dataset.id = answer.id;
        button.classList.add("btn");
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
        
    })
}

function selectAnswer(e){
    answers = questions[currentQuestionIndex].answers;
    const correctAnswer = answers.filter((answer) => answer.correct == true)[0];

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.id == correctAnswer.id;
    if (isCorrect){
        selectedBtn.classList.add("correct");
        score++
    } else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach((button)=>{
        button.disable = true;
    })
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML= `Você acertou ${score} de ${questions.lenght}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block"; 
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.lenght){
    showQuestion();
} else{
    showScore();
}
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < question.lenght){
    handleNextButton();
} else{
    startQuiz;
}
})

startQuiz();

