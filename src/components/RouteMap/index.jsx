import React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Image, View } from "react-native";
import MapViewDirections from "react-native-maps-directions";

const GOOGLE_MAPS_APIKEY = "AIzaSyAFZdRRBDQVvcbi8FT4_HQfCqVPy6T6NVo";

const RouteMap = () => {
  const origin = { latitude: 47.757424, longitude: 35.139786 };
  const destination = { latitude: 47.83942, longitude: 35.130647 };

  return (
    <View>
      <MapView
        style={{
          height: "100%",
          wedth: "100%",
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
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={2}
          strokeColor="blue"
        />
        <Marker coordinate={origin} title={"Origin"} />
        <Marker coordinate={destination} title={"Origin"} />
      </MapView>
    </View>
  );
};

export default RouteMap;
