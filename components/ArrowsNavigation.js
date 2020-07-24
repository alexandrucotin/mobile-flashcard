import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export default class ArrowsNavigation extends Component {
  render() {
    const {
      totalQuestions,
      index,
      prevQuestion,
      nextQuestion,
      state,
    } = this.props;
    if (totalQuestions === index) {
      return (
        <View style={styles.arrowsContainer}>
          <TouchableOpacity onPress={prevQuestion}>
            <Feather name="arrow-left-circle" size={30} />
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
}

const styles = StyleSheet.create({
  arrowsContainer: {
    alignItems: "center",
    justifyContent: "space-evenly",
    textAlign: "center",
    flexDirection: "row",
  },
});
