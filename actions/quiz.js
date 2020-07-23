export const BEGIN_QUIZ = "BEGIN_QUIZ";
export const EXIT_QUIZ = "EXIT_QUIZ";
export const SET_USER_ANSWER = "SET_USER_ANSWER";

export function beginQuiz(deck, cards) {
  return {
    type: BEGIN_QUIZ,
    deck,
    cards
  };
}

export function exitQuiz(quizId) {
  return {
    type: EXIT_QUIZ,
    quizId,
  };
}

export function setUserAnswer( answer, index) {
  return {
    type: SET_USER_ANSWER,
    answer,
    index
  };
}
