import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
import { setUserAnswer } from "../actions/quiz";

// Components
import { TouchableOpacity } from "react-native-gesture-handler";
import Card from "./Card";
import { Text, StyleSheet, View } from "react-native";
import ArrowsNavigation from "./ArrowsNavigation";

// Colors
import { darkBlue } from "../utils/colors";

class Quiz extends Component {
  state = {
    correctAnswers: 0,
    currentQuestionIndex: 0,
    questions: [],
    showAnswer: false,
  };

  componentDidMount() {
    const deck = this.props.decks[this.props.route.params.deckId];
    const { questions } = deck;
    this.setState({
      questions: questions,
    });
  }

  showAnswer = () => {
    this.setState((state) => ({
      showAnswer: !state.showAnswer,
    }));
    return this.state.showAnswer;
  };

  nextQuestion = () => {
    this.setState((state) => ({
      currentQuestionIndex: state.currentQuestionIndex + 1,
    }));
  };

  prevQuestion = () => {
    this.setState((state) => ({
      currentQuestionIndex: state.currentQuestionIndex - 1,
    }));
  };

  setCorrectAnswer = () => {
    const { dispatch } = this.props;
    dispatch(setUserAnswer("correct", this.state.currentQuestionIndex));
  };

  setIncorrectAnswer = () => {
    const { dispatch } = this.props;
    dispatch(setUserAnswer("incorrect", this.state.currentQuestionIndex));
  };

  exitQuiz = () => {
    this.props.navigation.navigate("home");
  };

  navigateToQuizSum = () => {
    this.props.navigation.navigate("QuizSum");
  };
  render() {
    const { currentQuestionIndex, questions } = this.state;
    const { quiz } = this.props;
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.counterText}>
          {this.state.currentQuestionIndex + 1} / {this.state.questions.length}
        </Text>
        <View style={styles.cardContainer}>
          <Card
            cardId={questions[currentQuestionIndex]}
            stateShowAnswer={this.state.showAnswer}
            showAnswer={this.showAnswer}
            setCorrectAnswer={this.setCorrectAnswer}
            setIncorrectAnswer={this.setIncorrectAnswer}
            currentQuestionIndex={this.state.currentQuestionIndex}
          />
          <ArrowsNavigation
            totalQuestions={questions.length - 1}
            index={currentQuestionIndex}
            prevQuestion={this.prevQuestion}
            nextQuestion={this.nextQuestion}
            state={this.state.showAnswer}
            navigate={this.navigateToQuizSum}
          />
        </View>
        {this.state.showAnswer ? null : (
          <TouchableOpacity onPress={this.exitQuiz}>
            <Text style={styles.exitQuiz}>exit quiz</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1 },
  counterText: {
    textAlign: "center",
    margin: 30,
    fontWeight: "bold",
    fontSize: 20,
  },
  cardContainer: {
    flex: 1,
  },
  exitQuiz: {
    textAlign: "center",
    margin: 50,
    fontSize: 15,
    color: darkBlue,
    textDecorationLine: "underline",
  },
  quizSum: {
    textDecorationLine: "underline",
  },
});

function mapStateToProps({ decks, quiz }) {
  return { decks, quiz };
}

export default connect(mapStateToProps)(Quiz);
