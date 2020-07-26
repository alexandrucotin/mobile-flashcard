import { ADD_DECK, RECEIVE_DECKS, ADD_LINK} from "../actions/decks";

export default function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks,
      };
    case ADD_DECK:
      const { deck } = action;
      return {
        ...state,
        ...deck,
      };
    case ADD_LINK: {
      const { deckId, cardId } = action;
      return {
        ...state,
        [deckId]: {
          id: state[deckId].id,
          questions: [...state[deckId].questions, cardId],
        },
      };
    }
    default:
      return state;
  }
}
