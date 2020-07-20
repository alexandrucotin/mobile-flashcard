export const RECEIVE_CARDS = "RECEIVE_CARDS";
export const ADD_CARD_TO_DECK = "ADD_CARD_TO_DECK";

export function receiveCards(cards) {
  return {
    type: RECEIVE_CARDS,
    cards: JSON.parse(cards),
  };
}

export function addCardToDeck(card, deck) {
  return {
    type: ADD_CARD_TO_DECK,
    card,
    deck,
  };
}
