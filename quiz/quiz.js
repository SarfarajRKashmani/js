const startBtn = document.getElementById('start-btn');
const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');
let score = 0;
let timer;

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: 1
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: 3
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
        answer: 0
    },
    {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        answer: 2
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Oxygen", "Gold", "Silver", "Iron"],
        answer: 0
    },
    {
        question: "What is the square root of 64?",
        options: ["6", "7", "8", "9"],
        answer: 2
    },
    {
        question: "In which year did the Titanic sink?",
        options: ["1910", "1912", "1914", "1916"],
        answer: 1
    },
    {
        question: "What is the capital of Japan?",
        options: ["Beijing", "Seoul", "Bangkok", "Tokyo"],
        answer: 3
    },
    {
        question: "Which gas is most abundant in the Earth's atmosphere?",
        options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon Dioxide"],
        answer: 2
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        answer: 2
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Platinum"],
        answer: 2
    },
    {
        question: "Which planet is closest to the Sun?",
        options: ["Venus", "Earth", "Mars", "Mercury"],
        answer: 3
    },
    {
        question: "Who developed the theory of relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"],
        answer: 1
    },
    {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        answer: 2
    },
    {
        question: "Which organ in the human body pumps blood?",
        options: ["Brain", "Liver", "Heart", "Lungs"],
        answer: 2
    },
    {
        question: "How many continents are there on Earth?",
        options: ["5", "6", "7", "8"],
        answer: 2
    },
    {
        question: "Which is the smallest country in the world by area?",
        options: ["Monaco", "Malta", "Vatican City", "San Marino"],
        answer: 2
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "O2", "CO2", "H2"],
        answer: 0
    },
    {
        question: "Who is known as the 'Father of Computers'?",
        options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"],
        answer: 1
    },
    {
        question: "What is the longest river in the world?",
        options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        answer: 1
    },
    {
        question: "Which planet has the most moons?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: 2
    },
    {
        question: "Who discovered penicillin?",
        options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Gregor Mendel"],
        answer: 1
    },
    {
        question: "What is the main ingredient in traditional Japanese miso soup?",
        options: ["Soybeans", "Rice", "Fish", "Chicken"],
        answer: 0
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: 2
    },
    {
        question: "Who was the first President of the United States?",
        options: ["Thomas Jefferson", "John Adams", "Abraham Lincoln", "George Washington"],
        answer: 3
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Gd", "Go"],
        answer: 0
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "Thailand", "Vietnam"],
        answer: 1
    },
    {
        question: "What is the capital of Canada?",
        options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        answer: 2
    },
    {
        question: "What is the tallest mountain in the world?",
        options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
        answer: 2
    },
    {
        question: "Who invented the telephone?",
        options: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Guglielmo Marconi"],
        answer: 2
    },
    {
        question: "What is the most widely spoken language in the world?",
        options: ["English", "Spanish", "Mandarin Chinese", "Hindi"],
        answer: 2
    },
    {
        question: "Which animal is known as the King of the Jungle?",
        options: ["Elephant", "Tiger", "Lion", "Bear"],
        answer: 2
    },
    {
        question: "What is the smallest bone in the human body?",
        options: ["Femur", "Stapes", "Tibia", "Fibula"],
        answer: 1
    },
    {
        question: "Which city hosted the 2016 Summer Olympics?",
        options: ["Beijing", "London", "Tokyo", "Rio de Janeiro"],
        answer: 3
    },
    {
        question: "What is the freezing point of water?",
        options: ["0°C", "32°C", "100°C", "212°C"],
        answer: 0
    },
    {
        question: "Which vitamin is produced when a person is exposed to sunlight?",
        options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        answer: 3
    },
    {
        question: "Who is the author of 'Harry Potter' series?",
        options: ["J.R.R. Tolkien", "George R.R. Martin", "J.K. Rowling", "C.S. Lewis"],
        answer: 2
    },
    {
        question: "Which country gifted the Statue of Liberty to the United States?",
        options: ["France", "Spain", "Italy", "Germany"],
        answer: 0
    },
    {
        question: "What is the main gas found in the air we breathe?",
        options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon Dioxide"],
        answer: 2
    },
    {
        question: "What is the capital of Germany?",
        options: ["Munich", "Frankfurt", "Berlin", "Hamburg"],
        answer: 2
    },
    {
        question: "Who painted the ceiling of the Sistine Chapel?",
        options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"],
        answer: 1
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        answer: 1
    },
    {
        question: "What is the longest bone in the human body?",
        options: ["Humerus", "Fibula", "Tibia", "Femur"],
        answer: 3
    },
    {
        question: "Which planet is known for its rings?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: 3
    },
    {
        question: "Who is the Greek god of the sea?",
        options: ["Zeus", "Hades", "Poseidon", "Ares"],
        answer: 2
    },
    {
        question: "What is the capital of Italy?",
        options: ["Milan", "Venice", "Rome", "Florence"],
        answer: 2
    },
    {
        question: "What is the currency of the United Kingdom?",
        options: ["Euro", "Pound Sterling", "Dollar", "Yen"],
        answer: 1
    },
];


startBtn.addEventListener('click', startExam);

function startExam() {
    startBtn.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    loadQuestion(0);
    startTimer(30 * 60); 
// for web cam
    // =========================XXX======================
    const webcamele=document.getElementById("webcam")
const canvasele=document.getElementById("canvas")
const webcam = new Webcam(webcamele,"user",canvasele);
webcam.start();
function takeAPicture(){
    let picture=webcam.snap();
    document.querySelector("a").href=picture;
}
// =========================XXX======================
}
// disable right click
document.addEventListener("contextmenu",(e)=>{
    e.preventDefault();
    alert("Access Denied")
})
// for disable copy paste
// =========================%%%======================
function noMenu() {
    return false;
  }
  function disableCopyPaste(elm) {
    // Disable cut/copy/paste key events
    elm.onkeydown = interceptKeys
    // Disable right click events
    elm.oncontextmenu = function() {
      return false
    }
  }
  function interceptKeys(evt) {
    evt = evt||window.event // IE support
    var c = evt.keyCode
    var ctrlDown = evt.ctrlKey||evt.metaKey // Mac support
    // Check for Alt+Gr (http://en.wikipedia.org/wiki/AltGr_key)
    if (ctrlDown && evt.altKey) return true
    // Check for ctrl+c, v and x
    else if (ctrlDown && c==67) return false // c
    else if (ctrlDown && c==86) return false // v
    else if (ctrlDown && c==88) return false // x
    // Otherwise allow
    return true
  }
  // =========================%%%======================


function loadQuestion(index) {
    questionContainer.innerHTML = "";
    if (index >= questions.length) {
        finishExam();
        return;
    }
    const q = questions[index];
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.innerText = q.question;
    questionContainer.appendChild(questionElement);

    const optionsElement = document.createElement('div');
    optionsElement.classList.add('options');
    q.options.forEach((option, i) => {
        const btn = document.createElement('button');
        btn.innerText = option;
        btn.addEventListener('click', () => checkAnswer(i, q.answer, index));
        optionsElement.appendChild(btn);
    });
    questionContainer.appendChild(optionsElement);
}

function checkAnswer(selected, correct, index) {
    const buttons = document.querySelectorAll('.options button');
    if (selected === correct) {
        buttons[selected].classList.add('correct');
        score++;
    } else {
        buttons[selected].classList.add('incorrect');
        buttons[correct].classList.add('correct');
    }
    setTimeout(() => loadQuestion(index + 1), 1000);
}

function finishExam() {
    quizContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    scoreElement.innerText = `${score} / ${questions.length}`;
}

function startTimer(duration) {
    let time = duration;
    timer = setInterval(() => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        timerElement.innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        time--;
        if (time < 0) {
            clearInterval(timer);
            finishExam();
        }
    }, 1000);
}
