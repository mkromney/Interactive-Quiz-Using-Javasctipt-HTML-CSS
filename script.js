const quizContainer = document.querySelector('.quiz-container');

const questionContainer = document.querySelector('.question-container');

const questionText = document.querySelector('.question');

const options = document.querySelector('.options');
const nextButton = document.querySelector('.next-btn');
const scoreContainer = document.querySelector('.score-container');

const highScoresList = document.querySelector('.high-scores');

const resetButton = document.querySelector('.reset-btn');

const timer = document.querySelector('.timer');

let currentQuestion = 0;
let score = 0;
let timeLeft = 120;
let timerInterval;
let highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// questions array with objects containing question, options, and answer
const questions = [
	{
		question: 'What is the capital of France?',
		options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
		answer: 0
	},
	{
		question: 'What is the Capital of Germany?',
    options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
    answer: 1
  }]