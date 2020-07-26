import {
  BEGIN_QUIZ,
  NEXT_QUESTION,
  PREV_QUESTION,
  SET_USER_ANSWER,
  RESET_QUIZ,
  EXIT_QUIZ,
} from "../actions/quiz";

export default function quiz(state = {}, action) {
  switch (action.type) {
    case BEGIN_QUIZ:
      const { deck, cards } = action;
      return {
        id: deck.id,
        answers: deck.questions.map((question) => ({
          questionAnswer: cards[question].answer,
          userAnswer: null,
          questionAnsweredCorrectly: null,
        })),
        currentQuestionIndex: 0,
      };
    case NEXT_QUESTION:
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
      };
    case PREV_QUESTION:
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex - 1,
      };
    case SET_USER_ANSWER:
      const { answer, index } = action;
      return {
        id: state.id,
        answers: state.answers.map((question, idx) => {
          const questionAnswer = state.answers[idx].questionAnswer;
          const userAnswer =
            index === idx ? answer : state.answers[idx].userAnswer;
          const questionAnsweredCorrectly =
            userAnswer === null ? null : questionAnswer === userAnswer;
          return {
            questionAnswer,
            userAnswer,
            questionAnsweredCorrectly,
          };
        }),
        currentQuestionIndex: state.currentQuestionIndex,
      };
    case RESET_QUIZ: {
      const { quiz } = action;
      return {
        id: quiz.id,
        answers: state.answers.map((answer, index) => ({
          questionAnswer: state.answers[index].questionAnswer,
          userAnswer: null,
          questionAnsweredCorrectly: null,
        })),
        currentQuestionIndex: 0,
      };
    }
    case EXIT_QUIZ: {
      return {
        id: null,
        answers: [],
      };
    }
    default:
      return state;
  }
}
