import React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { View } from "react-native";
import MapViewDirections from "react-native-maps-directions";

const GOOGLE_MAPS_APIKEY = "AIzaSyAFZdRRBDQVvcbi8FT4_HQfCqVPy6T6NVo";

const RouteMap = ({ origin, destination }) => {
  const originLoc = {
    latitude: origin.details.geometry.location.lat,
    longitude: origin.details.geometry.location.lng,
  };
  const destinationLoc = {
    latitude: destination.details.geometry.location.lat,
    longitude: destination.details.geometry.location.lng,
  };
  console.log(originLoc, destinationLoc, "Route Map");

  const myOrigin = { latitude: 47.757424, longitude: 35.139786 };
  const myDestination = { latitude: 47.83942, longitude: 35.130647 };

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
        <MapViewDirections
          origin={originLoc}
          destination={destinationLoc}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={2}
          strokeColor="blue"
        />
        <Marker coordinate={myOrigin} title={"Origin"} />
        <Marker coordinate={myDestination} title={"Destination"} />
      </MapView>
    </View>
  );
};

export default RouteMap;
