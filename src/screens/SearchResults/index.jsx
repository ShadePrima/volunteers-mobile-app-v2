import React from "react";
import { View, Text, Dimensions } from "react-native";

import HomeMap from "../../components/HomeMap";
import UberTypes from "../../components/UberTypes";

const SearchResults = () => {
  return (
    <View style={{ display: "flex" }}>
      <View style={{ height: Dimensions.get("window").height - 350 }}>
        <HomeMap />
      </View>
      <View style={{ height: 500 }}>
        <UberTypes />
      </View>
    </View>
  );
};

export default SearchResults;
