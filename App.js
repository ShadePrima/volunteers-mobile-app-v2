import React from "react";
// import Icon from "react-native-vector-icons/FontAwesome";
import { StyleSheet, Text, View } from "react-native";

import { StatusBar } from "expo-status-bar";
import HomeScreen from "./src/screens/HomeScreen";
import DestinationSearch from "./src/screens/DestinationSearch";
import SearchResults from "./src/screens/SearchResults";

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <HomeScreen />
      {/* <DestinationSearch />  */}
      {/* <SearchResults /> */}
      //Home
    </View>
  );
}
