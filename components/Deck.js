import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { beginQuiz } from "../actions/quiz";

import { thistle, white } from "../utils/colors";

class Deck extends Component {
  beginQuiz = () => {
    const id = this.props.route.params.deckId;
    const { dispatch, questions, decks } = this.props;
    const deck = decks[id];

    dispatch(beginQuiz(deck, questions));
    this.props.navigation.navigate("Quiz", { deckId: id });
  };

  render() {
    const { decks } = this.props;
    const id = this.props.route.params.deckId;
    const deck = decks[id];
    return (
      <View style={styles.viewStyle}>
        <View style={styles.textContainer}>
          <Text style={styles.deckTitle}>{id}</Text>
          <Text style={styles.deckCards}>{deck.questions.length} cards</Text>
        </View>
        <TouchableOpacity
          style={styles.quitzBtn}
          onPress={this.beginQuiz}
        >
          <Text style={{ color: white }}>Take Quiz!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    marginBottom: 30,
  },
  deckTitle: {
    textTransform: "uppercase",
    fontSize: 30,
    fontWeight: "bold",
  },
  deckCards: {
    textAlign: "center",
    fontSize: 10,
  },
  quitzBtn: {
    backgroundColor: thistle,
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    borderRadius: 10,
  },
});
const mapStateToProps = ({ decks, questions }) => {
  return { decks, questions };
};

export default connect(mapStateToProps)(Deck);
