import React, { Component } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { darkBlue, white, green, red } from "../utils/colors";

class NewCard extends Component {
  state = {
    question: "",
    backCard: "",
    answer: "",
  };

  onChangeQuestion = (text) => {
    this.setState(() => ({
      question: text,
    }));
  };
  onChangeBackCard = (text) => {
    this.setState(() => ({
      backCard: text,
    }));
  };

  selectedAnswer = (answer) => {
    this.setState(() => ({
      answer: answer,
    }));
  };

  createCard = () => {
    const { dispatch } = this.props;

    // Add card to async storage

    // Update redux store
    dispatch(addCard());

    // Navigates to deck View
    this.props.navigation.navigate("Deck", { deckId: this.state.value });
  };

  render() {
    return (
      <View style={styles.newDeckViewContainer}>
        <Text style={{ fontSize: 40, fontWeight: "bold", marginBottom: 40 }}>
          Create new card
        </Text>
        <View style={styles.formInput}>
          <Text>Card question</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={this.onChangeQuestion}
          />
        </View>
        <View style={styles.formInput}>
          <Text>Text on the back of the card</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={this.onChangeQuestion}
          />
        </View>
        <View style={[styles.formInput, { marginBottom: 50 }]}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={[
                styles.button,
                styles.answer,
                {
                  backgroundColor: green,
                },
              ]}
              onPress={this.selectedAnswer("correct")}
            >
              <Text>Corect</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                styles.answer,
                {
                  backgroundColor: red,
                },
              ]}
              onPress={this.selectedAnswer("incorrect")}
            >
              <Text>Incorect</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={this.createDeck}
          style={[
            styles.button,
            {
              backgroundColor: darkBlue,
            },
          ]}
        >
          <Text style={{ color: white }}>Create deck</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  newDeckViewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  textInput: {
    height: 30,
    borderColor: "gray",
    borderBottomWidth: 1,
    width: 230,
  },
  button: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
  },
  formInput: {
    marginTop: 20,
    marginBottom: 20,
  },
  answer: {
    marginRight: 20,
    marginLeft: 20,
  },
});

function mapStateToProps({ decks }) {
  return { decks };
}

export default connect(mapStateToProps)(NewCard);
