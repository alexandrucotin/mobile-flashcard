import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import Card from "./Card";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { darkBlue, pink } from "../utils/colors";

function arrows(index, prevQuestion, nextQuestion) {
  if (index > 0) {
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

  toggleAnswer = () => {
    const answers = {};
  };

  exitQuiz = () => {
    this.setState(() => ({
      correctAnswers: 0,
      currentQuestionIndex: 0,
      questions: [],
    }));
    this.props.navigation.navigate("home");
  };
  render() {
    const { currentQuestionIndex, questions } = this.state;
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.counterText}>
          {this.state.currentQuestionIndex + 1} / {this.state.questions.length}
        </Text>
        <View style={styles.cardContainer}>
          <Card
            cardId={questions[currentQuestionIndex]}
            toggleAnswer={this.toggleAnswer}
            showAnswer={this.state.showAnswer}
            toggleShowAnswer={this.showAnswer}
          />
          {arrows(currentQuestionIndex, this.prevQuestion, this.nextQuestion)}
        </View>
        <TouchableOpacity onPress={this.exitQuiz}>
          <Text style={styles.exitQuiz}>exit quiz</Text>
        </TouchableOpacity>
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
    justifyContent: "space-evenly",
    textAlign: "center",
    flexDirection: "row",
  },
});

function mapStateToProps({ decks }) {
  return { decks };
}

export default connect(mapStateToProps)(Quiz);
