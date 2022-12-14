import React from "react";
import { View, Text, Pressable } from "react-native";

import styles from "./styles";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

const HomeSearch = () => {
  const navigation = useNavigation();
  const goToSearch = () => {
    navigation.navigate("DestinationSearch");
  };
  return (
    <View>
      {/* Input box */}
      <Pressable onPress={goToSearch} style={styles.inputBox}>
        <Text style={styles.inputText}>Where To?</Text>
        <View style={styles.timeContainer}>
          <AntDesign name="clockcircle" size={16} />
          <Text>Now</Text>
          <MaterialIcons name="keyboard-arrow-down" size={16} />
        </View>
      </Pressable>
      {/* Previous Destination */}
      <View style={styles.row}>
        <View style={styles.iconeContainer}>
          <AntDesign name="clockcircle" size={20} color={"#535353"} />
        </View>
        <Text style={styles.destinationText}>Last Place</Text>
      </View>
      {/* Home Destination */}
      <View style={styles.row}>
        <View style={[styles.iconeContainer, { backgroundColor: "#218cff" }]}>
          <Entypo name="home" size={20} color={"#535353"} />
        </View>
        <Text style={styles.destinationText}>Home</Text>
      </View>
    </View>
  );
};

export default HomeSearch;
