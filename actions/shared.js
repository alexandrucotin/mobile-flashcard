import { receiveCards } from "./cards";
import { receiveDecks } from "./decks";

export function handleInitialData() 
  return (dispatch) => {
    return Promise.all([_getDecks(), _getCards()]).then(([decks, cards]) => {
      dispatch(receiveDecks(decks));
      dispatch(receiveCards(cards));
    });
  };
}
