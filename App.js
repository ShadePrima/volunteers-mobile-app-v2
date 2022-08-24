import React from "react";
import * as Location from "expo-location";
// import Geolocation from "@react-native-community/geolocation";
// import Icon from "react-native-vector-icons/FontAwesome";
import { StyleSheet, PermissionsAndroid, Text, View } from "react-native";

import { StatusBar } from "expo-status-bar";
import Router from "./src/navigation/root";

export default function App() {
  const [location, setLocation] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState(null);
  console.log(location);

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  // const androidPermission = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //       {
  //         title: "Uber App Camera Permission",
  //         message:
  //           "Uber App needs access to your location " +
  //           "so you can take awesome trip.",
  //         buttonNeutral: "Ask Me Later",
  //         buttonNegative: "Cancel",
  //         buttonPositive: "OK",
  //       }
  //     );
  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       console.log("You can use the location");
  //     } else {
  //       console.log("Location permission denied");
  //     }
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // };
  // React.useEffect(() => {
  //   if (Platform.OS === "android") {
  //     androidPermission();
  //   } else {
  //     // IOS
  //     Geolocation.requestAuthorization();
  //   }
  // }, []);
  return (
    <View>
      <StatusBar style="auto" />
      <Router />
    </View>
  );
}
