import { StyleSheet } from "react-native";
import { Colors } from "../../Theme/Colors";
import { Spaces } from "../../Theme/Spaces";
import { calcHeight } from "../../utils/responsive";

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.Basic,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    zIndex: -1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  addressContainer: {
    position: "absolute",
    top: calcHeight(50),
    left: Spaces.Large,
    right: Spaces.Large,
  },
});
