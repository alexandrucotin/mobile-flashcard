import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { darkBlue } from "../utils/colors";

const returnStats = (quiz, cards) => {
  console.log(cards);
  const userAnswers = quiz.answers.filter(
    (answer) => answer.questionAnsweredCorrectly === true
  );
  const questionsQuiz = Object.keys(cards).filter(
    (card) => cards[card].deck === quiz.id
  );
  return (
    <View style={styles.quizSumResults}>
      <Text style={{marginBottom: 20, fontSize:18, fontWeight: "bold"}}>
        Your score is {userAnswers.length} / {quiz.answers.length}
      </Text>
      <View style={styles.questionsResult}>
        <Text style={{textAlign: "center"}}>The questions are</Text>
        {questionsQuiz.map((question, index) => (
          <View key={question} style={styles.eachQuestion}>
            <Text style={{marginBottom: 10, fontStyle: "italic"}}>{index+1}. {cards[question].question}</Text>
            <Text>    You answered {quiz.answers[index].userAnswer}.</Text>
            <Text>    The correct answer is {cards[question].answer}</Text>
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

  render() {
    const { quiz, cards } = this.props;
    return (
      <View style={styles.quizSumContainer}>
        <View style={styles.quizSumStats}>
          <Text style={styles.quizSumTitle}> Quiz summary </Text>
          <Text style={styles.quizSumSubTitle}>
            Those are the stats of your quiz about {quiz.id}
          </Text>
          {returnStats(quiz, cards)}
        </View>
        <TouchableOpacity onPress={this.returnHome}>
          <Text style={styles.exitQuiz}>return Home</Text>
        </TouchableOpacity>
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
    marginBottom:20,
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
    justifyContent: "center",
    alignItems: "center",
  },
  questionsResult: {
  },
  eachQuestion: {
    marginTop: 20
  }
});

function mapStateToProps({ quiz, cards }) {
  return { quiz, cards };
}

export default connect(mapStateToProps)(QuizSum);
