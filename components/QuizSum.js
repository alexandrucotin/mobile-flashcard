import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

export default class QuizSum extends Component {
  returnHome = () => {
    this.props.navigation.navigate("home");
  };
  
  render() {
    return (
      <View>
        <Text> This is the quiz summary! </Text>
        <TouchableOpacity onPress={this.returnHome}>
          <Text style={styles.exitQuiz}>return nome</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
