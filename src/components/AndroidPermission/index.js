import { PermissionsAndroid, Platform } from "react-native";

export const androidPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "Uber App Camera Permission",
        message:
          "Uber App needs access to your location " +
          "so you can take awesome trip.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the location");
    } else {
      console.log("Location permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};
React.useEffect(() => {
  if (Platform.OS === "android") {
    androidPermission();
  } else {
    // IOS
    Geolocation.requestAuthorization();
  }
}, []);
