import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: "#e2e2e2",
    margin: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 5,
  },
  inputText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#434343",
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 100,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderColor: "#b3b2b3",
  },
  iconeContainer: {
    backgroundColor: "#b3b3b3",
    padding: 10,
    borderRadius: 25,
  },
  destinationText: {
    marginLeft: 10,
    fontWeight: "600",
    fonstSize: 16,
  },
});

export default styles;
