import React from "react";
import { useRoute } from "@react-navigation/native";
import { View, Dimensions } from "react-native";

import RouteMap from "../../components/RouteMap";
import UberTypes from "../../components/UberTypes";

const SearchResults = () => {
  const rout = useRoute();
  console.log(rout.params);
  return (
    <View style={{ display: "flex" }}>
      <View style={{ height: Dimensions.get("window").height - 420 }}>
        <RouteMap />
      </View>
      <View style={{ height: 500 }}>
        <UberTypes />
      </View>
    </View>
  );
};

export default SearchResults;
