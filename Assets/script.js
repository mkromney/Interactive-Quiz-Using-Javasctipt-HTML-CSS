// Gets the required elements from the html classes and buttons. //
const timerElement = document.getElementById('timer');
const startButton = document.getElementById('start-btn');
const questionContainer = document.querySelector('.question-container');
const questionElement = document.querySelector('.question');
const optionsElement = document.querySelector('.options');
const nextButton = document.querySelector('.next-btn');

// Hides the question container before the quiz starts. //
questionContainer.style.display = 'none';

// Sets the  time and current question. // 
let timeRemaining = 120;
let currentQuestionIndex = 0;

// List of questions for the quiz, their options and answer keys. //
let questions = [
  {
    question: 'What is the capital of Israel?',
    options: ['Tel Aviv', 'Berlin', 'Madrid', 'Rome'],
    answer: 0
  },
  {
    question: 'What is the Capital of Germany?',
    options: ['Berlin', 'Paris', 'Madrid', 'Rome'],
    answer: 0
  },
  {
    question: 'What is the Capital of USA?',
    options: ['Wash. D.C.', 'Berlin', 'Madrid', 'Rome'],
    answer: 0
  },
  {
    question: 'What is the Capital of Italy?',
    options: ['Rome', 'Berlin', 'Madrid', 'Rome'],
    answer: 1
  },
  {
    question: 'What is the Capital of Sweden?',
    options: ['Helsinki', 'Stockholm', 'Madrid', 'Rome'],
    answer: 1
  }
];

// Defines the update the timer element. //
function updateTimer() {
  timerElement.textContent = timeRemaining;
}

// Displays the current question and its options. //
function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  optionsElement.innerHTML = '';
  
	// For each question, the list that includes the radio class of options is filled. //
  currentQuestion.options.forEach((option, index) => {
    const liElement = document.createElement('li');
    const inputElement = document.createElement('input');
    const spanElement = document.createElement('span');
    
    inputElement.type = 'radio';
    inputElement.name = 'answer';
    inputElement.value = index;
    spanElement.textContent = option;
    
		// Appends each answer option to the quiz container. //
    liElement.appendChild(inputElement);
    liElement.appendChild(spanElement);
    optionsElement.appendChild(liElement);
  });
}

// Function that handles the begin event of the countdown. //
function startCountdown() {
  // Hides the start button that was hidden. //
  startButton.style.display = 'none';
  
  // Shows the question container that was hidden. //
  questionContainer.style.display = 'block';
  
  // Displays the current question as defined in the variable above. //
  displayQuestion();
  
  // Starts the timer at 120. //
  updateTimer();
  
  // Time is counted downward. //
  let countdownInterval = setInterval(() => {
    timeRemaining--;
    updateTimer();
    
    // Check if the timer has reached 0
    if (timeRemaining <= 0) {
      clearInterval(countdownInterval);
      alert('Time is up!');
    }
  }, 1000);
}

// Handle user's answer selection
function handleAnswerSelection() {
  const currentQuestion = questions[currentQuestionIndex];
  const selectedOption = Number(document.querySelector('input[name="answer"]:checked').value);
  
// This part of the code is also not working. //	
  if (selectedOption === currentQuestion.answer) {
    // If correct answer selected, do nothing. //
  } else {
    // If incorrect answer selected, subtract time. //
    timeRemaining -= 10;
    updateTimer();
  }
}

// Handles the "next" question button click. //
function handleNextQuestion() {
  // Checks to see if an answer has been chosen. This part of the code does not seem to be working properly. //
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  if (!selectedOption) {
    // When no answer is chosen, displays alert: //
    alert('Please select an answer before proceeding to the next question.');
    return;
  }
  
  // Allows the questions to be presented in sequential order. //
  currentQuestionIndex++;
  
  // Checks to see if all questions have been answered. //
  if (currentQuestionIndex >= questions.length) {
    clearInterval(countdownInterval);
    alert('Quiz completed!');
    displayHighScores();
    return;
  }
  
  // Displays the next question in the list. //
  displayQuestion();
}

// Adds event listeners to the buttons on the page. //
startButton.addEventListener('click', startCountdown);
nextButton.addEventListener('click', handleNextQuestion);
optionsElement.addEventListener('change', handleAnswerSelection);
