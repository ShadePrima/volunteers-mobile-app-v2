import React from "react";
import { View, Text, Dimensions } from "react-native";

import HomeMap from "../../components/HomeMap";
import HomeSearch from "../../components/HomeSearch";
import MiddleMessage from "../../components/MiddleMessage";

const HomeScreen = () => {
  return (
    <View>
      <View style={{ height: Dimensions.get("window").height - 420 }}>
        <HomeMap />
      </View>
      <MiddleMessage />
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;
