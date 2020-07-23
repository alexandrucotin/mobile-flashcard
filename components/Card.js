import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";

import { darkBlue } from "../utils/colors";
import CardButtons from "./CardButtons";

class Card extends Component {
  render() {
    const {
      cardId,
      setCorrectAnswer,
      setIncorrectAnswer,
      stateShowAnswer,
      showAnswer,
      currentQuestionIndex,
    } = this.props;
    if (!cardId) {
      return <Text>Loading...</Text>;
    }
    const { question, backCard } = this.props.card;
    if (stateShowAnswer) {
      return (
        <View style={styles.backCard}>
          <Text style={styles.questionText}>{backCard}</Text>
          <TouchableOpacity onPress={showAnswer}>
            <Text style={styles.underTitle}>hide answer</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={styles.questionView}>
          <View>
            <Text style={styles.questionText}>{question}</Text>
            <TouchableOpacity onPress={showAnswer}>
              <Text style={styles.underTitle}>show answer</Text>
            </TouchableOpacity>
          </View>
          <CardButtons
            currentQuestionIndex={currentQuestionIndex}
            setIncorrectAnswer={setIncorrectAnswer}
            setCorrectAnswer={setCorrectAnswer}
          />
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
  backCard: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

function mapStateToProps(
  { cards, quiz },
  {
    cardId,
    stateShowAnswer,
    showAnswer,
    setCorrectAnswer,
    setIncorrectAnswer,
    currentQuestionIndex,
  }
) {
  const card = cards[cardId];
  return {
    quiz,
    card,
    showAnswer,
    setIncorrectAnswer,
    setCorrectAnswer,
    stateShowAnswer,
    currentQuestionIndex,
  };
}

export default connect(mapStateToProps)(Card);
