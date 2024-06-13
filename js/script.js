const quizData = [
    {
        question: "¿Qué significa esta señal?",
        img: "https://images.vexels.com/media/users/3/163004/isolated/preview/ce4cb63d6ad47c7b1e41cc4b4611c1a9-plano-de-advertencia-de-rombo-peatonal-de-cruce.png",
        options: ["Prohibido el paso", "Precaución, peatones cruzando", "Sentido único"],
        correctAnswer: "Precaución, peatones cruzando"
    },
    {
        question: "¿Qué acción se debe tomar con esta señal?",
        img:"https://lh4.googleusercontent.com/proxy/PMBMiJSr-JLk7qCiXE3eaBTnVnswoK-rQiD1IjRPCNqug_t-bBE2umcGaozarE23-oUVQwCSnDdl0E0glS4jrpaltsCJLwaeEqYLx9InGSeXXfij",
        options: ["Dar vuelta a la derecha", "Dar vuelta a la izquierda", "Contramano"],
        correctAnswer: "Contramano"
    },
   
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const imageElement = document.getElementById('img');
const optionsElement = document.getElementById('options');
const nextBtn = document.getElementById('nextBtn');
const resultElement = document.getElementById('result');


function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;

    


    optionsElement.innerHTML = '';
   
    

    currentQuizData.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option-btn');
        button.addEventListener('click', selectOption);
        imageElement.src = currentQuizData.img;
        optionsElement.appendChild(button);
    });
    nextBtn.style.display = 'none';
    resultElement.innerText = '';
}

function selectOption(e) {
    const selectedOption = e.target.innerText;
    const currentQuizData = quizData[currentQuestion];
    if (selectedOption === currentQuizData.correctAnswer) {
        score++;
    }
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach(button => {
        button.disabled = true;
        if (button.innerText === currentQuizData.correctAnswer) {
            button.style.backgroundColor = '#28a745';
        } else {
            button.style.backgroundColor = '#dc3545';
        }
    });
    nextBtn.style.display = 'block';
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.innerText = `Tu puntuación final es ${score} de ${quizData.length}`;
    optionsElement.innerHTML = '';
    nextBtn.style.display = 'none';
    resultElement.innerText = '';
    imageElement.style.display = "none";
    optionsElement.style.display = "none";
    setTimeout(function() {
        alert('¡Gracias por jugar! ¿Quieres jugar de nuevo?');
        window.location.reload();
    }, 500);
}

nextBtn.addEventListener('click', nextQuestion);

loadQuestion();
