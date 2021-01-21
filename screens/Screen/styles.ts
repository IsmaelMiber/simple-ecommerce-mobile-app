import { StyleSheet } from "react-native";
import { Spaces } from "../../Theme/Spaces";
import { Colors } from "../../Theme/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Spaces.Large,
    paddingTop: Spaces.Medium,
    backgroundColor: Colors.BasicBG,
  },
  flyContentContainer: {
    position: "absolute",
    bottom: Spaces.Large,
    left: Spaces.Large,
    right: Spaces.Large,
  },
});
