import { AsyncStorage } from "react-native";

const CARDS = "CARDS";
const DECKS = "DECKS";

const cards = {
  "8xf0y6ziyjabvozdd253nd": {
    id: "8xf0y6ziyjabvozdd253nd",
    question: "React was introduced in 2013",
    backCard: "React was introduced in march 2013 as beta",
    answer: "correct",
    deck: "react",
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: "6ni6ok3ym7mf1p33lnez",
    question: "React is written in python",
    backCard: "To write React you must have a good knowledge of javascript.",
    answer: "incorrect",
    deck: "react",
  },
  "am8ehyc8byjqgar0jgpub9": {
    id: "am8ehyc8byjqgar0jgpub9",
    question: "Html is a programming language",
    backCard: "Html is a mockup language. It is used to create html pages.",
    answer: "incorrect",
    deck: "web",
  },
  "loxhs1bqm25b708cmbf3g": {
    id: "loxhs1bqm25b708cmbf3g",
    question: "Css is used to style your html",
    backCard: "Cascade stylesheet is used to modify your html pages style.",
    answer: "correct",
    deck: "web",
  },
};

const decks = {
  react: {
    id: "react",
    questions: ["8xf0y6ziyjabvozdd253nd", "6ni6ok3ym7mf1p33lnez"],
  },
  web: {
    id: "web",
    questions: ["am8ehyc8byjqgar0jgpub9", "loxhs1bqm25b708cmbf3g"],
  },
};

// SET CARDS

export function fetchCards() {
  return AsyncStorage.getItem(CARDS).then(formatCards);
}

function formatCards(results) {
  return results === null ? setDummyCards() : results;
}

function setDummyCards() {
  AsyncStorage.setItem(CARDS, JSON.stringify(cards));
  return cards;
}

// SET DECKS

export function fetchDecks() {
  return AsyncStorage.getItem(DECKS).then(formatDecks);
}

function formatDecks(results) {
  return results === null ? setDummyDecks() : results;
}

function setDummyDecks() {
  AsyncStorage.setItem(DECKS, JSON.stringify(decks));
  return decks;
}
