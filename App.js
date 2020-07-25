import React from "react";
import { StatusBar, View } from "react-native";
import Constants from "expo-constants";

// Redux
import reducer from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import middleware from "./middleware";

// Navigation
import Navigation from "./components/Navigation";

function CustomStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

export default function App() {
  return (
    <Provider store={createStore(reducer, middleware)}>
      <CustomStatusBar />
      <Navigation />
    </Provider>
  );
}
