import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 10,
    height: "100%",
  },
  textInput: {
    padding: 10,
    height: 50,
    backgroundColor: "#eee",
    marginVertical: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  iconeContainer: {
    backgroundColor: "#a2a2a2",
    padding: 5,
    borderRadius: 50,
    marginRight: 15,
  },
  autocompleteContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    right: 10,
  },
  listView: {
    position: "absolute",
    top: 120,
  },
  separator: {
    backgroundColor: "#bdc1c1",
    height: 1,
  },
});

export default styles;
