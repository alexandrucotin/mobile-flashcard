import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
import { setUserAnswer, nextQuestionRedux, prevQuestionRedux } from "../actions/quiz";

// Components
import { TouchableOpacity } from "react-native-gesture-handler";
import Card from "./Card";
import { Text, StyleSheet, View } from "react-native";
import ArrowsNavigation from "./ArrowsNavigation";

// Colors
import { darkBlue } from "../utils/colors";

class Quiz extends Component {
  state = {
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
    const { dispatch } = this.props;
    dispatch(nextQuestionRedux());
  };

  prevQuestion = () => {
    const { dispatch } = this.props;
    dispatch(prevQuestionRedux());
  };

  setCorrectAnswer = () => {
    const { dispatch, quiz} = this.props;
    const { questions } = this.state;
    dispatch(setUserAnswer("correct", quiz.currentQuestionIndex));
    if (quiz.currentQuestionIndex + 1 === questions.length) {
      this.props.navigation.navigate("QuizSum");
    }
  };

  setIncorrectAnswer = () => {
    const { dispatch, quiz } = this.props;
    const { questions } = this.state;
    dispatch(setUserAnswer("incorrect", quiz.currentQuestionIndex));
    if (quiz.currentQuestionIndex + 1 === questions.length) {
      this.props.navigation.navigate("QuizSum");
    }
  };

  exitQuiz = () => {
    this.props.navigation.navigate("home");
  };

  navigateToQuizSum = () => {
    this.props.navigation.navigate("QuizSum");
  };
  render() {
    const { questions } = this.state;
    const {currentQuestionIndex} = this.props.quiz
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.counterText}>
          {currentQuestionIndex + 1} / {this.state.questions.length}
        </Text>
        <View style={styles.cardContainer}>
          <Card
            cardId={questions[currentQuestionIndex]}
            stateShowAnswer={this.state.showAnswer}
            showAnswer={this.showAnswer}
            setCorrectAnswer={this.setCorrectAnswer}
            setIncorrectAnswer={this.setIncorrectAnswer}
            currentQuestionIndex={currentQuestionIndex}
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
