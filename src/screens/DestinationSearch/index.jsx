import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { View, Text, TextInput, SafeAreaView } from "react-native";

import styles from "./styles";
import PlaceRow from "./PlaceRow";

const DestinationSearch = () => {
  const [originPlace, setOriginPlace] = React.useState(null);
  const [destinationPlace, setDestinationPlace] = React.useState(null);

  React.useEffect(() => {
    console.warn("useEffect is called");
    if (originPlace && destinationPlace) {
      consoloe.warn("Redirect to results");
    }
  }, [originPlace, destinationPlace]);

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Where from ?"
        onPress={(data, details = null) => {
          setOriginPlace({ data, details });
          console.log(data, details);
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
        renderRow={(data) => <PlaceRow data={data} />}
      />
      <GooglePlacesAutocomplete
        placeholder="Where to ?"
        onPress={(data, details = null) => {
          setDestinationPlace({ data, details });
          console.log(data, details);
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
      />

      <View style={styles.circle}></View>
      <View style={styles.line}></View>
      <View style={styles.square}></View>
    </View>
  );
};

export default DestinationSearch;
