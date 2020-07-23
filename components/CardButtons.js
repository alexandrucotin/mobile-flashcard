import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { white, red, green, grey } from "../utils/colors";
import { connect } from "react-redux";

class CardButtons extends Component {
  render() {
    const {
      setCorrectAnswer,
      setIncorrectAnswer,
      currentQuestionIndex,
    } = this.props;
    const { userAnswer, questionAnsweredCorrectly } = this.props.quiz.answers[
      currentQuestionIndex
    ];
    if (userAnswer === null) {
      return (
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: green }]}
            onPress={setCorrectAnswer}
          >
            <Text style={{ color: white, fontWeight: "bold" }}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: red },
              styles.buttonBorder,
            ]}
            onPress={setIncorrectAnswer}
          >
            <Text style={{ color: white, fontWeight: "bold" }}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (userAnswer === "correct" && questionAnsweredCorrectly) {
      return (
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: green }]}
            onPress={setCorrectAnswer}
            disabled={true}
          >
            <Text style={{ color: white, fontWeight: "bold" }}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: grey }]}
            onPress={setIncorrectAnswer}
            disabled={true}
          >
            <Text style={{ color: white, fontWeight: "bold" }}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (userAnswer === "correct" && !questionAnsweredCorrectly) {
      return (
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: red }]}
            onPress={setCorrectAnswer}
            disabled={true}
          >
            <Text style={{ color: white, fontWeight: "bold" }}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: grey }]}
            onPress={setIncorrectAnswer}
            disabled={true}
          >
            <Text style={{ color: white, fontWeight: "bold" }}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (userAnswer === "incorrect" && questionAnsweredCorrectly) {
      return (
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: grey }]}
            onPress={setCorrectAnswer}
            disabled={true}
          >
            <Text style={{ color: white, fontWeight: "bold" }}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: green }]}
            onPress={setIncorrectAnswer}
            disabled={true}
          >
            <Text style={{ color: white, fontWeight: "bold" }}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (userAnswer === "incorrect" && !questionAnsweredCorrectly) {
      return (
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: grey }]}
            onPress={setCorrectAnswer}
            disabled={true}
          >
            <Text style={{ color: white, fontWeight: "bold" }}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: red }]}
            onPress={setIncorrectAnswer}
            disabled={true}
          >
            <Text style={{ color: white, fontWeight: "bold" }}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
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
});

function mapStateToProps(
  { quiz },
  { setCorrectAnswer, setIncorrectAnswer, currentQuestionIndex }
) {
  return { quiz, setCorrectAnswer, setIncorrectAnswer, currentQuestionIndex };
}

export default connect(mapStateToProps)(CardButtons);
