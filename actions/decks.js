export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const ADD_DECK = "ADD_DECK";
import { addDeckAsync } from "../utils/initialData";
import { AsyncStorage } from "react-native";

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

export function handleAddDeck(deck, navigate, deckId) {
  return (dispatch) => {
    return addDeckAsync(deck).then(() => {
      dispatch(addDeck(deck));
      console.log( "The deck id is: ", deck.id)
      navigate("Deck", {deckId: deckId})
    });
  };
}
