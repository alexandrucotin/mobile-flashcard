import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import DeckList from "./DeckList";
import NewDeckView from "./NewDeckView";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Feather name="home" color={color} size={24} />
          ),
        }}
        name="decklist"
        component={DeckList}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Add Deck",
          tabBarIcon: ({ color }) => (
            <Feather name="plus-square" color={color} size={24} />
          ),
        }}
        name="adddeck"
        component={NewDeckView}
      />
    </Tab.Navigator>
  );
}
