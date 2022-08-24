import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import HomeScreen from "../screens/HomeScreen";

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  );
};

export default RootNavigator;
