export const RECEIVE_CARDS = "RECEIVE_CARDS";
export const ADD_CARD_TO_DECK = "ADD_CARD_TO_DECK";
import { addCardAsync, fetchCards } from "../utils/initialData";
import { handleAddLink, handleRefreshDecks } from "../actions/decks";

export function receiveCards(cards) {
  return {
    type: RECEIVE_CARDS,
    cards: JSON.parse(cards),
  };
}

function addCard(card) {
  return {
    type: ADD_CARD_TO_DECK,
    card,
  };
}

export function handleAddCard(card, navigate, deckId, cardId) {
  return (dispatch) => {
    return addCardAsync(card)
      .then(() => {
        dispatch(addCard(card));
      })
      .then(() => {
       return dispatch(handleAddLink(deckId, cardId));
      })
      .then(() => {
        dispatch(handleRefreshDecks());
      })
      .then(() => {
        dispatch(handleRefreshCards());
      })
      .then(() => {
        navigate("Deck", { deckId: deckId });
      });
  };
}

export function handleRefreshCards() {
  return (dispatch) => {
    return fetchCards().then((cards) => {
      dispatch(receiveCards(cards));
    });
  };
}
