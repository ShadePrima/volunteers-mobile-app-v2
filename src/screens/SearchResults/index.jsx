import React from "react";
import { View, Dimensions } from "react-native";

import RouteMap from "../../components/RouteMap";
import UberTypes from "../../components/UberTypes";



const SearchResults = () => {
  return (
    <View style={{ display: "flex" }}>
      <View style={{ height: Dimensions.get("window").height - 350 }}>
        <RouteMap />
      </View>
      <View style={{ height: 500 }}>
        <UberTypes />
      </View>
    </View>
  );
};

export default SearchResults;
