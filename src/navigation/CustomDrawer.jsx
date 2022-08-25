import { View, Text, Pressable } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ backgroundColor: "#212121", padding: 15 }}>
        {/* UserRow */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              backgroundColor: "#cacaca",
              width: 50,
              height: 50,
              borderRadius: 30,
              marginRight: 10,
            }}
          />
          <View>
            <Text style={{ color: "white", fontSize: 20 }}>
              Aleksandr Aniskevich
            </Text>
            <Text style={{ color: "lightgrey", fontSize: 14 }}>5.00 *</Text>
          </View>
        </View>

        {/* MessagesRow */}
        <View
          style={{
            borderTopWidth: 1,
            borderTopColor: "#919191",
            borderBottomWidth: 1,
            borderBottomColor: "#919191",
            paddingVertical: 5,
            marginVertical: 10,
          }}
        >
          <Pressable
            onPress={() => {
              console.log("Do more press");
            }}
          >
            <Text style={{ color: "#dddddd" }}>Message</Text>
          </Pressable>
        </View>

        {/* Do more */}
        <Pressable
          onPress={() => {
            console.log("Do more press");
          }}
        >
          <Text style={{ color: "#fff" }}>Do more with your account</Text>
        </Pressable>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
