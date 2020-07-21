export const BEGIN_QUIZ = "BEGIN_QUIZ",

export function beginQuiz(deck, questions) {
    return{
        type: BEGIN_QUIZ,
        deck,
        questions,
    }
}