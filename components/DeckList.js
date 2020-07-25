import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import { connect } from "react-redux";
import { receiveDecks } from "../actions/decks";
import { receiveCards } from "../actions/cards";
import { fetchDecks, fetchCards } from "../utils/initialData";

// Utils
import { lavender, lumber, thistle, blue, cyan, pink } from "../utils/colors";

class DeckList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    fetchDecks().then((decks) => {
      dispatch(receiveDecks(decks));
    });

    fetchCards().then((cards) => {
      dispatch(receiveCards(cards));
    });
  }

  render() {
    const { decks, cards } = this.props;
    return (
      <ScrollView style={{padding:20}}>
        <Text style={styles.title}>List of decks</Text>
        {Object.keys(decks).map((deck) => (
          <TouchableOpacity
          key={[deck]}
            onPress={() =>
              this.props.navigation.navigate("Deck", { deckId: decks[deck].id })
            }
          >
            <View style={styles.deckList}>
              <Text style={{fontSize:25, fontWeight: "bold"}}>{[deck]}</Text>
              <Text style={{fontSize: 10, marginTop:10}}>number of cards {decks[deck].questions.length}</Text>
              <Feather
                style={{ marginTop: 20 }}
                name="arrow-right-circle"
                size={24}
              />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  deckList: {
    alignItems: "center",
    padding: 30,
    borderRadius: 10,
    backgroundColor: blue,
    margin: 20,
  },
  title: {
    textAlign: "center",
    padding: 30,
    fontSize: 40,
    fontWeight: "bold",
  },
  deckTitle: {},
});

function mapStateToProps({ decks, cards }) {
  return {
    decks,
    cards,
  };
}

export default connect(mapStateToProps)(DeckList);
