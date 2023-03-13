let isPlaying = false;
let problem;
let answerInput;
let timer;

// Set up DOM elements
const timeLeftElement = document.querySelector('.time-left');
const scoreElement = document.querySelector('.score');
const problemElement = document.querySelector('.problem');
const answerInputElement = document.querySelector('.answer-input');
const submitButtonElement = document.querySelector('.submit-button');
const startGameButtonElement = document.querySelector('.start-game-button');
const gameOverElement = document.querySelector('.game-over');
const playAgainButtonElement = document.querySelector('.play-again-button');

// Set up event listeners
submitButtonElement.addEventListener('click', submitAnswer);
answerInputElement.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
    submitAnswer();
  }
});
startGameButtonElement.addEventListener('click', startGame);
playAgainButtonElement.addEventListener('click', startGame);

// Start the game
function startGame() {
  isPlaying = true;
  timeLeft = 60;
  score = 0;
  problemElement.innerHTML = generateProblem();
  answerInputElement.value = '';
  updateScoreAndTime();
  gameOverElement.style.display = 'none';
  startTimer();
}

// Generate a random math problem
function generateProblem() {
  const operators = ['+', '-', '*', '/'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  let num1 = Math.floor(Math.random() * 100) + 1;
  let num2 = Math.floor(Math.random() * 100) + 1;
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      num1 = num1 * num2;
      result = num1 / num2;
      break;
  }
  return `${num1} ${operator} ${num2} = `;
}

// Submit the answer
function submitAnswer() {
  if (!isPlaying) return;
  const answer = Number(answerInputElement.value);
  const correctAnswer = eval(problemElement.innerHTML.slice(0, -2));
  if (answer === correctAnswer) {
    score++;
    problemElement.innerHTML = generateProblem();
    answerInputElement.value = '';
    updateScoreAndTime();
  } else {
    if (score > 0) {
      score--;
    }
    answerInputElement.style.backgroundColor = 'red';
    setTimeout(() => {
      answerInputElement.style.backgroundColor = 'white';
    }, 100);
  }
}

// Update the score and time left
function updateScoreAndTime() {
  scoreElement.innerHTML = score;
  timeLeftElement.innerHTML = timeLeft;
}

// Start the timer
function startTimer() {
  timer = setInterval(function() {
    timeLeft--;
    updateScoreAndTime();
    if (timeLeft === 0) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);
}

// Stop the timer
function stopTimer() {
  clearInterval(timer);
}

// End the game
function endGame() {
  stopTimer();
  isPlaying = false;
  gameOverElement.querySelector('h2').innerHTML = `Game Over! Score: ${score}`;
  gameOverElement.style.display = 'block';
}
