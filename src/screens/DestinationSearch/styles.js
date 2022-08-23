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
    marginLeft: 20,
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
  circle: {
    position: "absolute",
    width: 7,
    height: 7,
    backgroundColor: "#060606",
    borderRadius: 5,
    top: 35,
    left: 15,
  },
  line: {
    position: "absolute",
    width: 2,
    height: 64,
    backgroundColor: "#919191",
    top: 42,
    left: 17.5,
  },
  square: {
    position: "absolute",
    width: 7,
    height: 7,
    backgroundColor: "#060606",
    top: 100,
    left: 15,
  },
});

export default styles;
