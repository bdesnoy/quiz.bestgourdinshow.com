// QUESTIONS
// Tyler this is where you'll edit the questions
// to add images : upload the images to the folder
// in the review thing at the bottom put the images in: imageURL = "pics/looser.jpg";
// when you're all done, hit commit changes and text brian

const questions = [
  {
    "question": "Ideal First Date",
    "answer1": "Drinks and then going back to my place ;) ",
    "answer1Total": "1",
    "answer2": "Salsa Dancing",
    "answer2Total": "2",
    "answer3": "Mock Plebians Together",
    "answer3Total": "3",
    "answer4": "Watch the ball machine at the Museum of Science",
    "answer4Total": "4",
    "answer5": "Ride a motorcycle into a Fire",
    "answer5Total": "5"
  },
  {
    "question": "Which of these is your favorite Actor?",
    "answer1": "Channing Tatum",
    "answer1Total": "1",
    "answer2": "Patrick Swayze",
    "answer2Total": "2",
    "answer3": "Peter Dinklage",
    "answer3Total": "3",
    "answer4": "Arnold Schwartzenager",
    "answer4Total": "4",
    "answer5": "Bruce Lee",
    "answer5Total": "5"
  },
  {
    "question":
      "What would you like to drink?",
    "answer1": "Whatever you're drinking ",
    "answer1Total": "1",
    "answer2": "Lemonade",
    "answer2Total": "3",
    "answer3": "Fruit of the Vine",
    "answer3Total": "2",
    "answer4": "Anything But Water",
    "answer4Total": "4",
    "answer5": "Mountain Dew",
    "answer5Total": "5"
  },
  {
    "question": "What's your favorite part of Best Gourd in Show?",
    "answer1": "Seeing everyone dressed up, looking good",
    "answer1Total": "1",
    "answer2": "Sharing in Communal Laughter",
    "answer2Total": "2",
    "answer3": "Admiring the Artistic talent",
    "answer3Total": "3",
    "answer4": "The Prop Bets",
    "answer4Total": "4",
    "answer5": "The Stunts",
    "answer5Total": "5"
  },
  {
    "question": "Best Sentence to describe you?",
    "answer1": "You feel superior to other people.",
    "answer1Total": "3",
    "answer2": "You consider yourself more practical than creative.",
    "answer2Total": "2",
    "answer3":
      "Winning a debate matters less to you than making sure no one gets upset.",
    "answer3Total": "1",
    "answer4": "over 40",
    "answer4Total": "4",
    "answer5": "over 50",
    "answer5Total": "5"
  },
  {
    "question":
      "You make plans with a friend and they cancel on you, what do you do?",
    "answer1":
      "Say \"whatever\" and plan a night that'll be GREAT so they don't cancel again.",
    "answer1Total": "3",
    "answer2": "Feel hurt because you were looking forward to tonight.",
    "answer2Total": "2",
    "answer3": "No problem, you kinda wanted to stay home anyway.",
    "answer3Total": "1",
    "answer4": "over 40",
    "answer4Total": "4",
    "answer5": "over 50",
    "answer5Total": "5"
  },
  {
    "question": "Which of the following colours do you like most?",
    "answer1": "Black",
    "answer1Total": "1",
    "answer2": "Yellow or light blue",
    "answer2Total": "2",
    "answer3": "Red or orange",
    "answer3Total": "3",
    "answer4": "over 40",
    "answer4Total": "4",
    "answer5": "over 50",
    "answer5Total": "5"
  }
]


let currentQuestion = 0;
let score = [];
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
    const option1Total = questions[index].answer1Total;
    const option2Total = questions[index].answer2Total;
    const option3Total = questions[index].answer3Total;
    const option4Total = questions[index].answer4Total;
    const option5Total = questions[index].answer5Total;
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
    score.push(answerScore);

    selectedAnswersData.push()
    

    const totalScore = score.reduce((total, currentNum) => total + currentNum);

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
      
        var yourGourdType;
        var imageURL;
        if (totalScore >= 35) {
          yourGourdType = "Squash";
          imageURL = "https://www.southernliving.com/thmb/m5yYV-N0d9LcbpOcrw6quWSjbRE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Squash_001_preview_scale_100_ppi_150_quality_100-e57ac9624ce348adafefcae5577a1fdf.jpg";
        } else if (totalScore >= 30) {
          yourGourdType = "Loofah";
          imageURL = "https://cdn.britannica.com/47/190847-050-BEF036B6/loofah-interior.jpg";
        } else {
          yourGourdType = "Gourdja";
          imageURL = "pics/Gourdja.png";
        }
      
        result.innerHTML =
         `<h1 class="final-score">${yourGourdType}</h1>
         <div class="summary" style="text-align: center;">
            <img src=${imageURL} width="100%">
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
