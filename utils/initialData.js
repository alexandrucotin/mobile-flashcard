import { AsyncStorage } from "react-native";

const CARDS = "CARDS";
const DECKS = "DECKS";

const cards = {
  x8f0y6ziyjabvozdd253nd: {
    id: "x8f0y6ziyjabvozdd253nd",
    question: "React was introduced in 2013",
    backCard: "React was introduced in march 2013 as beta",
    answer: "correct",
    deck: "react",
  },
  n6i6ok3ym7mf1p33lnez: {
    id: "n6i6ok3ym7mf1p33lnez",
    question: "React is written in python",
    backCard: "To write React you must have a good knowledge of javascript.",
    answer: "incorrect",
    deck: "react",
  },
  am8ehyc8byjqgar0jgpub9: {
    id: "am8ehyc8byjqgar0jgpub9",
    question: "Html is a programming language",
    backCard: "Html is a markup language. It is used to create html pages.",
    answer: "incorrect",
    deck: "web",
  },
  loxhs1bqm25b708cmbf3g: {
    id: "loxhs1bqm25b708cmbf3g",
    question: "Css is used to style your html",
    backCard: "Cascade stylesheet is used to modify your html pages style.",
    answer: "correct",
    deck: "web",
  },
};

const decks = {
  // react: {
  //   id: "react",
  //   questions: ["x8f0y6ziyjabvozdd253nd", "n6i6ok3ym7mf1p33lnez"],
  // },
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
  return Promise.resolve(JSON.stringify(cards));
}

export function addCardAsync(card) {
  return AsyncStorage.mergeItem(CARDS, JSON.stringify(card));
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
  return Promise.resolve(JSON.stringify(decks));
}

export function addDeckAsync(deck) {
  return AsyncStorage.mergeItem(DECKS, JSON.stringify(deck));
}

export function addLinkAsync(deckId, cardId) {
  return AsyncStorage.getItem(DECKS).then((decks) => {
    const parsedDecks = JSON.parse(decks);
    const deckQuestion = [...parsedDecks[deckId].questions, cardId];
    AsyncStorage.mergeItem(
      DECKS,
      JSON.stringify({
        [deckId]: {questions: deckQuestion },
      })
    );
  });
}
