import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";

import {
  lavender,
  white,
  lumber,
  red,
  green,
  thistle,
  blue,
  cyan,
  pink,
  darkBlue,
} from "../utils/colors";

class Card extends Component {
  render() {
    const { cardId, toggleAnswer, showAnswer, toggleShowAnswer } = this.props;
    if (!cardId) {
      return <Text>Loading...</Text>;
    }
    const { question, backCard } = this.props.card;
    if (showAnswer) {
      return (
        <View style={styles.backCard}>
          <Text style={styles.questionText}>{backCard}</Text>
          <TouchableOpacity onPress={toggleShowAnswer}>
            <Text style={styles.underTitle}>hide answer</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={styles.questionView}>
          <View>
            <Text style={styles.questionText}>{question}</Text>
            <TouchableOpacity onPress={toggleShowAnswer}>
              <Text style={styles.underTitle}>show answer</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: green }]}
            >
              <Text style={{ color: white, fontWeight: "bold" }}>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: red }]}>
              <Text style={{ color: white, fontWeight: "bold" }}>
                Incorrect
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  questionView: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 20,
  },
  questionText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 40,
    marginLeft: 30,
    marginRight: 30,
  },
  underTitle: {
    marginTop: 10,
    textDecorationLine: "underline",
    color: darkBlue,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  button: {
    borderRadius: 10,
    padding: 20,
    paddingLeft: 50,
    paddingRight: 50,
    marginLeft: 10,
    marginRight: 10,
  },
  backCard: {
      flex:1,
      alignItems: "center",
      justifyContent: "center"
  }
});

function mapStateToProps({ cards }, { cardId, toggleAnswer, showAnswer,toggleShowAnswer  }) {
  const card = cards[cardId];
  return { card, toggleAnswer,toggleShowAnswer, showAnswer };
}

export default connect(mapStateToProps)(Card);
