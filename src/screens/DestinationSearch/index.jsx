import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { View, Text, TextInput, SafeAreaView } from "react-native";

import styles from "./styles";
import PlaceRow from "./PlaceRow";
import { useNavigation } from "@react-navigation/native";

// navigator.geolocation = require("expo-location");
// navigator.geolocation = require("@react-native-community/geolocation");

const RozumovkaPlace = {
  description: "Vladimir Home",
  geometry: { location: { lat: 47.752561, lng: 35.139369 } },
};
const workPlace = {
  description: "Work",
  geometry: { location: { lat: 47.83964, lng: 35.130867 } },
};

const AlksandrPlace = {
  description: "Baburka",
  geometry: { location: { lat: 47.818262, lng: 35.055319 } },
};

const DestinationSearch = () => {
  const [originPlace, setOriginPlace] = React.useState(null);
  const [destinationPlace, setDestinationPlace] = React.useState(null);

  const navigation = useNavigation();

  const checkNavigation = () => {
    if (originPlace && destinationPlace) {
      navigation.navigate("SearchResults", {
        originPlace,
        destinationPlace,
      });
    }
  };

  React.useEffect(() => {
    checkNavigation();
  }, [originPlace, destinationPlace]);

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Where from ?"
        onPress={(data, details = null) => {
          setOriginPlace({ data, details });
        }}
        enablePoweredByContainer={false}
        suppressDefaultStyles
        styles={{
          textInput: styles.textInput,
          container: styles.autocompleteContainer,
          listView: styles.listView,
          separator: styles.separator,
        }}
        fetchDetails
        query={{
          key: "AIzaSyAFZdRRBDQVvcbi8FT4_HQfCqVPy6T6NVo",
          language: "en",
        }}
        // currentLocation={true}
        // currentLocationLabel="Current location"
        renderRow={(data) => <PlaceRow data={data} />}
        predefinedPlaces={[RozumovkaPlace, workPlace, AlksandrPlace]}
        renderDescription={(data) => data.description || data.vicinity}
      />
      <GooglePlacesAutocomplete
        placeholder="Where to ?"
        onPress={(data, details = null) => {
          setDestinationPlace({ data, details });
        }}
        enablePoweredByContainer={false}
        suppressDefaultStyles
        styles={{
          textInput: styles.textInput,
          container: { ...styles.autocompleteContainer, top: 70 },
          separator: styles.separator,
        }}
        fetchDetails
        query={{
          key: "AIzaSyAFZdRRBDQVvcbi8FT4_HQfCqVPy6T6NVo",
          language: "en",
        }}
        renderRow={(data) => <PlaceRow data={data} />}
        predefinedPlaces={[RozumovkaPlace, workPlace, AlksandrPlace]}
        renderDescription={(data) => data.description || data.vicinity}
      />

      <View style={styles.circle}></View>
      <View style={styles.line}></View>
      <View style={styles.square}></View>
    </View>
  );
};

export default DestinationSearch;
