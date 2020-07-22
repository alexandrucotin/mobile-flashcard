import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import Card from "./Card";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { darkBlue, pink } from "../utils/colors";

function arrows(
  totalQuestions,
  index,
  prevQuestion,
  nextQuestion,
  state,
  navigate
) {
  if (totalQuestions === index) {
    return (
      <View style={styles.arrowsContainer}>
        <TouchableOpacity onPress={prevQuestion}>
          <Feather name="arrow-left-circle" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigate}>
          <Text style={styles.quizSum}>Show quiz summary</Text>
        </TouchableOpacity>
      </View>
    );
  } else if (index > 0 && index < totalQuestions && !state) {
    return (
      <View style={styles.arrowsContainer}>
        <TouchableOpacity onPress={prevQuestion}>
          <Feather name="arrow-left-circle" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={nextQuestion}>
          <Feather name="arrow-right-circle" size={30} />
        </TouchableOpacity>
      </View>
    );
  } else if (state) {
    return null;
  } else {
    return (
      <View style={styles.arrowsContainer}>
        <TouchableOpacity onPress={nextQuestion}>
          <Feather name="arrow-right-circle" size={30} />
        </TouchableOpacity>
      </View>
    );
  }
}

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

  toggleCorrectAnswer = (e) => {
    let answers = {};
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
    console.log(quiz);
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
            toggleCorrectAnswer={this.toggleCorrectAnswer}
          />
          {arrows(
            questions.length - 1,
            currentQuestionIndex,
            this.prevQuestion,
            this.nextQuestion,
            this.state.showAnswer,
            this.navigateToQuizSum
          )}
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
  arrowsContainer: {
    alignItems: "center",
    justifyContent: "space-evenly",
    textAlign: "center",
    flexDirection: "row",
  },
  quizSum: {
    textDecorationLine: "underline",
  },
});

function mapStateToProps({ decks, quiz }) {
  return { decks, quiz };
}

export default connect(mapStateToProps)(Quiz);
