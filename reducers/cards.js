import { ADD_CARD_TO_DECK, RECEIVE_CARDS } from "../actions/cards";

export default function cards(state = {}, action) {
  switch (action.type) {
    case RECEIVE_CARDS:
      return {
        ...state,
        ...action.cards,
      };
    // case ADD_CARD_TO_DECK:
    //   const { card, deck } = action;
    //   return {
    //     ...state,
    //     [deck.id]: action.deck,
    //   };
    default:
      return state;
  }
}
