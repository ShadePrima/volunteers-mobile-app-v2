import React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Image, View } from "react-native";

import cars from "../../assets/data/cars";

const HomeMap = () => {
  const getImage = (type) => {
    if (type === "UberX") {
      return require("../../assets/images/top-UberX.png");
    }
    if (type === "Comfort") {
      return require("../../assets/images/top-Comfort.png");
    }
    if (type === "UberXL") {
      return require("../../assets/images/top-UberXL.png");
    }
  };
  return (
    <View>
      <MapView
        style={{
          height: "100%",
          width: "100%",
        }}
        provider={PROVIDER_GOOGLE}
        showUserLocation={true}
        initialRegion={{
          latitude: 47.746931,
          longitude: 35.141517,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {cars.map((car) => (
          <Marker
            key={car.id}
            coordinate={{ latitude: car.latitude, longitude: car.longitude }}
          >
            <Image
              style={{
                height: 50,
                width: 50,
                resizeMode: "contain",
                transform: [
                  {
                    rotate: `${car.heading}deg`,
                  },
                ],
              }}
              source={getImage(car.type)}
            />
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

export default HomeMap;
