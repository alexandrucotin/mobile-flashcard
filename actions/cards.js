export const RECEIVE_CARDS = "RECEIVE_CARDS";
export const ADD_CARD_TO_DECK = "ADD_CARD_TO_DECK";

export function receiveCards(cards) {
  return {
    type: RECEIVE_CARDS,
    cards: JSON.parse(cards),
  };
}

function addCardToDeck(card, deck) {
  return {
    type: ADD_CARD_TO_DECK,
    card,
    deck,
  };
}

export function handleAddCard() {
  return (dispatch, getState) => {
    const { users, authedUser } = getState();

    return _saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    })
      .then((question) => {
        dispatch(addQuestion(question));
        dispatch(updateUserQuestions(users[authedUser], question.id));
      })
      .then(() => dispatch(hideLoading()));
  };
}
