const quizData = [
    {
      question: 'What is the capital of France?',
      answers: [
        { text: 'Berlin', correct: false },
        { text: 'Madrid', correct: false },
        { text: 'Paris', correct: true },
        { text: 'Rome', correct: false }
      ]
    },
    {
      question: 'Which planet is known as the Red Planet?',
      answers: [
        { text: 'Venus', correct: false },
        { text: 'Mars', correct: true },
        { text: 'Jupiter', correct: false },
        { text: 'Saturn', correct: false }
      ]
    },
    // Add more questions as needed
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionContainer = document.getElementById('question-container');
  const answerButtonsContainer = document.getElementById('answer-buttons');
  const nextButton = document.getElementById('next-button');
  const resultContainer = document.getElementById('result-container');
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add('hide');
    resultContainer.innerHTML = '';
    showQuestion();
  }
  
  function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionContainer.innerText = currentQuestion.question;
    resetAnswerButtons();
  
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('btn');
      button.addEventListener('click', () => selectAnswer(answer));
      answerButtonsContainer.appendChild(button);
    });
  }
  
  function resetAnswerButtons() {
    while (answerButtonsContainer.firstChild) {
      answerButtonsContainer.removeChild(answerButtonsContainer.firstChild);
    }
  }
  
  function selectAnswer(selectedAnswer) {
    const correct = selectedAnswer.correct;
    if (correct) {
      score++;
    }
    nextButton.classList.remove('hide');
    resultContainer.innerHTML = correct ? '<p>Correct!</p>' : '<p>Incorrect!</p>';
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      showQuestion();
      nextButton.classList.add('hide');
      resultContainer.innerHTML = '';
    } else {
      showResult();
    }
  }
  
  function showResult() {
    questionContainer.innerText = `You scored ${score} out of ${quizData.length}!`;
    resetAnswerButtons();
    resultContainer.innerHTML = '<p>Quiz completed!</p>';
  }
  