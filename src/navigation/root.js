import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DestinationSearch from "../screens/DestinationSearch";
import SearchResults from "../screens/SearchResults";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={"Home"}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DestinationSearch" component={DestinationSearch} />
        <Stack.Screen name="SearchResults" component={SearchResults} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
