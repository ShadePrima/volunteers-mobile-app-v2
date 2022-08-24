import React from "react";
import * as Location from "expo-location";

import { StyleSheet, PermissionsAndroid, Text, View } from "react-native";

import { StatusBar } from "expo-status-bar";

import HomeScreen from "./src/screens/HomeScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeSearch from "./src/components/HomeSearch";
import Navigation from "./src/navigation/root";
const Stack = createNativeStackNavigator();

export default function App() {
  const [location, setLocation] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState(null);
  console.log(location);

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return <Navigation />;
}
