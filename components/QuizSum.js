import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { darkBlue } from "../utils/colors";
import { resetQuiz } from "../actions/quiz";

const returnStats = (quiz, cards) => {
  const userAnswers = quiz.answers.filter(
    (answer) => answer.questionAnsweredCorrectly === true
  );
  const questionsQuiz = Object.keys(cards).filter(
    (card) => cards[card].deck === quiz.id
  );
  return (
    <View style={styles.quizSumResults}>
      <Text style={{ marginBottom: 20, fontSize: 30, fontWeight: "bold" }}>
        Your score is {(userAnswers.length / quiz.answers.length) * 100}%
      </Text>
      <View style={styles.questionsResult}>
        {questionsQuiz.map((question, index) => (
          <View key={question} style={styles.eachQuestion}>
            <Text
              style={{
                marginBottom: 20,
                fontStyle: "italic",
                textAlign: "center",
              }}
            >
              {index + 1}. {cards[question].question}
            </Text>
            <Text
              style={{
                textAlign: "center",
              }}
            >
              You answered{" "}
              <Text style={{ fontWeight: "bold" }}>
                {quiz.answers[index].userAnswer}
              </Text>
            </Text>
            <Text
              style={{
                textAlign: "center",
              }}
            >
              The correct answer is{" "}
              <Text style={{ fontWeight: "bold" }}>
                {cards[question].answer}
              </Text>
            </Text>
            <Text
              style={{
                textAlign: "center",
              }}
            >
              {cards[question].backCard}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

class QuizSum extends Component {
  returnHome = () => {
    this.props.navigation.navigate("home");
  };

  resetQuiz = () => {
    const resetQuizUI = this.props.route.params.resetQuiz;
    const { dispatch, quiz } = this.props;
    dispatch(resetQuiz(quiz));
    resetQuizUI(quiz.id);
  };

  render() {
    const { quiz, cards } = this.props;
    return (
      <View style={styles.quizSumContainer}>
        <View style={styles.quizSumStats}>{returnStats(quiz, cards)}</View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={this.resetQuiz}>
            <Text style={styles.exitQuiz}>reset quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.returnHome}>
            <Text style={styles.exitQuiz}>return home</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  quizSumContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  quizSumStats: {
    alignItems: "center",
    marginBottom: 30,
  },
  quizSumTitle: {
    fontSize: 45,
    fontWeight: "bold",
    marginBottom: 30,
  },
  quizSumSubTitle: {
    fontSize: 20,
    marginBottom: 20,
    textDecorationLine: "underline",
  },
  exitQuiz: {
    textAlign: "center",
    margin: 50,
    fontSize: 15,
    color: darkBlue,
    textDecorationLine: "underline",
  },
  quizSumResults: {
    alignItems: "center",
  },
  questionsResult: {
    alignItems: "center",
  },
  eachQuestion: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 30,
  },
});

function mapStateToProps({ quiz, cards }) {
  return { quiz, cards };
}

export default connect(mapStateToProps)(QuizSum);
