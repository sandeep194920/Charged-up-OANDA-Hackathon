export const quizStateMachine = {
  currentQuestion: null, // Initialize the current question as null to start

  questions: {
    // Define your questions with unique IDs
    question1: {
      text: "What is the capital of France?",
      answers: [
        {
          text: "Paris",
          nextQuestion: "question2", // ID of the next question if this answer is chosen
        },
        {
          text: "Berlin",
          nextQuestion: "question3",
        },
      ],
    },

    question2: {
      text: "What is the largest planet in our solar system?",
      answers: [
        {
          text: "Jupiter",
          nextQuestion: "question4",
        },
        {
          text: "Mars",
          nextQuestion: "question3",
        },
      ],
    },

    question3: {
      text: "What is the smallest prime number?",
      answers: [
        {
          text: "1",
          nextQuestion: "question5",
        },
        {
          text: "2",
          nextQuestion: "question4",
        },
      ],
    },

    question4: {
      text: "What is the chemical symbol for gold?",
      answers: [
        {
          text: "Au",
          nextQuestion: "question5",
        },
        {
          text: "Ag",
          nextQuestion: "question6",
        },
      ],
    },

    question5: {
      text: "Congratulations! You've completed the quiz.",
      answers: [],
    },

    question6: {
      text: "Oops! Wrong answer. You've reached the end of the quiz.",
      answers: [],
    },
  },
};
