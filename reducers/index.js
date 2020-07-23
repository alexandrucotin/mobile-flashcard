import { combineReducers } from "redux";
import cards from "./cards";
import decks from "./decks";
import quiz from "./quiz"

export default combineReducers({
  cards,
  decks,
  quiz
});
