import React from "react";
import { View, Text, Pressable } from "react-native";
import UberTypeRow from "../UberTypeRow";

import typesData from "../../assets/data/types.js";

const UberTypes = () => {
  const confirm = () => {
    console.warn("confirmNew");
  };

  return (
    <View>
      {typesData.map((obj) => (
        <UberTypeRow key={obj.id} type={obj.type} />
      ))}
      <Pressable
        onPress={confirm}
        style={{
          backgroundColor: "#5b6375",
          padding: 10,
          margin: 10,
          borderRadius: 10,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          Confirm UberX
        </Text>
      </Pressable>
    </View>
  );
};

export default UberTypes;
