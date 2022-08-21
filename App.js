import React from "react";
// import Icon from "react-native-vector-icons/FontAwesome";
import { StyleSheet, Text, View } from "react-native";

import { StatusBar } from "expo-status-bar";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    <View>
      <HomeScreen />
      <StatusBar style="auto" />
    </View>
  );
}
