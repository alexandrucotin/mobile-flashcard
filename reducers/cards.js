import { ADD_CARD, RECEIVE_CARDS } from "../actions/cards";

export default function cards(state = {}, action) {
  switch (action.type) {
    case RECEIVE_CARDS:
      return {
        ...state,
        ...action.cards,
      };
    case ADD_CARD:
      const { card } = action;
      return {
        ...state,
        ...card
      };
    default:
      return state;
  }
}
