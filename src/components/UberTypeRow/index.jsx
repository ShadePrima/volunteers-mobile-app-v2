import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

import Ionicons from "react-native-vector-icons/Ionicons";

const UberTypeRow = (props) => {
  const { type } = props;

  const getImage = () => {
    if (type === "UberX") {
      return require("../../assets/images/UberX.jpeg");
    }
    if (type === "Comfort") {
      return require("../../assets/images/Comfort.jpeg");
    }
    if (type === "UberXL") {
      return require("../../assets/images/UberXL.jpeg");
    }
  };
  
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image style={styles.image} source={getImage()} />
      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          <Text> {type} </Text>
          <Ionicons name={"person"} size={16} />
          <Text>3</Text>
        </Text>
        <Text style={styles.time}>12:03 drop off</Text>
      </View>
      <View style={styles.rightContainer}>
        <Ionicons name={"pricetag"} size={18} color={"#43a14e"} />
        <Text style={styles.price}>free</Text>
      </View>
    </View>
  );
};

export default UberTypeRow;
