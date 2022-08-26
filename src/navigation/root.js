import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeNavigation from "./Home";
import { Text, View } from "react-native";
import CustomDrawer from "./CustomDrawer";

const Drawer = createDrawerNavigator();

const DummyScreen = (props) => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>{props.name}</Text>
  </View>
);

const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(
          props: DrawerContentComponentProps<DrawerContentOptions>
        ) => <CustomDrawer {...props} />}
      >
        <Drawer.Screen name="Home" component={HomeNavigation} />
        <Drawer.Screen name="Yuor trips">
          {() => <DummyScreen name={"Yuor trips"} />}
        </Drawer.Screen>

        <Drawer.Screen name="Help">
          {() => <DummyScreen name={"Help"} />}
        </Drawer.Screen>

        <Drawer.Screen name="Wallet">
          {() => <DummyScreen name={"Wallet"} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
