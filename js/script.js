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
    {
        question: "¿Qué indica esta señal?",
        img: "https://lh4.googleusercontent.com/proxy/ny_e2l-il4huer4vqLeWDk8P1AdrITNaUAsUW3KyWtZ1RtQaI3Vcm_xcqnRwjWOXgAUg0A4Xu2PkXkS3VoUz7Fn1oxykwWS26VzS4ENaSjLseKUk",
        options: ["Prohibido estacionar", "Prohibido el paso", "Prohibido girar a la derecha"],
        correctAnswer: "Prohibido el paso"
    },
    {
        question: "¿Qué precaución se debe tomar con esta señal?",
        img: "https://www.cartelesdeseguridad.com.ar/images/0000000000VI901106889VI9011.jpg",
        options: ["Curva peligrosa a la izquierda", "Curva peligrosa a la derecha", "Camino resbaladizo"],
        correctAnswer: "Curva peligrosa a la derecha"
    },
    {
        question: "¿Qué indica esta señal?",
        img: "https://assets.entornovial.com/senales/eac866e3-bc45-43cf-85fb-e14c5097ef60/512x512.webp",
        options: ["Altura máxima permitida", "Ancho máximo permitido", "Peso máximo permitido"],
        correctAnswer: "Ancho máximo permitido"
    },
    {
        question: "¿Qué acción se debe tomar con esta señal?",
        img: "https://lh3.googleusercontent.com/proxy/wMV72ndIdUNsP3uUevO3r0J7pe7JBFKVRw-SzcS1wgot_ikiowLXGQUvXRjJLXdtE0a3FQumYXO2HnahY7WSbh5H2MZ03KKYrk2wjpWHnzj90V2U",
        options: ["Estacionamiento permitido", "Prohibido estacionar", "Estacionamiento para personas con discapacidad"],
        correctAnswer: "Prohibido estacionar"
    },
    {
        question: "¿Qué indica esta señal?",
        img: "https://static9.depositphotos.com/1106005/1088/i/450/depositphotos_10885231-stock-photo-hospital-direction-sign.jpg",
        options: ["Hospital cercano", "Área de descanso", "Gasolinera cercana"],
        correctAnswer: "Hospital cercano"
    },
    {
        question: "¿Qué precaución se debe tomar con esta señal?",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spain_traffic_signal_r1.svg/1200px-Spain_traffic_signal_r1.svg.png",
        options: ["Ceda el paso", "Stop", "Velocidad máxima"],
        correctAnswer: "Ceda el paso"
    },
    {
        question: "¿Qué indica esta señal?",
        img: "https://lh5.googleusercontent.com/proxy/zrcWxdUXO5GsTsE-JAAFTg3Z7qulgm_IQn7BI5loMAoSyO8ulZ0Z78NqE-FV6xgFgEeEqnjxS-wWc0XXQcGItC6KhKXakIcQhW1SCxA5mfXV7ew8JTc",
        options: ["No girar a la izquierda", "No girar a la derecha", "No dar vuelta en U"],
        correctAnswer: "No girar a la izquierda"
    },
    {
        question: "¿Qué acción se debe tomar con esta señal?",
        img: "https://lh5.googleusercontent.com/proxy/LE8Z5kK26OMQe2ShrjE4lJ1cUNt_1L921XyY28NznW8Aln20Jsj0w6LPF8c-uDdXtR04iIdnuOUrR5hQb1ZiIGi25kf7pfaXWfBq3pI40ZY__WVaPA",
        options: ["Velocidad mínima", "Velocidad recomendada", "Velocidad máxima"],
        correctAnswer: "Velocidad máxima"
    }
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
