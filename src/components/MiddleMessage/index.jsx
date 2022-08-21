import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

import sytles from "./styles";

const MiddleMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.text}>
        If you must travel, pleace exercise caution for your safety and the
        safety of our company
      </Text>
      <Text style={styles.learnMore}>Learn more</Text>
    </View>
  );
};

export default MiddleMessage;
