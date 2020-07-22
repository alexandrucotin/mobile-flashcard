import { BEGIN_QUIZ } from "../actions/quiz";

export default function quiz(state = {}, action) {
    console.log(action.deck)
  switch (action.type) {
    case BEGIN_QUIZ:
      const { deck, questions } = action;
      return {
        [deck]: {
          id: [deck],
          answers: questions.map((question) => ({
            questionAnswer: question.answer,
            userAnswer: null,
          })),
        },
      };
  }
}
