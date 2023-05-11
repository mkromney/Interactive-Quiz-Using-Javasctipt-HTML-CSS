const quizContainer = document.querySelector('.quiz-container');

const questionContainer = document.querySelector('.question-container');

const questionText = document.querySelector('.question');

const options = document.querySelector('.options');
const nextButton = document.querySelector('.next-btn');
const scoreContainer = document.querySelector('.score-container');

const highScoresList = document.querySelector('.high-scores');

const resetButton = document.querySelector('.reset-btn');

const timer = document.querySelector('.timer');

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start-btn');

let timeLeft = 120; // change to desired time limit maybe move it up. 
let score = 0;

startButton.addEventListener('click', () => {

  timer = setInterval(() => {	
    if (timeLeft <= 0) {
      clearInterval(timer);
      alert('Time is up!');
      return;
	}
		timerDisplay.textContent = timeLeft;
    	timeLeft--;
	},1000);
});



// // Example function to check answer and reduce time if wrong
// function checkAnswer(answer) {
//   if (answer !== 'correct') {
//     clearInterval(timer);
//     let timeLeft = parseInt(timerDisplay.textContent) - 5;
//     if (timeLeft < 0) {
//       timeLeft = 0;

	
//     }
//     timerDisplay.textContent = timeLeft;
//     timer = setInterval(() => {
//       if (timeLeft <= 0) {
//         clearInterval(timer);
//         alert('Time is up!');
//         return;
//       }
//       timerDisplay.textContent = timeLeft;
//       timeLeft--;
//     }, 1000);
//   }
// }

function checkAnswer(answer) {
	//if (the persons answer was correct) add one to their score
	// else if the person answered wrong, subtract time from timeLeft
	timeLeft = timeLeft - 5;
	console.log(timeLeft);
}


let currentQuestion = 0;
let timerInterval;
let highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// questions array with objects containing question, options, and answer

const questions = [
	{
		question: 'What is the capital of Israel?',
		options: ['Tel Aviv', 'Berlin', 'Madrid', 'Rome'],
		answer: 0
	},
	{
		question: 'What is the Capital of Germany?',
    	options: ['Ber;om', 'Paris', 'Madrid', 'Rome'],
    	answer: 1
 	},
	 {
		question: 'What is the Capital of USA?',
    	options: ['Wash. D.C.', 'Berlin', 'Madrid', 'Rome'],
    	answer: 1
 	},
	{
		question: 'What is the Capital of Italy?',
    	options: ['Rome', 'Berlin', 'Madrid', 'Rome'],
    	answer: 1
 	},
	{
		question: 'What is the Capital of Sweden?',
    	options: ['Helsinki', 'Berlin', 'Madrid', 'Rome'],
    	answer: 1
 	},
	{
		question: 'What is the Capital of Utah?',
    	options: ['Salt Lake City', 'Berlin', 'Madrid', 'Rome'],
    	answer: 1
 	}]

questionText.textContent = questions[0].question;