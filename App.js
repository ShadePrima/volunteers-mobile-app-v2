import React from "react";
import * as Location from "expo-location";

// import { StatusBar } from "expo-status-bar";

import Navigation from "./src/navigation/root";

export default function App() {
<<<<<<< HEAD
  return (
    <View>
      <StatusBar style="auto" />
      <HomeScreen />
      {/* <DestinationSearch />  */}
      {/* <SearchResults /> */}
      //Home
    </View>
  );
=======
  const [location, setLocation] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState(null);

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

  return <Navigation />;
>>>>>>> newFeature
}
