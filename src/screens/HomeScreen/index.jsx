import React from "react";
import { View, Text } from "react-native";

import HomeMap from "../../components/HomeMap";
import HomeSearch from "../../components/HomeSearch";
import MiddleMessage from "../../components/MiddleMessage";

const HomeScreen = () => {
  return (
    <View>
      <HomeMap />
      <MiddleMessage />
      <HomeSearch />
      {/* Covid message */}
      {/* Bottom component */}
    </View>
  );
};

export default HomeScreen;
