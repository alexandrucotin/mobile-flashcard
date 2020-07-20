import React from "react";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Components
import BottomNav from "./BottomNav";
import Deck from "./Deck";
import Quiz from "./Quiz"

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={BottomNav}
          options={{
            animationEnabled: true,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Deck"
          component={Deck}
          options={{
            animationEnabled: true,
          }}
        />

        <Stack.Screen
          name="Quiz"
          component={Quiz}
          options={{
            animationEnabled: true,
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
