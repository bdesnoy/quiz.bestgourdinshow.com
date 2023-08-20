// QUESTIONS
// Tyler this is where you'll edit the questions
// to add images : upload the images to the folder
// in the review thing at the bottom put the images in: imageURL = "pics/looser.jpg";
// when you're all done, hit commit changes and text brian

const characters = ["Gourdja", "Frances", "Gourd King", "Robo Gourd", "Urp"];

const questions = [
  {
    "question": "What is your Ideal First Date?",
    "answer1": "Drinks and then going back to my place ;) ",
    "answer1CharacterIndex": 0,
    "answer2": "Salsa Dancing",
    "answer2CharacterIndex": 1,
    "answer3": "Mock Plebeians Together",
    "answer3CharacterIndex": 2,
    "answer4": "Watch the ball machine at the Museum of Science",
    "answer4CharacterIndex": 3,
    "answer5": "Ride a motorcycle into a Fire",
    "answer5CharacterIndex": 4
  },
  {
    "question": "Which of these is your favorite Actor?",
    "answer1": "Channing Tatum",
    "answer1CharacterIndex": 0,
    "answer2": "Patrick Swayze",
    "answer2CharacterIndex": 1,
    "answer3": "Peter Dinklage",
    "answer3haracterIndex": 2,
    "answer4": "Arnold Schwartzenager",
    "answer4CharacterIndex": 3,
    "answer5": "Bruce Lee",
    "answer5CharacterIndex": 4
  },
  {
    "question":
      "What is your goto drink?",
    "answer1": "Whatever you're drinking ",
    "answer1CharacterIndex": 0,
    "answer2": "Lemonade",
    "answer2CharacterIndex": 1,
    "answer3": "Fruit of the Vine",
    "answer3CharacterIndex": 2,
    "answer4": "Anything But Water",
    "answer4CharacterIndex": 3,
    "answer5": "Mountain Dew",
    "answer5CharacterIndex": 4
  },
  {
    "question": "What's your favorite part of Best Gourd in Show?",
    "answer1": "Seeing everyone dressed up, looking good",
    "answer1CharacterIndex": 0,
    "answer2": "Sharing in Communal Laughter",
    "answer2CharacterIndex": 1,
    "answer3": "Admiring the Artistic talent",
    "answer3CharacterIndex": 2,
    "answer4": "The Prop Bets",
    "answer4CharacterIndex": 3,
    "answer5": "The Stunts",
    "answer5CharacterIndex": 4,
  },
  {
    "question": "If you could add one thing to the BGIS experience, it would be:",
    "answer1": "Speed Dating with the Submitters",
    "answer1CharacterIndex": 0,
    "answer2": "A Dance Party",
    "answer2CharacterIndex": 1,
    "answer3": "Turkey Drumsticks",
    "answer3CharacterIndex": 2,
    "answer4": "Linear Regression Models",
    "answer4CharacterIndex": 3,
    "answer5": "Pyrotechnics",
    "answer5CharacterIndex": 4
  }
]


let currentQuestion = 0;
var score = [0, 0, 0, 0, 0];
let selectedAnswersData = [];
const totalQuestions =questions.length;

const container = document.querySelector('.quiz-container');
const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');
const option5 = document.querySelector('.option5');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const restartButton = document.querySelector('.restart');
const result = document.querySelector('.result');

//Function to generate question 
function generateQuestions (index) {
    //Select each question by passing it a particular index
    const question = questions[index];
    const option1Total = questions[index].answer1CharacterIndex;
    const option2Total = questions[index].answer2CharacterIndex;
    const option3Total = questions[index].answer3CharacterIndex;
    const option4Total = questions[index].answer4CharacterIndex;
    const option5Total = questions[index].answer5CharacterIndex;
    //Populate html elements 
    questionEl.innerHTML = `${index + 1}. ${question.question}`
    option1.setAttribute('data-total', `${option1Total}`);
    option2.setAttribute('data-total', `${option2Total}`);
    option3.setAttribute('data-total', `${option3Total}`);
    option4.setAttribute('data-total', `${option4Total}`);
    option5.setAttribute('data-total', `${option5Total}`);
    option1.innerHTML = `${question.answer1}`
    option2.innerHTML = `${question.answer2}`
    option3.innerHTML = `${question.answer3}`
    option4.innerHTML = `${question.answer4}`
    option5.innerHTML = `${question.answer5}`
}


function loadNextQuestion () {
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    //Check if there is a radio input checked
    if(!selectedOption) {
        alert('Please select your answer!');
        return;
    }
    //Get value of selected radio
    const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));

    ////Add the answer score to the score array
    score[answerScore] += 1;

    selectedAnswersData.push()

    //Finally we incement the current question number ( to be used as the index for each array)
    currentQuestion++;

        //once finished clear checked
        selectedOption.checked = false;
    //If quiz is on the final question
    if(currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Finish';
    }
    //If the quiz is finished then we hide the questions container and show the results 
    if(currentQuestion == totalQuestions) {
        container.style.display = 'none';

        let maxScoreIndex = score.indexOf(Math.max(...score));
      
        var yourGourdType;
        var imageURL;
        if (maxScoreIndex == 4) {
          yourGourdType = "Urp";
          imageURL = "pics/Urp.jpg";
        } else if (maxScoreIndex == 3) {
          yourGourdType = "Robo Gourd";
          imageURL = "pics/RoboGourd.jpg";
        } else if (maxScoreIndex == 2) {
          yourGourdType = "Gourd King";
          imageURL = "pics/Gourd_King.jpg";
        } else if (maxScoreIndex == 1) {
          yourGourdType = "Frances";
          imageURL = "pics/Frances.jpg";
        } else {
          yourGourdType = "Gourdja";
          imageURL = "pics/Gourdja.jpg";
        }
      
        result.innerHTML =
         `<h1 class="final-score">${yourGourdType}</h1>
         <div class="summary" style="text-align: center;">
            <img src=${imageURL} width="100%"; text-align:center>
        </div>
        <button class="restart">Restart Quiz</button>
         `;
        return;
    }
    generateQuestions(currentQuestion);
}

//Function to load previous question
function loadPreviousQuestion() {
    //Decrement quentions index
    currentQuestion--;
    //remove last array value;
    score.pop();
    //Generate the question
    generateQuestions(currentQuestion);
}

//Fuction to reset and restart the quiz;
function restartQuiz(e) {
    if(e.target.matches('button')) {
    //reset array index and score
    currentQuestion = 0;
    score = [];
    //Reload quiz to the start
    location.reload();
    }

}


generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click',loadPreviousQuestion);
result.addEventListener('click',restartQuiz);
