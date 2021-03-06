export const BEGIN_QUIZ = "BEGIN_QUIZ";
export const NEXT_QUESTION = "NEXT_QUESTION"
export const PREV_QUESTION = "PREV_QUESTION"
export const SET_USER_ANSWER = "SET_USER_ANSWER";
export const RESET_QUIZ = "RESET_QUIZ";
export const EXIT_QUIZ = "EXIT_QUIZ";

export function beginQuiz(deck, cards) {
  return {
    type: BEGIN_QUIZ,
    deck,
    cards,
  };
}

export function exitQuiz(quizId) {
  return {
    type: EXIT_QUIZ,
    quizId,
  };
}

export function setUserAnswer(answer, index) {
  return {
    type: SET_USER_ANSWER,
    answer,
    index,
  };
}

export function resetQuiz(quiz) {
  return {
    type: RESET_QUIZ,
    quiz,
  };
}

export function nextQuestionRedux () {
  return {
    type: NEXT_QUESTION
  }
}

export function prevQuestionRedux () {
  return {
    type: PREV_QUESTION
  }
}
