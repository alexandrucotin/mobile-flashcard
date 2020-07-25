import React, { Component } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import { handleAddDeck } from "../actions/decks";
import { darkBlue, white } from "../utils/colors";

class NewDeckView extends Component {
  state = {
    value: "Deck Name",
  };

  onChangeText = (text) => {
    this.setState(() => ({
      value: text,
    }));
  };

  createDeck = () => {
    const { dispatch } = this.props;
    dispatch(
      handleAddDeck({
        [this.state.value]: {
          id: this.state.value,
          questions: [],
        },
      }, this.props.navigation.navigate, this.state.value)
    );
  };

  render() {
    return (
      <View style={styles.newDeckViewContainer}>
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>
          Create new deck
        </Text>
        <TextInput style={styles.textInput} onChangeText={this.onChangeText} />
        <TouchableOpacity onPress={this.createDeck} style={styles.button}>
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
    height: 40,
    borderColor: "gray",
    borderBottomWidth: 1,
    width: 230,
    marginTop: 30,
    marginBottom: 30,
  },
  button: {
    backgroundColor: darkBlue,
    padding: 10,
    borderRadius: 10,
  },
});

function mapStateToProps({ decks }) {
  return { decks };
}

export default connect(mapStateToProps)(NewDeckView);
