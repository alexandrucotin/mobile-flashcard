export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const ADD_DECK = "ADD_DECK";
export const ADD_LINK = "ADD_LINK";
import { addDeckAsync, addLinkAsync, fetchDecks } from "../utils/initialData";

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks: JSON.parse(decks),
  };
}

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck,
  };
}

function addLink(deckId, cardId) {
  return {
    type: ADD_LINK,
    deckId,
    cardId,
  };
}

export function handleRefreshDecks() {
  return (dispatch) => {
    return fetchDecks().then((decks) => {
      console.log("Here");
      console.log(decks)
      dispatch(receiveDecks(decks));
    });
  };
}

export function handleAddDeck(deck, navigate, deckId) {
  return (dispatch) => {
    return addDeckAsync(deck).then(() => {
      dispatch(addDeck(deck));
      navigate("Deck", { deckId: deckId });
    });
  };
}

export function handleAddLink(deckId, cardId) {
  return (dispatch) => {
    return addLinkAsync(deckId, cardId).then(() => {
      dispatch(addLink(deckId, cardId));
    });
  };
}
