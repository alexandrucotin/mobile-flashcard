import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { connect } from "react-redux";
import { beginQuiz } from "../actions/quiz";

import { manatee, white } from "../utils/colors";

class Deck extends Component {
  beginQuiz = () => {
    const id = this.props.route.params.deckId;
    const { dispatch, decks, cards } = this.props;
    const deck = decks[id];
    if (deck.questions === 0) {
      Alert.alert("Error", "The deck is empty!");
    } else {
      dispatch(beginQuiz(deck, cards));
      this.props.navigation.navigate("Quiz", { deckId: id });
    }
  };

  addCard = () => {
    const id = this.props.route.params.deckId;
    this.props.navigation.navigate("NewCard", { deckId: id });
  };

  render() {
    const { decks } = this.props;
    const id = this.props.route.params.deckId;
    const deck = decks[id];
    console.log("DECKS:", decks);
    console.log("DECK: ", deck);
    console.log("DECK ID: ", id);
    console.log("ROUTE PARAMS: ", this.props.route.params);
    return (
      <View style={styles.viewStyle}>
        <View style={styles.textContainer}>
          <Text style={styles.deckTitle}>{id}</Text>
          <Text style={styles.deckCards}>{deck.questions.length} cards</Text>
        </View>
        <TouchableOpacity
          style={[styles.quitzBtn, { backgroundColor: manatee }]}
          onPress={this.beginQuiz}
        >
          <Text style={{ color: white }}>Take Quiz!</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={[styles.quitzBtn, { backgroundColor: darkBlue }]}
          onPress={this.addCard}
        >
          <Text style={{ color: white }}>Add card</Text>
        </TouchableOpacity> */}
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
    margin: 10,
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    borderRadius: 10,
  },
});

function mapStateToProps({ decks, cards }) {
  return { decks, cards };
}

export default connect(mapStateToProps)(Deck);
