// Define variables
let score = 0;
let questionCounter = 0;

// Start the game when the Start button is clicked
const startButton = document.getElementById("Start");
startButton.onclick = function() {
  generateQuestion();
}

function generateQuestion() {
    // Increment the question counter
    questionCounter++;
  
    // Generate a random number between 1 and 3 to determine the type of question
    const questionType = Math.floor(Math.random() * 3) + 1;
  
    let questionText, answer;
    
    if (questionType === 1) { // To find radius when circumference is given
      // Generate a random circumference value between 1 and 100
      const circumference = Math.floor(Math.random() * 100) + 1;
      // Calculate the radius based on the circumference
      answer = circumference / (2 * Math.PI);
      // Round the answer to two decimal places
      answer = answer.toFixed(2);
      // Set the question text
      questionText = `Question ${questionCounter}: Given the circumference ${circumference}, what is the radius of the circle?`;
    } else if (questionType === 2) { // To find radius when area is given
      // Generate a random area value between 1 and 100
      const area = Math.floor(Math.random() * 100) + 1;
      // Calculate the radius based on the area
      answer = Math.sqrt(area / Math.PI);
      // Round the answer to two decimal places
      answer = answer.toFixed(2);
      // Set the question text
      questionText = `Question ${questionCounter}: Given the area ${area}, what is the radius of the circle?`;

    } 
    else if (questionType === 3) { // To find radius when area is given
        // Generate a random area value between 1 and 100
        const square = Math.floor(Math.random() * 100) + 1;
        // Calculate the radius based on the area
        answer = square*square;
        // Round the answer to two decimal places
        answer = answer.toFixed(2);
        // Set the question text
        questionText = `Question ${questionCounter}: Given the number ${square}, what is the square of the number?`;
    }
    else { // To find area when diameter is given
      // Generate a random diameter value between 1 and 100
      const diameter = Math.floor(Math.random() * 100) + 1;
      // Calculate the area based on the diameter
      answer = (Math.PI / 4) * (diameter ** 2);
      // Round the answer to two decimal places
      answer = answer.toFixed(2);
      // Set the question text
      questionText = `Question ${questionCounter}: Given the diameter ${diameter}, what is the area of the circle?`;
    }
  
    // Display the question
    const questionLabel = document.getElementById("question");
    questionLabel.textContent = questionText;
  
    // Clear the input field
    const inputField = document.querySelector("input");
    inputField.value = "";
  
    // Focus on the input field
    inputField.focus();
  
    // Check the answer when the submit button is clicked
    const submitButton = document.getElementById("submit");
    submitButton.onclick = function() {
      const userAnswer = inputField.value;
  
      // Check if the answer is correct
      if (userAnswer === answer) {
        score++;
        alert("Correct!");
      } else {
        alert(`Incorrect. The correct answer is ${answer}.`);
      }
  
      // Update the score label
      const scoreLabel = document.getElementById("score");
      scoreLabel.textContent = `Score: ${score}`;
  
      // Generate a new question
      generateQuestion();
    }
  }
  
