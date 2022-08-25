import React from "react";
import { useRoute } from "@react-navigation/native";
import { View, Dimensions } from "react-native";

import RouteMap from "../../components/RouteMap";
import UberTypes from "../../components/UberTypes";

const SearchResults = () => {
  const route = useRoute();
  const { originPlace, destinationPlace } = route.params;

  console.log(route.params, "SearchResult");
  return (
    <View style={{ display: "flex" }}>
      <View style={{ height: Dimensions.get("window").height - 450 }}>
        <RouteMap origin={originPlace} destination={destinationPlace} />
      </View>
      <View style={{ height: 500 }}>
        <UberTypes />
      </View>
    </View>
  );
};

export default SearchResults;
